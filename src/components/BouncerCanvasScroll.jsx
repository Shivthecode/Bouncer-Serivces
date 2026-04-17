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

  // ✅ FIXED PATH (src/assets ke liye correct method)
  const getFrameUrl = (index) => {
    const frameIndex = (index + 1).toString().padStart(3, "0");

    return new URL(
      `../assets/bouncer_frames/ezgif-frame-${frameIndex}.jpg`,
      import.meta.url
    ).href;
  };

  // 🔥 Preload images
  useEffect(() => {
    let imgs = [];
    let loaded = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);

        // ⚡ early start
        if (loaded > 30 && !isReady) {
          setImages(imgs);
          setIsReady(true);
        }

        if (loaded === frameCount) {
          setImages(imgs);
        }
      };

      img.onerror = () => {
        console.error("❌ Missing:", img.src);
      };

      imgs.push(img);
    }
  }, []);

  // 🎯 Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0.05, 0.2, 0.4], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.2], [40, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.7, 0.9, 0.98], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.7, 0.9], [0.8, 1]);

  // 🎬 Canvas animation
  useEffect(() => {
    if (!isReady || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const render = (index) => {
      const img = images[index];
      if (!img) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
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
        end: "+=800%",
        scrub: 1.5,
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
      scrollAnim.scrollTrigger.kill();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isReady, images]);

  return (
    <div ref={sectionRef} className="relative w-full bg-black">
      
      {/* 🔥 Loader */}
      {!isReady && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50 text-xs uppercase tracking-widest">
          Loading Elite Force... {Math.round((loadedCount / frameCount) * 100)}%
        </div>
      )}

      {/* 🎥 Canvas */}
      <div className="h-screen sticky top-0 overflow-hidden">
        
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-70"
        />

        {/* ✨ Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute text-center"
          >
            <h2 className="text-white text-5xl md:text-[100px] font-black uppercase">
              Elite Guardians
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: opacity2, scale: scale2 }}
            className="absolute text-center"
          >
            <h2 className="text-white text-5xl md:text-[100px] font-black uppercase">
              Mission Secure
            </h2>
          </motion.div>

        </div>

        {/* 🎨 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
      </div>
    </div>
  );
};

export default BouncerCanvasScroll;