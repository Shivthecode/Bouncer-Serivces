import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1586448162796-f5ec029cafa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNlY3VyaXR5JTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1765366417031-60bc8543189c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlY3VyaXR5JTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-play logic: Har 5 second mein change hoga
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5F5F7] dark:bg-[#050505] transition-colors duration-500 font-sans">
      
      {/* --- The Image Slider --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Cinematic Overlay - Dynamic based on mode */}
          <div className="absolute inset-0 bg-white/10 dark:bg-black/40 z-10"></div>
          
          <img 
            src={images[index]} 
            alt={`Slide ${index}`} 
            className="h-full w-full object-cover transition-all duration-1000"
          />
        </motion.div>
      </AnimatePresence>

      {/* --- Floating Content Over the Carousel --- */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          key={`content-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-[#722F37] dark:text-[#F0F8FF]/60 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
            Operational Excellence
          </span>
          <h2 className="text-black dark:text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Elite <br /> <span className="text-[#722F37] dark:text-white/20 italic font-light">Environments</span>
          </h2>
          
          {/* Subtle Maroon Line under heading */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            className="h-1 bg-[#722F37] mx-auto rounded-full"
          />
        </motion.div>
      </div>

      {/* --- Progress Indicators (Dots) --- */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[3px] transition-all duration-500 rounded-full ${
              i === index 
                ? 'w-16 bg-[#722F37] dark:bg-white' 
                : 'w-6 bg-[#722F37]/20 dark:bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Bottom Vignette - Only in Dark Mode or very subtle in light */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#F5F5F7] dark:from-[#050505] to-transparent z-20 transition-colors duration-500"></div>
    </section>
  );
};

export default Carousel;