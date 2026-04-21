import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const primaryPhone = "919956197272";
  const emailID = "veerbouncerclubmahaveersecurit@gmail.com";

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hello Mahaveer Bouncer HQ, Mission Request from ${formData.name || 'Client'}. Brief: ${formData.message || 'Need security assistance.'}`);
    window.open(`https://wa.me/${primaryPhone}?text=${msg}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative py-20 bg-[#F5F5F7] dark:bg-[#050505] border-t border-black/5 dark:border-white/5 font-sans overflow-hidden transition-colors duration-500">
      {/* Tactical background glow - Optimized for both modes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-black/5 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black dark:text-[#F0F8FF] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none font-sans"
          >
            REQUEST <span className="opacity-40 italic font-light">DEPLOYMENT</span>
          </motion.h2>
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-bold font-sans">
            Mahaveer Bouncer | Elite Command Center
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Premium Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={handleWhatsApp}
              className="p-8 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-[#25D366]/20 rounded-[2.5rem] cursor-pointer group hover:border-[#25D366]/50 transition-all shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#25D366] text-black rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                  <MessageCircle size={24} />
                </div>
                <span className="text-[#25D366] font-black uppercase tracking-widest text-xs">Live Support</span>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white uppercase tracking-tight">Direct Dispatch</h3>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-2 leading-relaxed">
                Connect with our Amethi HQ for instant unit deployment.
              </p>
            </motion.div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href={`mailto:${emailID}`}
                className="p-6 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-2xl flex flex-col items-center gap-3 hover:border-black/20 dark:hover:border-white/20 transition-all text-center group"
              >
                <Mail size={20} className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Secure Mail</span>
              </a>
              
              <a 
                href="https://instagram.com/veer_bouncer_club" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-2xl flex flex-col items-center gap-3 hover:border-[#E1306C]/50 transition-all text-center group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-[#E1306C] transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Instagram</span>
              </a>
            </div>

            {/* Calling Card */}
            <a 
              href={`tel:+${primaryPhone}`}
              className="flex items-center justify-between p-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:opacity-90 transition-all group shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Phone size={18} />
                <span className="font-black uppercase tracking-widest text-xs">+91 99561 97272</span>
              </div>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Tactical Form */}
          <div className="lg:col-span-7 bg-white dark:bg-white/[0.01] border border-black/5 dark:border-white/5 p-8 md:p-10 rounded-[3rem] backdrop-blur-xl shadow-2xl relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="YOUR NAME" 
                    className="w-full bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 p-4 rounded-xl text-black dark:text-white outline-none text-xs focus:border-black dark:focus:border-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-700 font-bold"
                  />
                </div>
                <div className="relative">
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    placeholder="CONTACT NO" 
                    className="w-full bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 p-4 rounded-xl text-black dark:text-white outline-none text-xs focus:border-black dark:focus:border-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-700 font-bold"
                  />
                </div>
              </div>
              <div className="relative">
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="MISSION DETAILS (LOCATION, TIME, FORCE TYPE)..." 
                  className="w-full bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 p-4 rounded-xl h-36 text-black dark:text-white outline-none text-xs resize-none focus:border-black dark:focus:border-white transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-700 font-bold"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                type="button"
                className="w-full bg-black dark:bg-white text-white dark:text-black font-black py-5 rounded-xl uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-2xl group"
              >
                Launch Mission Request <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;