import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Target, ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';

const Hero = () => {
  const bouncerImages = [
    "https://images.unsplash.com/photo-1652739758426-56a564265f9e?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614213856754-b28af802aa04?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1763735134174-eebb53a567f9?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605071483252-41904a888644?w=800&auto=format&fit=crop"
  ];

  const [activeImg, setActiveImg] = useState(bouncerImages[0]);

  // Auto-switch logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((current) => {
        const currentIndex = bouncerImages.indexOf(current);
        const nextIndex = (currentIndex + 1) % bouncerImages.length;
        return bouncerImages[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [activeImg]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-500 bg-[#F5F5F7] dark:bg-[#050505] font-sans">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#722F37]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT SIDE: DETAILED CONTENT --- */}
        <div className="lg:col-span-6 space-y-10 order-1 text-center lg:text-left">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
            >
              <div className="w-1.5 h-1.5 bg-[#722F37] rounded-full animate-pulse shadow-[0_0_10px_#722F37]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white/70">Strategic Command HQ | Amethi</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-[90px] font-black uppercase tracking-tighter leading-[0.85] text-black dark:text-white"
            >
              ELITE <br /> 
              <span className="text-[#722F37] italic font-light">MANGUARD.</span>
            </motion.h1>

            <motion.p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg max-w-xl mx-auto lg:mx-0 font-medium tracking-tight leading-relaxed">
              Mahaveer Bouncer Force delivers the pinnacle of tactical protection. 
              Our deployment units consist of highly trained professionals, ex-servicemen, 
              and verified specialists engineered for high-pressure corporate and social 
              environments across the UP region.
            </motion.p>
          </div>

          {/* Tactical Features Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-3 border-l-2 border-[#722F37] pl-4">
              <ShieldCheck className="text-[#722F37]" size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">100% Verified</span>
            </div>
            <div className="flex items-center gap-3 border-l-2 border-[#722F37] pl-4">
              <Zap className="text-[#722F37]" size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Rapid Response</span>
            </div>
          </div>

          {/* CIRCULAR THUMBNAILS */}
          <div className="space-y-4 pt-4">
             <div className="flex gap-4 justify-center lg:justify-start">
               {bouncerImages.map((img, i) => (
                 <button
                   key={i}
                   onClick={() => setActiveImg(img)}
                   className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                     activeImg === img 
                     ? 'border-[#722F37] scale-110 shadow-lg' 
                     : 'border-black/10 dark:border-white/10 opacity-40 hover:opacity-100'
                   }`}
                 >
                   <img src={img} className="w-full h-full object-cover" alt="div" />
                 </button>
               ))}
             </div>
          </div>

          <motion.button className="group relative flex items-center gap-6 bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-2xl transition-all overflow-hidden">
            <span className="relative z-10">Initiate Deployment</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-[#722F37] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>
        </div>

        {/* --- RIGHT SIDE: IMAGE WITH BORDER --- */}
        <div className="lg:col-span-6 relative order-2 px-10 group">
          
          {/* Border Accents */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#722F37] rounded-tl-[3rem] pointer-events-none"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#722F37] rounded-br-[3rem] pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeImg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] max-w-[420px] rounded-[3.5rem] p-2 border border-black/5 dark:border-white/10 shadow-2xl mx-auto overflow-visible"
            >
              {/* Outer Border Glow */}
              <div className="absolute inset-0 rounded-[3.5rem] border-2 border-[#722F37]/20 pointer-events-none scale-[1.03]"></div>
              
              <div className="w-full h-full rounded-[3rem] overflow-hidden border border-[#722F37]/30 relative">
                <img 
                  src={activeImg} 
                  alt="Elite Force" 
                  className="w-full h-full object-cover contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <div className="absolute top-10 left-10 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-[#722F37]">
                <Target size={28} />
              </div>

              <div className="absolute bottom-12 right-12 text-right">
                <div className="w-12 h-1 bg-[#722F37] mb-3 ml-auto"></div>
                <p className="text-white font-black text-2xl tracking-tighter uppercase leading-none">Mahaveer <br/>Unit</p>
                <p className="text-[#722F37] text-[8px] font-black uppercase tracking-[0.3em] mt-1">Active Patrol</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-0 right-0 text-[15rem] font-black text-black/[0.02] dark:text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        Elite
      </div>
    </section>
  );
};

export default Hero;