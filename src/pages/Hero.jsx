import React from 'react';
import guardImg from "../assets/g2.png";
import { motion } from 'framer-motion';
import { Shield, ArrowRight, User, Award, Clock, Lock, CheckCircle, PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-[#050505] overflow-hidden font-sans">
      
      {/* --- 👮 BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={guardImg}
          className="w-full h-full object-cover object-[center_right] lg:object-right"
          alt="Security Guard"
        />
        
        {/* 🔥 PC ONLY GRADIENT (Exactly as your original) */}
        <div className="absolute inset-0 
          bg-gradient-to-r 
          from-white via-white/95 to-transparent 
          dark:from-black dark:via-black/90 dark:to-transparent 
          w-full lg:w-[65%] z-10 hidden lg:block">
        </div>

        {/* 🔥 MOBILE ONLY OVERLAY (To make text readable on top of image) */}
        <div className="absolute inset-0 bg-black/60 lg:hidden z-10"></div>
        
        {/* 🔥 PC ONLY BLUE CURVED OVERLAYS (Exactly as your original) */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[35%] bg-blue-600/90 z-10 hidden lg:block"
          style={{ clipPath: 'polygon(0 45%, 100% 100%, 0% 100%)', mixBlendMode: 'multiply' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-full h-[40%] bg-blue-700/40 z-0 hidden lg:block"
          style={{ clipPath: 'polygon(0 30%, 100% 100%, 0% 100%)' }}
        ></div>
      </div>

      {/* --- 📝 CONTENT LAYER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        
        {/* MOBILE: Added 'bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl'
            PC: All these styles are removed using 'lg:bg-transparent lg:p-0 lg:border-none lg:shadow-none lg:backdrop-blur-none'
        */}
        <div className="max-w-2xl space-y-8 bg-black/20 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/10 shadow-2xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-none lg:shadow-none">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-white/5 px-4 py-2 rounded-lg border border-blue-100 dark:border-white/10"
          >
            <Shield size={16} className="text-blue-600" />
            <span className="text-blue-900 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
              Trusted. Professional. Discreet.
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-[85px] font-black leading-[1.1] lg:leading-[0.9] text-white lg:text-gray-900 lg:dark:text-white tracking-tight"
            >
              Your Safety, <br />
              <span className="text-blue-400 lg:text-blue-600 lg:dark:text-blue-400">Our Priority</span>
            </motion.h1>

            <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mt-4"></div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-100 lg:text-gray-800 lg:dark:text-gray-200">
              Professional Bouncers & VIP Security Services
            </h3>

            <p className="text-gray-300 lg:text-gray-500 lg:dark:text-gray-400 text-lg leading-relaxed max-w-lg font-medium">
              We provide elite security solutions tailored to protect what matters most — 
              your people, your reputation, and your peace of mind.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="tel:+18005550199" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-200 dark:shadow-blue-900/40 active:scale-95"
            >
              <PhoneCall size={20} /> Book Now <ArrowRight size={20} />
            </a>

            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 lg:bg-white lg:dark:bg-white/5 border-2 border-white/20 lg:border-gray-100 lg:dark:border-white/10 hover:border-blue-100 dark:hover:border-blue-500 text-white lg:text-gray-700 lg:dark:text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-sm active:scale-95"
            >
              <User size={20} /> Learn More <ArrowRight size={20} />
            </button>
          </div>

          {/* Feature Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white/10 lg:bg-white/70 lg:dark:bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 lg:border-white/50 lg:dark:border-white/10 shadow-2xl mt-12"
          >
            {[
              { icon: <Award />, label: "Trained Professionals" },
              { icon: <Clock />, label: "24/7 Protection" },
              { icon: <Lock />, label: "Discreet & Reliable" },
              { icon: <CheckCircle />, label: "Licensed & Insured" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-blue-400 lg:text-blue-600 lg:dark:text-blue-400 bg-white/10 lg:bg-blue-100/50 lg:dark:bg-blue-500/10 p-2 rounded-lg">
                  {React.cloneElement(item.icon, { size: 18 })}
                </div>
                <span className="text-[10px] lg:text-[11px] font-bold text-white lg:text-gray-700 lg:dark:text-gray-300 uppercase leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;