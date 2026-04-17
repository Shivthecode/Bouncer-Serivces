import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Personal Security",
    desc: "Elite bouncers for personal protection, strictly vetted for high-profile individuals.",
    icon: "🛡️"
  },
  {
    title: "Event Security",
    desc: "Comprehensive crowd control and VIP management for weddings, clubs, and concerts.",
    icon: "🏟️"
  },
  {
    title: "Armed Escorts",
    desc: "Professional armed personnel for high-risk transit and asset protection.",
    icon: "🔫"
  },
  {
    title: "Residential Guarding",
    desc: "24/7 elite surveillance and guarding for luxury properties and villas.",
    icon: "🏰"
  }
];

const Services = () => {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#F0F8FF] text-4xl md:text-7xl font-black uppercase tracking-tighter"
          >
            TACTICAL <br /> <span className="opacity-20 italic font-light">SOLUTIONS</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#F0F8FF] mt-4 opacity-50"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-[#F0F8FF] text-xl font-bold uppercase tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                
                {/* Micro Interaction Link */}
                <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors">
                  Learn More <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 right-0 text-[15rem] font-black text-white/[0.02] leading-none pointer-events-none select-none -mb-20">
        FORCE
      </div>
    </section>
  );
};

export default Services;