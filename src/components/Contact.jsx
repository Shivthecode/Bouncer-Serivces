import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Send, ArrowRight, ShieldCheck } from 'lucide-react';

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
    <section className="relative py-24 bg-[#F5F5F7] dark:bg-[#050505] border-t border-black/5 dark:border-white/5 font-sans overflow-hidden transition-colors duration-500">
      
      {/* 🔵 Tactical Blue Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/5 dark:bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <ShieldCheck size={14} /> Ready for Deployment
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0A1D56] dark:text-[#F0F8FF] text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            REQUEST <span className="text-blue-600 italic font-light">DEPLOYMENT</span>
          </motion.h2>
          <p className="text-zinc-500 dark:text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-black">
            Mahaveer Bouncer | Strategic Command Center
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- ⬅️ Left: Direct Contact Info --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Premium Card - Keeping Green for WhatsApp Identity but with Blue accents */}
            <motion.div 
              whileHover={{ y: -5 }}
              onClick={handleWhatsApp}
              className="p-8 bg-white dark:bg-zinc-900/40 border border-blue-600/5 dark:border-white/5 rounded-[2.5rem] cursor-pointer group hover:border-blue-600/30 transition-all shadow-xl shadow-blue-900/5 dark:shadow-none"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  <MessageCircle size={24} />
                </div>
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Direct Dispatch</span>
              </div>
              <h3 className="text-2xl font-black text-[#0A1D56] dark:text-white uppercase tracking-tight leading-none">Instant Response</h3>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-4 leading-relaxed">
                Connect with our Amethi HQ for high-priority unit deployment and threat assessment.
              </p>
            </motion.div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href={`mailto:${emailID}`}
                className="p-6 bg-white dark:bg-zinc-900/40 border border-blue-600/5 dark:border-white/5 rounded-2xl flex flex-col items-center gap-3 hover:bg-blue-600 group transition-all text-center shadow-lg dark:shadow-none"
              >
                <Mail size={22} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white">Secure Mail</span>
              </a>
              
              <a 
                href="https://instagram.com/veer_bouncer_club" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white dark:bg-zinc-900/40 border border-blue-600/5 dark:border-white/5 rounded-2xl flex flex-col items-center gap-3 hover:bg-gradient-to-tr hover:from-[#405DE6] hover:to-[#E1306C] group transition-all text-center shadow-lg dark:shadow-none"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white">Instagram</span>
              </a>
            </div>

            {/* Call Center Strip */}
            <a 
              href={`tel:+${primaryPhone}`}
              className="flex items-center justify-between p-6 bg-[#0A1D56] dark:bg-blue-600 text-white rounded-[1.5rem] hover:opacity-90 transition-all group shadow-2xl shadow-blue-600/20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                   <Phone size={20} className="animate-pulse" />
                </div>
                <div className="flex flex-col">
                   <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">Emergency Line</span>
                   <span className="font-black uppercase tracking-widest text-sm">+91 99561 97272</span>
                </div>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* --- ➡️ Right: Tactical Form --- */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0A1D56]/10 border border-blue-600/10 dark:border-white/5 p-8 md:p-12 rounded-[3.5rem] backdrop-blur-xl shadow-2xl dark:shadow-none relative">
            <div className="mb-8">
               <h3 className="text-[#0A1D56] dark:text-white text-2xl font-black uppercase tracking-tight">Mission Intel</h3>
               <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-1">Submit your requirements for a secure quote</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group space-y-2">
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="FULL NAME" 
                    className="w-full bg-blue-50/50 dark:bg-black/40 border border-blue-100 dark:border-white/10 p-5 rounded-2xl text-[#0A1D56] dark:text-white outline-none text-xs focus:border-blue-600 dark:focus:border-blue-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-black tracking-widest"
                  />
                </div>
                <div className="group space-y-2">
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    placeholder="PHONE NUMBER" 
                    className="w-full bg-blue-50/50 dark:bg-black/40 border border-blue-100 dark:border-white/10 p-5 rounded-2xl text-[#0A1D56] dark:text-white outline-none text-xs focus:border-blue-600 dark:focus:border-blue-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-black tracking-widest"
                  />
                </div>
              </div>
              <div className="group space-y-2">
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="SECURITY BRIEF (EVENT TYPE, LOCATION, FORCE SIZE)..." 
                  className="w-full bg-blue-50/50 dark:bg-black/40 border border-blue-100 dark:border-white/10 p-5 rounded-2xl h-44 text-[#0A1D56] dark:text-white outline-none text-xs resize-none focus:border-blue-600 dark:focus:border-blue-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-black tracking-widest"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(37,99,235,0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                type="button"
                className="w-full bg-blue-600 dark:bg-blue-500 text-white font-black py-6 rounded-2xl uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-4 hover:bg-blue-700 transition-all group shadow-xl shadow-blue-600/20"
              >
                Launch Deployment Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldCheck size={120} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;