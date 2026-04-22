import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Fingerprint, Eye, MapPin } from 'lucide-react';

const Message = () => {
  return (
    <section className="relative py-24 bg-[#F5F5F7] dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500 font-sans">
      
      {/* Background Decorative Glow - Blue Touch */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 blur-[150px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Strategic Branding */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
                <MapPin size={18} />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Strategic HQ: Amethi</span>
              </div>
              
              <h2 className="text-[#0A1D56] dark:text-[#F0F8FF] text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                SECURE <br /> 
                <span className="text-blue-600">UP REGION</span> <br />
                <span className="text-zinc-400 dark:text-white/20 italic font-light text-4xl md:text-6xl tracking-normal">Risk Intelligence.</span>
              </h2>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-20 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                <p className="text-blue-700 dark:text-blue-400 font-bold uppercase tracking-[0.3em] text-xs">
                  Mahaveer Tactical Unit
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Professional Mission Statement */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900/40 p-8 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 backdrop-blur-sm relative overflow-hidden shadow-xl dark:shadow-none transition-all">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 relative z-10"
            >
              <h3 className="text-[#0A1D56] dark:text-[#F0F8FF] text-xl md:text-2xl font-black uppercase tracking-tight border-l-4 border-blue-600 pl-6">
                Our Mission: Safeguarding Physical & Digital Assets
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base font-medium">
                Our aim is to provide high-level security to your premises and safeguard your assets using elite expertise. At <strong>Mahaveer Bouncers</strong>, we identify and mitigate all foreseeable risks through personnel trained by experts from law enforcement, defense, and paramilitary backgrounds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                <div className="flex gap-4 group">
                  <div className="p-3 bg-blue-600/10 dark:bg-blue-600/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Fingerprint className="text-blue-600 dark:text-blue-400 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#0A1D56] dark:text-white text-xs font-black uppercase tracking-widest mb-1">Risk Mitigation</h4>
                    <p className="text-zinc-500 text-[11px] leading-tight">Combatting fraud and identity theft in a connected world.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="p-3 bg-blue-600/10 dark:bg-blue-600/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ShieldAlert className="text-blue-600 dark:text-blue-400 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#0A1D56] dark:text-white text-xs font-black uppercase tracking-widest mb-1">Expert Training</h4>
                    <p className="text-zinc-500 text-[11px] leading-tight">Personnel trained for high-pressure tactical situations.</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 dark:text-zinc-500 text-sm italic border-t border-black/5 dark:border-white/5 pt-6 leading-relaxed">
                "Mahaveer Bouncers delivers an edge in corporate intelligence and risk mitigation. Our operatives possess proven track records from premier security and investigative agencies."
              </p>

              <div className="flex items-center justify-between pt-4">
                <div className="flex flex-col">
                  <span className="text-[#0A1D56] dark:text-white font-black uppercase tracking-tighter text-lg">Mahaveer Tactical</span>
                  <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">Amethi Division</span>
                </div>
                <Eye className="text-blue-600/5 dark:text-white/5 absolute -right-4 -bottom-4" size={120} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Message;