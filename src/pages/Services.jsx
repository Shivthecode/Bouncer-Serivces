import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, UserCheck, PartyPopper, Building2, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Private Security Guards",
    desc: "Fully committed units staying vigilant 24/7 for total security assurance and peace of mind.",
    icon: <Shield size={32} />,
    img: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Event Security",
    desc: "Ensuring safety for professional and social events so you can celebrate without worries.",
    icon: <PartyPopper size={32} />,
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Personal Security (PSO)",
    desc: "Trained ex-servicemen Guardians prioritizing your safety with unparalleled expertise.",
    icon: <UserCheck size={32} />,
    img: "https://images.unsplash.com/photo-1590402444587-43d765678190?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bouncer Services",
    desc: "Verified male and female bouncers to elevate your events and keep the environment safe.",
    icon: <Users size={32} />,
    img: "https://images.unsplash.com/photo-1555933935-d0743bc139c2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Facility Management",
    desc: "Efficiency meets excellence in the upkeep and care of your space for comfort and productivity.",
    icon: <Building2 size={32} />,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Office Security",
    desc: "Safeguarding your workspace and empowering success so you can focus on business growth.",
    icon: <Briefcase size={32} />,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <section className="relative py-24 bg-[#F5F5F7] dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- 🌟 IMPROVED SECTION HEADING --- */}
        <div className="mb-20 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 dark:text-blue-500 text-xs font-black tracking-[0.5em] uppercase block mb-4">
                What We Offer
              </span>
              <h2 className="text-[#0A1D56] dark:text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                OUR <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">SERVICES</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block h-px flex-1 bg-gradient-to-r from-blue-600/50 to-transparent mb-4"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xs text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed uppercase tracking-widest font-bold lg:text-right"
            >
              Elite security excellence delivered through verified tactical professionals across the nation.
            </motion.p>
          </div>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-900/20 border border-black/5 dark:border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-xl dark:shadow-none hover:border-blue-600/30"
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-100 group-hover:brightness-90" 
                />
                
                {/* Icon Box */}
                <div className="absolute top-6 left-6 z-20 p-3 bg-white/90 dark:bg-[#0A1D56]/80 backdrop-blur-md rounded-2xl border border-blue-600/20 text-blue-600 dark:text-blue-400 shadow-lg">
                  {service.icon}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-[#0A1D56] dark:text-[#F0F8FF] text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-8 h-12 overflow-hidden font-medium">
                  {service.desc}
                </p>
                
                <motion.button
                  whileHover={{ gap: "16px" }}
                  className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 transition-all"
                >
                  Request Deployment <ArrowRight size={14} strokeWidth={3} />
                </motion.button>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-10 -left-10 text-[12rem] font-black text-blue-600/[0.03] dark:text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        TACTICAL
      </div>
    </section>
  );
};

export default Services;