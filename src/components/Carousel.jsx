import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Import images
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";

const carouselImages = [img1, img2, img3, img1]; 

const slideContent = [
  {
    title: "Executive Protection",
    desc: "Elite security for VIPs, celebrities, and high-profile executives. Our personnel are trained in tactical defense and discreet surveillance.",
    stats: "24/7 Coverage",
    feature: "Ex-Servicemen Units",
    tag: "Premium"
  },
  {
    title: "Event Security",
    desc: "Comprehensive crowd management and entry control for concerts, weddings, and corporate galas. We ensure a zero-incident environment.",
    stats: "Verified Staff",
    feature: "Rapid Response",
    tag: "Tactical"
  },
  {
    title: "Asset Protection",
    desc: "Securing your physical and intellectual property with advanced perimeter control and professional guarding services.",
    stats: "Fully Insured",
    feature: "Real-time Reporting",
    tag: "Secure"
  },
  {
    title: "Bouncer Services",
    desc: "Professional male and female bouncers for high-end clubs and private parties, maintaining decorum with firm yet polite authority.",
    stats: "Licensed Pros",
    feature: "Conflict Resolution",
    tag: "Reliable"
  }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // --- 🔥 PC ONLY: AUTOMATIC SLIDE LOGIC ---
  useEffect(() => {
    // Check if screen is PC size (lg: 1024px)
    const isPC = window.innerWidth >= 1024;
    
    if (isPC) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % slideContent.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [index]); // Reset timer on index change for smooth flow

  // --- 📱 MOBILE ONLY: SWIPE LOGIC ---
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setIndex((prev) => (prev + 1) % slideContent.length);
    } else if (info.offset.x > swipeThreshold) {
      setIndex((prev) => (prev - 1 + slideContent.length) % slideContent.length);
    }
  };

  return (
    <section className="relative w-full bg-[#0A1D56] dark:bg-[#050505] overflow-hidden">
      
      {/* 📱 MOBILE & TABLET: MANUAL SWIPE ONLY */}
      <div className="lg:hidden w-full min-h-[600px] flex flex-col items-center justify-center p-6 relative">
        <div className="relative w-full max-w-sm h-[480px] cursor-grab active:cursor-grabbing"> 
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-8 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)] touch-none"
            >
              <div className="flex justify-between items-start mb-6 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white">
                  {slideContent[index].tag}
                </span>
                <span className="text-white/40 text-[10px] font-black tracking-widest">0{index + 1} / 04</span>
              </div>

              <div className="flex-1 pointer-events-none">
                <h3 className="text-4xl font-black text-white leading-[0.9] uppercase italic tracking-tighter mb-6">
                  {slideContent[index].title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">
                  {slideContent[index].desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 pointer-events-none">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] text-blue-400 uppercase font-black tracking-widest mb-1">Availability</p>
                    <p className="text-white text-xs font-bold">{slideContent[index].stats}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-blue-400 uppercase font-black tracking-widest mb-1">Key Feature</p>
                    <p className="text-white text-xs font-bold">{slideContent[index].feature}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-3">
            {slideContent.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-10 bg-blue-500' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mt-16 animate-pulse">
           Swipe to explore
        </p>
      </div>

      {/* 💻 PC VERSION: AUTOMATIC SLIDING (Original PC Style) */}
      <div className="hidden lg:block w-full h-screen p-6">
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img
                src={carouselImages[index]}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                loading="eager" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-blue-900/30 to-black/60"></div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {slideContent.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? 'w-12 bg-blue-600' : 'w-4 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Carousel;