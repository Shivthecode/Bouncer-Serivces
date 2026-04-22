import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle, Clock, Lock, Award } from 'lucide-react';

const Hero = () => {
  return (
    /* mt-20 (Mobile) aur lg:mt-[88px] (Desktop): 
        Ye aapke Navbar ki height ke barabar gap create karega 
        taaki image aur content navbar ke piche na chhupien.
    */
    <section className="relative w-full bg-[#F5F5F7] dark:bg-[#050505] overflow-hidden font-sans transition-colors duration-500 mt-20 lg:mt-[88px]">
      
      {/* --- 👮 LARGE CINEMATIC IMAGE --- */}
      {/* 'hidden lg:block' add kiya hai taaki phone par image na dikhe */}
      <div className="absolute inset-0 w-full h-full z-0 hidden lg:block">
        {/* Gradients for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F7] via-[#F5F5F7]/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent z-10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F7] dark:from-[#050505] via-transparent to-transparent z-10 lg:hidden"></div>
        
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="src/assets/gaurd.png" 
          className="w-full h-full object-cover object-right lg:object-center brightness-100 dark:brightness-75"
        />
      </div>

      {/* --- 📝 CONTENT LAYER --- 
          Height ab 'calc(100vh - navbar_height)' hai taaki screen ke bahar na jaye
      */}
      <div className="relative z-20 min-h-[calc(100vh-88px)] w-full flex items-center py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
            
            {/* Tactical Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mx-auto lg:mx-0 shadow-sm"
            >
              <Shield size={14} className="text-blue-600" /> Professional Elite Force
            </motion.div>

            {/* Big Bold Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[1] lg:leading-[0.85] text-[#0A1D56] dark:text-white tracking-tighter uppercase">
                Your Safety <br />
                <span className="text-blue-600">Our Priority</span>
              </h1>
              <div className="w-24 h-2 bg-blue-600 mt-6 rounded-full mx-auto lg:mx-0 shadow-lg"></div>
            </motion.div>

            {/* Paragraph Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Experience the pinnacle of protection. We provide verified, 
              high-caliber bouncers and specialists trained for high-pressure 
              environments.
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-3 group">
                Deploy Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/80 dark:bg-white/5 backdrop-blur-md text-[#0A1D56] dark:text-white border border-zinc-200 dark:border-white/10 px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-sm">
                Learn More
              </button>
            </div>

            {/* Bottom Tactical Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-black/5 dark:border-white/5 mt-8 max-w-xl mx-auto lg:mx-0">
              {[
                { icon: <Award size={22}/>, label: "Elite Unit" },
                { icon: <Clock size={22}/>, label: "24/7 Shield" },
                { icon: <Lock size={22}/>, label: "Discreet" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default Hero;