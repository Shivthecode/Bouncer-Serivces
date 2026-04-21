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
  Globe
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
    <div className="bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white pt-24 md:pt-40 pb-10 md:pb-20 selection:bg-[#722F37] selection:text-white font-sans overflow-x-hidden transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 font-sans">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-24 space-y-4"
        >
          <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
            MAHAVEER <br /> <span className="text-[#722F37] italic font-light">BOUNCER</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-black">
            Veer Bouncer Club | Strategic Response Unit Amethi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-20">
          
          {/* --- Left Side: Tactical Details --- */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
                Direct <span className="text-[#722F37]">Intelligence</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {/* 📞 Call Card */}
                <a 
                  href={`tel:+${primaryPhone}`}
                  className="flex items-center gap-5 p-5 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-2xl hover:border-[#722F37]/50 transition-all group shadow-xl dark:shadow-none"
                >
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black shrink-0 group-hover:bg-[#722F37] group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[8px] text-zinc-400 uppercase font-black tracking-widest">Command Line</p>
                    <p className="text-sm md:text-base font-bold text-black dark:text-white">+91 99561 97272</p>
                  </div>
                </a>

                {/* 📧 Email Card */}
                <a 
                  href={`mailto:${officialEmail}`}
                  className="flex items-center gap-5 p-5 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-2xl hover:border-[#722F37]/50 transition-all group shadow-xl dark:shadow-none"
                >
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black shrink-0 group-hover:bg-[#722F37] group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] text-zinc-400 uppercase font-black tracking-widest">Secure Email</p>
                    <p className="text-[10px] md:text-sm font-bold truncate text-black dark:text-white">{officialEmail}</p>
                  </div>
                </a>

                {/* 📍 Location Card */}
                <div className="flex items-center gap-5 p-5 bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-2xl shadow-xl dark:shadow-none">
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[8px] text-zinc-400 uppercase font-black tracking-widest">Headquarters</p>
                    <p className="text-sm md:text-base font-bold italic truncate text-black dark:text-white">Amethi, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- WhatsApp Feature Card --- */}
            <div className="p-8 bg-white dark:bg-gradient-to-br dark:from-[#25D366]/20 dark:to-transparent border border-black/5 dark:border-[#25D366]/20 rounded-[2.5rem] space-y-4 shadow-2xl dark:shadow-none">
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#25D366]">Live Support Online</span>
               </div>
               <h4 className="text-lg font-bold uppercase tracking-tight text-black dark:text-white">Need Security Now?</h4>
               <button 
                onClick={handleWhatsAppChat}
                className="w-full py-4 bg-[#25D366] text-black font-black uppercase tracking-widest text-[10px] rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl"
               >
                 <MessageCircle size={16} /> Deploy via WhatsApp
               </button>
            </div>
          </div>

          {/* --- Right Side: Tactical Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white dark:bg-white/[0.01] border border-black/5 dark:border-white/5 p-6 md:p-14 rounded-[2.5rem] md:rounded-[4rem] backdrop-blur-xl shadow-2xl dark:shadow-none"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <input 
                  required type="text" placeholder="YOUR NAME" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 p-4 md:p-5 rounded-xl md:rounded-[1.5rem] text-black dark:text-white outline-none text-xs focus:border-[#722F37] transition-all placeholder:text-zinc-400 font-bold" 
                />
                <input 
                  required type="tel" placeholder="PHONE LINE" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 p-4 md:p-5 rounded-xl md:rounded-[1.5rem] text-black dark:text-white outline-none text-xs focus:border-[#722F37] transition-all placeholder:text-zinc-400 font-bold" 
                />
              </div>
              <textarea 
                required placeholder="MISSION BRIEFING (Location, Duration)..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 p-4 md:p-5 rounded-xl md:rounded-[1.5rem] h-32 md:h-40 text-black dark:text-white text-xs resize-none outline-none focus:border-[#722F37] transition-all placeholder:text-zinc-400 font-bold"
              ></textarea>
              <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black font-black py-5 md:py-6 rounded-xl md:rounded-[1.5rem] uppercase tracking-[0.4em] text-[9px] md:text-[10px] hover:bg-[#722F37] hover:text-white dark:hover:bg-[#722F37] transition-all flex items-center justify-center gap-3 shadow-2xl group">
                Launch Request <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- 🔥 LOCATION CARD --- */}
        <div className="mb-20">
          <div className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[4.5rem] border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900/10 p-8 md:p-20 text-center shadow-2xl dark:shadow-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#722F37]/5 blur-[120px] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black dark:bg-white rounded-3xl border border-[#722F37]/30 flex items-center justify-center text-white dark:text-black shadow-2xl">
                <Globe size={32} />
              </div>
              
              <div className="space-y-3 px-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white">
                  Amethi <span className="text-[#722F37] italic font-light">Division</span>
                </h2>
                <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-xs font-black leading-relaxed italic">
                  {amethiAddress}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-6">
                <button 
                  onClick={openGoogleMaps}
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#722F37] hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <ExternalLink size={14} /> Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Visual Footer Labels --- */}
        <div className="pt-10 border-t border-black/5 dark:border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-40 pb-10">
           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-black dark:text-white">
             <ShieldCheck size={14} /> Veer Bouncer Club
           </span>
           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-black dark:text-white">
             <Clock size={14} /> 24/7 Strategic Support
           </span>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;