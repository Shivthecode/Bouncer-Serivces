import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Users, Award, Landmark, Search, Phone } from 'lucide-react';

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
    desc: "MBA in Finance & Entrepreneurship (Stern, NYU) and Computer Science (University of Maryland). Bringing global tech-intelligence to Mahavir Bouncers.",
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
    <div className="bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white pt-32 pb-20 selection:bg-[#722F37] selection:text-white transition-colors duration-500 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-[#722F37]/30 bg-[#722F37]/10 text-[#722F37] text-[10px] font-black uppercase tracking-[0.4em]">
            Elite Manguard & Investigation
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
            MAHAVIR <br /> <span className="text-[#722F37] italic font-light">STRATEGIC FORCE</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-500 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            Providing cutting-edge manned services and specialized manpower to vital sectors across North India and Lucknow. Led by veterans from premier government agencies with decades of proven track records.
          </p>
        </motion.div>
      </section>

      {/* Meet The Team - Tactical Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-tight text-black dark:text-white">The High <span className="text-[#722F37]">Command</span></h2>
            <div className="h-1 w-20 bg-[#722F37]"></div>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest max-w-xs text-right font-bold">
            A team of dedicated professionals, ready to do whatever it takes to make your business secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-zinc-900/30 border border-black/5 dark:border-white/5 p-8 rounded-[2.5rem] hover:border-[#722F37]/40 transition-all duration-500 shadow-xl dark:shadow-none"
            >
              <div className="relative w-20 h-20 mb-8 overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-all" />
              </div>
              <h4 className="text-xl font-bold tracking-tight mb-1 text-black dark:text-white uppercase">{member.name}</h4>
              <p className="text-[#722F37] text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-zinc-600 dark:text-zinc-500 text-xs leading-relaxed italic font-medium">"{member.desc}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process & Intelligence */}
      <section className="bg-white dark:bg-white/[0.02] py-32 border-y border-black/5 dark:border-white/5 mb-32 transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
              Mitigating <br /> <span className="text-[#722F37]">Digital & Human Risks</span>
            </h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              <p>In today’s digitized world, fraud and identity theft present the single largest risk. Cyber security remains a vulnerability in both Government and Corporate sectors in India.</p>
              <p>Based on technical intelligence and analyzed inputs, we help our clients take end-to-end informed decisions about business partners with <span className="text-black dark:text-white font-bold">Zero Failure Rate</span>.</p>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#F5F5F7] dark:border-black bg-white dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-black dark:text-white shadow-md">U{i}</div>
                ))}
              </div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-black">1500+ Specialized Manpower Units</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Search size={30} />, title: "Due Diligence", desc: "Thorough background checks and fact-collecting with precision." },
              { icon: <Landmark size={30} />, title: "Legal Advisory", desc: "Panel of reputed lawyers and accountants at your service." },
              { icon: <Target size={30} />, title: "Investigation", desc: "Covertly uncovering fraud and data breaches under Indian laws." },
              { icon: <Phone size={30} />, title: "Rapid Action", desc: "Expert services just a phone call away: +91 9999176075." }
            ].map((box, i) => (
              <div key={i} className="p-8 bg-white dark:bg-black rounded-3xl border border-black/5 dark:border-white/10 space-y-4 shadow-lg dark:shadow-none hover:border-[#722F37]/30 transition-all">
                <div className="text-[#722F37]">{box.icon}</div>
                <h4 className="font-bold uppercase text-sm tracking-widest text-black dark:text-white">{box.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-600 text-[10px] uppercase font-black">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="max-w-7xl mx-auto px-6 text-center pb-20">
        <h3 className="text-zinc-500 dark:text-zinc-600 text-xs font-black uppercase tracking-[0.5em] mb-12">Sectors We Safeguard</h3>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {['Real Estate', 'Infrastructure', 'Telecom', 'Renewable Energy', 'IT / ITES'].map((item) => (
            <span key={item} className="text-2xl md:text-4xl font-black text-black/10 dark:text-white/20 hover:text-[#722F37] transition-colors cursor-default uppercase">
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;