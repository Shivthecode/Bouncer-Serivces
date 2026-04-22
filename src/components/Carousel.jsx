import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1586448162796-f5ec029cafa7?q=80&w=2000&auto=format&fit=crop",
  "https://media.istockphoto.com/id/481242114/photo/security-guard-at-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=GGd_9SO944U_9uXCocg7b_u10_SkaZRBfXMysM_ZmnQ=",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop",
  "https://media.istockphoto.com/id/925123658/photo/police-swat-team-at-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=dj0jGDiU2--0-mfV___TdK8qIdnCgZywzgYGWPcjqqI="
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A1D56] dark:bg-[#050505] transition-colors duration-500 font-sans">
      
      {/* --- The Image Slider (Fixed White Flash) --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout"> {/* 'popLayout' flash ko rokta hai */}
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Cinematic Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/20 dark:bg-black/60 z-10"></div>
            
            <img 
              src={images[index]} 
              alt={`Slide ${index}`} 
              className="h-full w-full object-cover brightness-90 dark:brightness-75 transition-all duration-1000"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Floating Content --- */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          key={`content-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
            Operational Excellence
          </span>
          <h2 className="text-[#0A1D56] dark:text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Elite <br /> <span className="text-blue-600 dark:text-white/20 italic font-light">Environments</span>
          </h2>
          
          {/* Blue Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          />
        </motion.div>
      </div>

      {/* --- Progress Indicators (Dots) --- */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index 
                ? 'w-12 bg-blue-600 dark:bg-white shadow-[0_0_10px_rgba(37,99,235,0.8)]' 
                : 'w-4 bg-white/30 dark:bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Bottom Vignette - Smooth blend to next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#F5F5F7] dark:from-[#050505] to-transparent z-20"></div>

    </section>
  );
};

export default Carousel;