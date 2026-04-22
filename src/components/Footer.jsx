import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield, ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const primaryPhone = "919956197272";
  const officialEmail = "veerbouncerclubmahaveersecurit@gmail.com";

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle size={18} />, 
      link: `https://wa.me/${primaryPhone}`,
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      link: 'https://instagram.com/veer_bouncer_club',
      color: 'hover:text-[#E1306C]'
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ), 
      link: '#',
      color: 'hover:text-[#1877F2]'
    }
  ];

  return (
    <footer className="bg-[#F5F5F7] dark:bg-[#050505] pt-24 pb-10 border-t border-blue-600/10 dark:border-white/5 relative overflow-hidden text-black dark:text-white font-sans transition-colors duration-500">
      
      {/* 🔵 Subtle Blue Glow */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Socials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#0A1D56] dark:bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">
                <Shield className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-[#0A1D56] dark:text-white">
                MAHAVEER <span className="text-blue-600 italic font-light">BOUNCER</span>
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-[10px] uppercase font-black tracking-widest leading-relaxed max-w-[250px]">
              Veer Bouncer Club. Elite tactical security and protection services since 2007.
            </p>
            
            <div className="flex gap-5 text-zinc-400 dark:text-zinc-600">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-blue-600 dark:text-blue-400">Tactical Units</h4>
            <ul className="space-y-4 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
              {['PSO Security', 'Elite Bouncers', 'Event Protection', 'Guard Services'].map(item => (
                <li key={item} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2 group">
                  <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform text-blue-600" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-blue-600 dark:text-blue-400">Command Center</h4>
            <ul className="space-y-4 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Unit Intelligence</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Deployment Request</Link></li>
              <li className="flex items-center gap-2 text-blue-600/80 dark:text-blue-400/80">
                <ShieldCheck size={12} /> PSARA Licensed
              </li>
            </ul>
          </div>

          {/* Corrected Contact - Amethi HQ */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-blue-600 dark:text-blue-400">Headquarters</h4>
            <div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-[11px] uppercase font-black tracking-widest">
              <a href="#" className="flex gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <MapPin size={18} className="text-[#0A1D56] dark:text-blue-400 shrink-0" /> 
                Amethi, Uttar Pradesh, India
              </a>
              <a href={`tel:+${primaryPhone}`} className="flex gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone size={18} className="text-[#0A1D56] dark:text-blue-400 shrink-0" /> 
                +91 99561 97272
              </a>
              <a href={`mailto:${officialEmail}`} className="flex gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors min-w-0">
                <Mail size={18} className="text-[#0A1D56] dark:text-blue-400 shrink-0" /> 
                <span className="truncate">{officialEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Credits (Centered Design) --- */}
        <div className="pt-10 border-t border-blue-600/10 dark:border-white/5 flex flex-col items-center gap-6 text-center">
          <p className="text-zinc-400 dark:text-zinc-600 text-[9px] font-black tracking-[0.4em] uppercase">
            © 2026 MAHAVEER BOUNCER | VEER BOUNCER CLUB
          </p>
          
          <div className="flex flex-col items-center gap-2 group">
            <div className="h-px w-12 bg-blue-600/30 group-hover:w-24 transition-all duration-500 mb-2"></div>
            <span className="text-zinc-500 dark:text-zinc-400 text-[10px] font-black tracking-[0.3em] uppercase transition-colors">
              Designed by <span className="text-[#0A1D56] dark:text-blue-400">codewebx.in</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;