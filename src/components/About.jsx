import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Cpu } from 'lucide-react';

const About = () => {
  const bouncerImg = "https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=800&auto=format&fit=crop&q=60";

  const features = [
    {
      icon: <Clock size={20} />,
      title: "24/7 Deployment",
      desc: "Instant elite security solutions for your work and home environments."
    },
    {
      icon: <Users size={20} />,
      title: "Expert Force",
      desc: "Our Mahaveer units have been protecting assets for over 15+ years."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Verified Units",
      desc: "ISO 9001:2015 & PSARA Licensed. CAPSI certified elite force."
    },
    {
      icon: <Cpu size={20} />,
      title: "Tactical Tech",
      desc: "Advanced surveillance and reporting systems for seamless protection."
    }
  ];

  return (
    <section className="relative py-24 bg-[#F5F5F7] dark:bg-[#050505] border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-500 font-sans">
      
      {/* Decorative Blue Glow Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 relative z-10"
          >
            {/* Badge - Blue Styling */}
            <div className="inline-block px-4 py-1 rounded-full border border-blue-600/20 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase">
              Operational Since 19 Years
            </div>

            <h2 className="text-[#0A1D56] dark:text-[#F0F8FF] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              MAHAVEER <br /> 
              <span className="text-blue-600 italic font-light">BOUNCERS</span>
            </h2>

            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-medium">
                Mahaveer Bouncers is the premier security force in Delhi NCR, Noida, and Gurgaon. 
                With 19 years of elite experience, we combine <span className="text-blue-600 dark:text-white font-bold underline decoration-blue-600/30">Raw Power & Technology</span> to deliver absolute security.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {features.map((item, idx) => (
                  <div key={idx} className="group flex gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-blue-600/5 dark:border-white/5 hover:border-blue-600/40 dark:hover:border-blue-400/40 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-600/5">
                    <div className="text-blue-600 dark:text-blue-400 mt-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#0A1D56] dark:text-[#F0F8FF] text-sm font-black uppercase tracking-tight">{item.title}</h4>
                      <p className="text-zinc-500 text-[11px] mt-1 leading-snug font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats Summary */}
            <div className="flex gap-12 pt-8 border-t border-blue-600/10 dark:border-white/10">
              <div>
                <h4 className="text-[#0A1D56] dark:text-white text-4xl font-black">1500+</h4>
                <p className="text-blue-600 dark:text-blue-400 uppercase text-[9px] tracking-[0.3em] font-black mt-1">Active Force</p>
              </div>
              <div>
                <h4 className="text-[#0A1D56] dark:text-[#F0F8FF] text-4xl font-black">PSARA</h4>
                <p className="text-blue-600 dark:text-blue-400 uppercase text-[9px] tracking-[0.3em] font-black mt-1">Licensed Unit</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] group lg:pl-10"
          >
            {/* Electric Blue Glow Effect */}
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-white/5 bg-white dark:bg-zinc-900 shadow-2xl">
              {/* Blueish Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D56] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute inset-0 bg-blue-600/10 z-10"></div>
              
              <img 
                src={bouncerImg} 
                alt="Mahaveer Tactical Unit" 
                className="w-full h-full object-cover brightness-100 dark:brightness-90 group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-10 left-10 z-20 space-y-3">
                <div className="w-16 h-1.5 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></div>
                <p className="text-white font-black text-3xl tracking-tighter uppercase leading-none">
                  MAHAVEER <br /> <span className="text-blue-400 italic font-light">TACTICAL UNIT</span>
                </p>
                <div className="flex gap-4">
                  <span className="text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] border-r border-white/20 pr-4">Surveillance</span>
                  <span className="text-white/70 text-[9px] font-bold uppercase tracking-[0.2em]">Guarding</span>
                </div>
              </div>
            </div>

            {/* Floating Badge on Image */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-blue-600 rounded-full z-30 flex items-center justify-center text-white text-center p-2 shadow-xl shadow-blue-600/30 animate-bounce">
              <span className="text-[8px] font-black leading-none uppercase tracking-widest">A-Grade <br/> Verified</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;