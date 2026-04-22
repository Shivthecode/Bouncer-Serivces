import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Landmark, Search, Phone, ArrowRight } from 'lucide-react';

const team = [
  {
    name: "Shri Mukund Behari Kaushal, IPS (Retd)",
    role: "Chairman of The Advisory Board",
    desc: "Former Police Commissioner Delhi, DG CRPF, Secretary Internal Security, Union Home Ministry. Regarded as one of the most successful Commissioners of Delhi Police.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop"
  },
  {
    name: "Shri Ankur Chowdhry",
    role: "Director",
    desc: "MBA in Finance & Entrepreneurship (Stern, NYU) and Computer Science (University of Maryland). Bringing global tech-intelligence to Mahaveer Bouncers.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop"
  },
  {
    name: "Shri Anil Chowdhry, IPS (Retd)",
    role: "Sr Advisor",
    desc: "Ex Secretary Internal Security, MHA. 22 years with the Intelligence Bureau overseeing counter-terrorism and VIP Security.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
  },
  {
    name: "Shri Kamal Kumar, IPS (Retd)",
    role: "Advisor",
    desc: "Ex Director of National Police Academy, Hyderabad. Expert on training needs of police, intelligence, and security personnel.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
  },
  {
    name: "Maj Gen (Retd) AS Parmar",
    role: "Sr Advisor",
    desc: "Highly decorated officer from the Infantry (Rajputs) of the Indian Army. Former head of the CMP wing of the Indian Army.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&auto=format&fit=crop"
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white pt-32 pb-20 selection:bg-blue-600 selection:text-white transition-colors duration-500 font-sans">
      
      {/* --- 🚀 Hero Section --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600/20 bg-blue-600/5 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
            <ShieldCheck size={14} /> Elite Intelligence & Strategic Force
          </div>
          <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] text-[#0A1D56] dark:text-white">
            MAHAVEER <br /> <span className="text-blue-600 italic font-light">STRATEGIC FORCE</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            Providing cutting-edge manned services and specialized manpower to vital sectors across North India. Led by veterans from premier government agencies with decades of proven track records in national security.
          </p>
        </motion.div>
      </section>

      {/* --- 👮 Meet The High Command --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-blue-600/10 pb-10">
          <div className="space-y-4">
            <h2 className="text-5xl font-black uppercase tracking-tight text-[#0A1D56] dark:text-white">The High <span className="text-blue-600">Command</span></h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] max-w-xs text-right font-black">
            Led by elite IPS and Military veterans ensuring zero-compromise security protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -12 }}
              className="group bg-white dark:bg-zinc-900/40 border border-blue-600/5 dark:border-white/5 p-8 rounded-[2.5rem] hover:border-blue-600/40 transition-all duration-500 shadow-xl dark:shadow-none relative overflow-hidden"
            >
              <div className="relative w-24 h-24 mb-8 overflow-hidden rounded-[2rem] border-2 border-white dark:border-white/10 shadow-lg">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h4 className="text-xl font-black tracking-tight mb-2 text-[#0A1D56] dark:text-white uppercase leading-tight">{member.name}</h4>
              <p className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6 bg-blue-50 dark:bg-blue-900/20 inline-block px-3 py-1 rounded-lg">{member.role}</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed italic font-medium">"{member.desc}"</p>
              
              {/* Corner Accent */}
              <div className="absolute -right-4 -bottom-4 text-blue-600 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <ShieldCheck size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 🧠 Intelligence & Risks --- */}
      <section className="bg-[#0A1D56] py-32 mb-32 relative overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
              Mitigating <br /> <span className="text-blue-400">Tactical Risks</span>
            </h2>
            <div className="space-y-6 text-blue-100/70 leading-relaxed font-medium text-lg">
              <p>In today’s digitized world, fraud and identity theft present the single largest risk. Cyber security remains a vulnerability in both Government and Corporate sectors in India.</p>
              <p>Based on technical intelligence and analyzed inputs, we help our clients take end-to-end informed decisions about business partners with <span className="text-white font-black underline decoration-blue-400 underline-offset-8">Zero Failure Rate</span>.</p>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-14 h-14 rounded-2xl border-4 border-[#0A1D56] bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-xl">UNIT-{i}</div>
                ))}
              </div>
              <p className="text-[10px] text-blue-400 uppercase tracking-[0.3em] font-black">1500+ Deployed Manpower Units</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Search size={30} />, title: "Due Diligence", desc: "Precision background checks and data gathering." },
              { icon: <Landmark size={30} />, title: "Legal Advisory", desc: "Elite panel of legal and financial consultants." },
              { icon: <Target size={30} />, title: "Investigation", desc: "Covertly uncovering breaches under Indian laws." },
              { icon: <Phone size={30} />, title: "Rapid Action", desc: "Expert response center available 24/7/365." }
            ].map((box, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 space-y-4 hover:bg-white/10 transition-all group"
              >
                <div className="text-blue-400 group-hover:scale-110 transition-transform">{box.icon}</div>
                <h4 className="font-black uppercase text-sm tracking-widest text-white">{box.title}</h4>
                <p className="text-blue-100/40 text-[9px] uppercase font-black leading-tight tracking-widest">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 🏢 Sectors We Safeguard --- */}
      <section className="max-w-7xl mx-auto px-6 text-center pb-20">
        <h3 className="text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.5em] mb-16">Sectors Under Our Protection</h3>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
          {['Real Estate', 'Infrastructure', 'Telecom', 'Renewable Energy', 'IT / ITES'].map((item) => (
            <motion.span 
              key={item} 
              whileHover={{ color: '#2563EB', scale: 1.1 }}
              className="text-3xl md:text-5xl font-black text-[#0A1D56]/10 dark:text-white/10 transition-all cursor-default uppercase tracking-tighter"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Watermark */}
      <div className="fixed bottom-0 right-0 text-[15rem] font-black text-blue-600/[0.02] dark:text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter leading-none -z-10">
        TACTICAL
      </div>
    </div>
  );
};

export default AboutPage;