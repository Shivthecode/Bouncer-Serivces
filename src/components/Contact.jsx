import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#F0F8FF] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12"
        >
          REQUEST <span className="opacity-20 italic font-light">DEPLOYMENT</span>
        </motion.h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <input 
            type="text" 
            placeholder="NAME / ORGANIZATION" 
            className="bg-zinc-900/50 border border-white/10 p-4 rounded-lg text-white focus:border-white/40 outline-none transition-all"
          />
          <input 
            type="email" 
            placeholder="OFFICIAL EMAIL" 
            className="bg-zinc-900/50 border border-white/10 p-4 rounded-lg text-white focus:border-white/40 outline-none transition-all"
          />
          <textarea 
            placeholder="MISSION DETAILS (LOCATION, TIME, THREAT LEVEL)" 
            className="md:col-span-2 bg-zinc-900/50 border border-white/10 p-4 rounded-lg h-32 text-white focus:border-white/40 outline-none transition-all"
          ></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 bg-[#F0F8FF] text-black font-black py-4 rounded-lg uppercase tracking-[0.3em] text-sm"
          >
            Send Deployment Request
          </motion.button>
        </form>

        <div className="mt-16 flex justify-center gap-12 text-zinc-500 text-xs tracking-widest uppercase">
          <p>HQ: New Delhi, India</p>
          <p>Email: deploy@eliteforce.in</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;