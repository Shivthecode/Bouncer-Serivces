import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h2 className="text-[#F0F8FF] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            WE ARE <br /> <span className="opacity-20 italic font-light">THE SHIELD</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Elite Bouncer Force India ki sabse trusted decentralized security agency hai. Hum sirf bouncers provide nahi karte, hum ek "Safe Ecosystem" create karte hain. 
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#F0F8FF] text-3xl font-black">500+</h4>
              <p className="text-zinc-600 uppercase text-xs tracking-widest">Verified Units</p>
            </div>
            <div>
              <h4 className="text-[#F0F8FF] text-3xl font-black">24/7</h4>
              <p className="text-zinc-600 uppercase text-xs tracking-widest">Rapid Response</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"></div>
          {/* Yahan tu apni koi bouncer ki image ya logo daal sakta hai */}
          <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[10rem] font-bold">FORCE</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;