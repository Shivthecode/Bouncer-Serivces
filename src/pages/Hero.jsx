import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, IndianRupee, Briefcase, Users, Search, Target, Shield } from 'lucide-react';

const floatingItemVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#050505]">
      
      {/* --- Background Glow Orbs (Ice White Shadows) --- */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F0F8FF]/5 blur-[120px] rounded-full"></div>

      {/* --- 3D Floating Elements (Ice White Theme) --- */}
      {/* Floating Shield */}
      <motion.div
        className="absolute top-[18%] left-[12%] p-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl hidden md:block"
        variants={floatingItemVariants}
        animate="animate"
      >
        <Shield size={38} className="text-[#F0F8FF]" strokeWidth={1} />
      </motion.div>

      {/* Floating Target Icon */}
      <motion.div
        className="absolute bottom-[25%] left-[18%] p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hidden md:block"
        variants={{ animate: { ...floatingItemVariants.animate, y: [0, 15, 0] } }}
        animate="animate"
      >
        <Target size={28} className="text-[#F0F8FF]/60" strokeWidth={1.5} />
      </motion.div>

      {/* Elite Badge Pill */}
      <motion.div
        className="absolute top-[25%] right-[12%] px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center gap-3 shadow-xl hidden md:flex"
        variants={floatingItemVariants}
        animate="animate"
      >
        <div className="w-2 h-2 bg-[#F0F8FF] rounded-full animate-pulse shadow-[0_0_10px_#F0F8FF]"></div>
        <span className="text-[#F0F8FF] text-[10px] font-black uppercase tracking-[0.3em]">Elite Guard Force</span>
      </motion.div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="text-[#F0F8FF]/60 text-[10px] font-bold uppercase tracking-[0.4em]">
            Premium Security Experience
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.9] mb-8 text-white"
        >
          THE NEXT LEVEL <br /> 
          <span className="text-[#F0F8FF] opacity-40 italic font-light">OF PROTECTION.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium tracking-tight"
        >
          No more compromises. Hire India's most elite, verified bouncers 
          with a single click. Security redefined for the modern world.
        </motion.p>


        {/* --- Advanced Filter System (Ice White Edition) --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto p-3 md:p-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] md:rounded-full shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
            
            {/* City Filter */}
            <div className="flex items-center gap-4 px-6 py-3 border-r border-white/5">
              <MapPin size={20} className="text-[#F0F8FF]" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Location</p>
                <select className="bg-transparent text-[#F0F8FF] text-sm font-bold border-none focus:ring-0 p-0 cursor-pointer">
                  <option className="bg-[#050505]">Delhi NCR</option>
                  <option className="bg-[#050505]">Mumbai</option>
                  <option className="bg-[#050505]">Bangalore</option>
                </select>
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-4 px-6 py-3 border-r border-white/5">
              <IndianRupee size={20} className="text-[#F0F8FF]" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Budget</p>
                <select className="bg-transparent text-[#F0F8FF] text-sm font-bold border-none focus:ring-0 p-0 cursor-pointer">
                  <option className="bg-[#050505]">₹1500 - ₹3000</option>
                  <option className="bg-[#050505]">₹3000 - ₹5000</option>
                  <option className="bg-[#050505]">VVIP Tier</option>
                </select>
              </div>
            </div>

            {/* Experience Filter */}
            <div className="flex items-center gap-4 px-6 py-3 border-r border-white/5">
              <Briefcase size={20} className="text-[#F0F8FF]" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Expertise</p>
                <select className="bg-transparent text-[#F0F8FF] text-sm font-bold border-none focus:ring-0 p-0 cursor-pointer">
                  <option className="bg-[#050505]">5+ Years Exp</option>
                  <option className="bg-[#050505]">Ex-Military</option>
                  <option className="bg-[#050505]">Event Special</option>
                </select>
              </div>
            </div>

            {/* Search Button (Ice White Primary) */}
            <div className="p-1">
              <motion.button 
                whileHover={{ backgroundColor: "#FFFFFF", scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#F0F8FF] text-black rounded-full text-[11px] font-black py-5 tracking-[0.2em] shadow-xl transition-all flex items-center justify-center gap-3"
              >
                SEARCH BOUNCERS
                <Search size={16} />
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;