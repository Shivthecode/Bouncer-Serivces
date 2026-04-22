import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// 1. Icons ko * as Lucide se import karo taaki koi single icon crash na kare
import * as Lucide from 'lucide-react'; 

const teamMembers = [
  {
    name: "Vikram Singh",
    role: "Head of Operations",
    exp: "15+ Years Exp",
    img: "https://images.unsplash.com/photo-1590402444587-43d765678190?q=80&w=800&auto=format&fit=crop",
    specialty: "VIP Protection"
  },
  {
    name: "Arjun Pratap",
    role: "Tactical Lead",
    exp: "12+ Years Exp",
    img: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=800&auto=format&fit=crop",
    specialty: "Crowd Control"
  },
  {
    name: "Sanjana Reddy",
    role: "Female Wing Chief",
    exp: "10+ Years Exp",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    specialty: "Corporate Security"
  },
  {
    name: "Ranveer Khan",
    role: "Field Supervisor",
    exp: "14+ Years Exp",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    specialty: "Event Security"
  }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Safe Icon Components nikaalo
  const ShieldCheck = Lucide.ShieldCheck || Lucide.Shield;
  const Instagram = Lucide.Instagram || Lucide.Camera;
  const Facebook = Lucide.Facebook || Lucide.FacebookIcon || Lucide.Shield; // Fallback to Shield if Facebook fails
  const ShieldAlert = Lucide.ShieldAlert || Lucide.Shield;

  return (
    <section className="relative py-32 bg-[#F5F5F7] dark:bg-[#050505] overflow-hidden border-t border-blue-600/10 transition-colors duration-500 font-sans">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <ShieldAlert size={14} /> Mahaveer Tactical Unit
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#0A1D56] dark:text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            OUR ELITE <span className="text-blue-600 italic font-light">OPERATIVES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border-4 border-white dark:border-white/5 bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:-translate-y-4">
                
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D56] via-[#0A1D56]/40 to-transparent opacity-90 transition-opacity"></div>

                <div className="absolute inset-x-0 bottom-0 p-10 z-20 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></div>
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{member.exp}</span>
                  </div>
                  
                  <h4 className="text-white text-3xl font-black uppercase tracking-tight leading-none">
                    {member.name}
                  </h4>
                  <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest italic">
                    {member.role}
                  </p>

                  <div className="pt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                    <span className="bg-blue-600 text-white text-[9px] font-black px-4 py-2 rounded-xl uppercase tracking-widest">
                      {member.specialty}
                    </span>
                    <div className="flex gap-4 text-white/70">
                      <Instagram size={18} className="hover:text-blue-400 cursor-pointer" />
                      <Facebook size={18} className="hover:text-blue-400 cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ShieldCheck size={24} className="text-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;