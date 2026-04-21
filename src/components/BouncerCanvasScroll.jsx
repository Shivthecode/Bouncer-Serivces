import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BouncerCanvasScroll = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const frameCount = 240;
  const currentFrame = useRef(0);

  const getFrameUrl = (index) => {
    const frameIndex = (index + 1).toString().padStart(3, "0");
    return new URL(
      `../assets/bouncer_frames/ezgif-frame-${frameIndex}.jpg`,
      import.meta.url
    ).href;
  };

  useEffect(() => {
    let imgs = [];
    let loaded = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded > 30 && !isReady) {
          setImages(imgs);
          setIsReady(true);
        }
        if (loaded === frameCount) setImages(imgs);
      };
      imgs.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Responsive Text Scaling
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.2, 0.4], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.2], [40, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.7, 0.9, 0.98], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.7, 0.85], [0.8, 1]);

  useEffect(() => {
    if (!isReady || images.length === 0) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const render = (index) => {
      const img = images[index];
      if (!img) return;

      // --- 🛠️ RESPONSIVE CANVAS LOGIC (Object-Fit: Cover equivalent) ---
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imageWidth = img.width;
      const imageHeight = img.height;

      const ratio = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
      const newWidth = imageWidth * ratio;
      const newHeight = imageHeight * ratio;
      
      // Center the image
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, newWidth, newHeight);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(currentFrame.current);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const scrollAnim = gsap.to({}, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=600%", // Mobile ke liye thoda fast scroll
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const frameIndex = Math.floor(self.progress * (frameCount - 1));
          if (frameIndex !== currentFrame.current) {
            currentFrame.current = frameIndex;
            requestAnimationFrame(() => render(frameIndex));
          }
        },
      },
    });

    return () => {
      if (scrollAnim.scrollTrigger) scrollAnim.scrollTrigger.kill();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isReady, images]);

  return (
    <div ref={sectionRef} className="relative w-full bg-[#F5F5F7] dark:bg-[#050505] transition-colors duration-500">
      
      {/* ⚡ Loader - Responsive Text */}
      {!isReady && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#F5F5F7] dark:bg-black text-black dark:text-white z-50 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] px-10 text-center">
          SYNCHRONIZING TACTICAL UNIT... {Math.round((loadedCount / frameCount) * 100)}%
        </div>
      )}

      <div className="h-screen sticky top-0 overflow-hidden">
        
        {/* Canvas - Full Width/Height */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-90 dark:opacity-80 transition-opacity duration-500"
        />

        {/* Floating Text - Fully Responsive Sizes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center px-4 w-full">
            <h2 className="text-black dark:text-white text-4xl sm:text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-none shadow-sm">
              Elite <span className="text-[#722F37] dark:text-white/30 italic font-light">Guardians</span>
            </h2>
            <p className="text-black/50 dark:text-white/20 text-[10px] uppercase tracking-[0.4em] mt-4 font-bold md:hidden">Amethi Division</p>
          </motion.div>

          <motion.div style={{ opacity: opacity2, scale: scale2 }} className="absolute text-center px-4 w-full">
            <h2 className="text-black dark:text-white text-4xl sm:text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-none shadow-sm">
              Mission <span className="text-[#722F37] dark:text-white/30 italic font-light">Secure</span>
            </h2>
          </motion.div>
        </div>

        {/* 🎨 Overlay - Light/Dark Responsive */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] via-transparent to-[#F5F5F7] dark:from-black dark:via-transparent dark:to-black opacity-40 dark:opacity-70 transition-all duration-500 z-10" />
      </div>
    </div>
  );
};

export default BouncerCanvasScroll;