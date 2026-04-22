import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck,
  Clock,
  ArrowRight,
  ExternalLink,
  Globe,
  Navigation
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const primaryPhone = "919956197272"; 
  const officialEmail = "veerbouncerclubmahaveersecurit@gmail.com";
  const amethiAddress = "FHH8+JJV Utelwa, Amethi, Uttar Pradesh";

  const handleWhatsAppChat = () => {
    const msg = encodeURIComponent("Hello Mahaveer Bouncer HQ, I need tactical security assistance.");
    window.open(`https://wa.me/${primaryPhone}?text=${msg}`, '_blank');
  };

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(amethiAddress)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Jai Hind ${formData.name}! Your mission request has been logged.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white pt-32 md:pt-44 pb-10 md:pb-20 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* 🔵 Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">
            <Navigation size={12} className="animate-pulse" /> Strategic HQ: Amethi
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-[#0A1D56] dark:text-white">
            MAHAVEER <br /> <span className="text-blue-600 italic font-light">BOUNCER</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-500 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-black">
            Strategic Response Unit | Deployment Center
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-24">
          
          {/* --- Left Side: Tactical Details --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#0A1D56] dark:text-white">
                Direct <span className="text-blue-600">Intelligence</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {/* 📞 Call Card */}
                <a 
                  href={`tel:+${primaryPhone}`}
                  className="flex items-center gap-5 p-6 bg-white dark:bg-zinc-900/40 border border-blue-600/5 dark:border-white/5 rounded-2xl hover:border-blue-600/40 transition-all group shadow-xl shadow-blue-900/5 dark:shadow-none"
                >
                  <div className="w-12 h-12 bg-[#0A1D56] dark:bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase font-black tracking-widest mb-1">Emergency Dispatch</p>
                    <p className="text-sm md:text-lg font-black text-[#0A1D56] dark:text-white tracking-wider">+91 99561 97272</p>
                  </div>
                </a>

                {/* 📧 Email Card */}
                <a 
                  href={`mailto:${officialEmail}`}
                  className="flex items-center gap-5 p-6 bg-white dark:bg-zinc-900/40 border border-blue-600/5 dark:border-white/5 rounded-2xl hover:border-blue-600/40 transition-all group shadow-xl shadow-blue-900/5 dark:shadow-none"
                >
                  <div className="w-12 h-12 bg-[#0A1D56] dark:bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase font-black tracking-widest mb-1">Tactical Briefing</p>
                    <p className="text-[10px] md:text-sm font-black truncate text-[#0A1D56] dark:text-white tracking-wider uppercase">{officialEmail}</p>
                  </div>
                </a>

                {/* 📍 Location Card */}
                <div className="flex items-center gap-5 p-6 bg-white dark:bg-zinc-900/40 border border-blue-600/5 dark:border-white/5 rounded-2xl shadow-xl shadow-blue-900/5 dark:shadow-none">
                  <div className="w-12 h-12 bg-[#0A1D56] dark:bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase font-black tracking-widest mb-1">Amethi HQ</p>
                    <p className="text-sm md:text-base font-black italic text-[#0A1D56] dark:text-white">FHH8+JJV Utelwa, Amethi, UP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 🟢 WhatsApp Feature Card (Keeping Green as requested) --- */}
            <div className="p-10 bg-white dark:bg-white/[0.02] border-2 border-[#25D366]/20 rounded-[2.5rem] space-y-6 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-[#25D366]">
                  <MessageCircle size={100} />
               </div>
               <div className="flex items-center gap-3 relative z-10">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366]">Command Center Active</span>
               </div>
               <h4 className="text-2xl font-black uppercase tracking-tight text-[#0A1D56] dark:text-white relative z-10 leading-tight">Need Support <br/> Right Now?</h4>
               <button 
                onClick={handleWhatsAppChat}
                className="w-full py-5 bg-[#25D366] text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1 transition-all relative z-10"
               >
                 <MessageCircle size={20} fill="currentColor" /> Deploy via WhatsApp
               </button>
            </div>
          </div>

          {/* --- ➡️ Right Side: Tactical Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white dark:bg-[#0A1D56]/10 border border-blue-600/10 dark:border-white/5 p-8 md:p-14 rounded-[3rem] md:rounded-[4rem] backdrop-blur-xl shadow-2xl dark:shadow-none"
          >
            <div className="mb-10">
              <h3 className="text-[#0A1D56] dark:text-white text-3xl font-black uppercase tracking-tight">Mission Intel</h3>
              <div className="w-16 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  required type="text" placeholder="YOUR NAME" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-blue-50/50 dark:bg-black/40 border border-blue-100 dark:border-white/10 p-5 rounded-2xl text-[#0A1D56] dark:text-white outline-none text-xs focus:border-blue-600 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-black tracking-widest" 
                />
                <input 
                  required type="tel" placeholder="CONTACT LINE" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-blue-50/50 dark:bg-black/40 border border-blue-100 dark:border-white/10 p-5 rounded-2xl text-[#0A1D56] dark:text-white outline-none text-xs focus:border-blue-600 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-black tracking-widest" 
                />
              </div>
              <textarea 
                required placeholder="MISSION BRIEFING (FORCE TYPE, LOCATION, DURATION)..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-blue-50/50 dark:bg-black/40 border border-blue-100 dark:border-white/10 p-5 rounded-2xl h-44 text-[#0A1D56] dark:text-white text-xs resize-none outline-none focus:border-blue-600 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 font-black tracking-widest"
              ></textarea>
              <button type="submit" className="w-full bg-[#0A1D56] dark:bg-blue-600 text-white font-black py-6 rounded-2xl uppercase tracking-[0.4em] text-[10px] hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-4 group shadow-2xl">
                Launch Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- 🔥 LOCATION CARD --- */}
        <div className="mb-20">
          <div className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[4.5rem] border border-blue-600/10 dark:border-white/5 bg-white dark:bg-zinc-900/10 p-10 md:p-24 text-center shadow-2xl dark:shadow-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center space-y-8">
              <div className="w-20 h-20 bg-[#0A1D56] dark:bg-blue-600 rounded-[2rem] shadow-xl flex items-center justify-center text-white group cursor-pointer hover:rotate-12 transition-transform">
                <Globe size={36} />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0A1D56] dark:text-white">
                  Amethi <span className="text-blue-600 italic font-light">Division</span>
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] md:text-xs font-black leading-relaxed italic">
                  {amethiAddress}
                </p>
              </div>

              <button 
                onClick={openGoogleMaps}
                className="px-10 py-5 bg-[#0A1D56] dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-4 shadow-xl"
              >
                <ExternalLink size={16} /> Get Tactical Directions
              </button>
            </div>
          </div>
        </div>

        {/* --- Visual Footer Labels --- */}
        <div className="pt-10 border-t border-blue-600/10 dark:border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-60 pb-10">
           <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-[#0A1D56] dark:text-white">
             <ShieldCheck size={16} className="text-blue-600" /> Mahaveer Security Group
           </span>
           <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-[#0A1D56] dark:text-white">
             <Clock size={16} className="text-blue-600" /> 24/7 Strategic Support
           </span>
        </div>

      </div>
    </div>
  );
};

// Simple Send icon since Lucide sometimes differs
const Send = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default ContactPage;