import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield, ChevronRight, MessageCircle, Globe, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const primaryPhone = "919956197272";
  const officialEmail = "veerbouncerclubmahaveersecurit@gmail.com";

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle size={18} />, 
      link: `https://wa.me/${primaryPhone}`,
      color: 'hover:text-[#25D366]'
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
    <footer className="bg-[#F5F5F7] dark:bg-[#050505] pt-24 pb-10 border-t border-black/5 dark:border-white/5 relative overflow-hidden text-black dark:text-white font-sans transition-colors duration-500">
      
      {/* Background Subtle Glow - Only visible in Dark Mode */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 dark:bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Socials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-black dark:bg-white rounded-lg">
                <Shield className="text-white dark:text-black" size={24} />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">
                MAHAVEER <span className="opacity-40 italic font-light">BOUNCER</span>
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-500 text-[11px] uppercase font-bold tracking-widest leading-relaxed">
              Veer Bouncer Club. Elite tactical security and protection services since 2007.
            </p>
            
            <div className="flex gap-5 text-zinc-400 dark:text-zinc-600 transition-all">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-black dark:text-white opacity-40">Tactical Units</h4>
            <ul className="space-y-4 text-zinc-500 dark:text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              {['PSO Security', 'Elite Bouncers', 'Event Protection', 'Guard Services'].map(item => (
                <li key={item} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                  <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-black dark:text-white opacity-40">Command Center</h4>
            <ul className="space-y-4 text-zinc-500 dark:text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">Unit Intelligence</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Deployment Request</Link></li>
              <li><Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Privacy Protocols</Link></li>
              <li className="flex items-center gap-2 text-[#25D366]/80">
                <ShieldCheck size={12} /> PSARA Verified
              </li>
            </ul>
          </div>

          {/* Corrected Contact - Amethi HQ */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-black dark:text-white opacity-40">Headquarters</h4>
            <div className="space-y-6 text-zinc-500 dark:text-zinc-500 text-[11px] uppercase font-black tracking-widest">
              <a href="#" className="flex gap-4 hover:text-black dark:hover:text-white transition-colors">
                <MapPin size={18} className="text-black dark:text-white shrink-0" /> 
                FHH8+JJV Utelwa, Amethi, UP
              </a>
              <a href={`tel:+${primaryPhone}`} className="flex gap-4 hover:text-black dark:hover:text-white transition-colors">
                <Phone size={18} className="text-black dark:text-white shrink-0" /> 
                +91 99561 97272
              </a>
              <a href={`mailto:${officialEmail}`} className="flex gap-4 hover:text-black dark:hover:text-white transition-colors min-w-0">
                <Mail size={18} className="text-black dark:text-white shrink-0" /> 
                <span className="truncate">{officialEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-400 dark:text-zinc-700 text-[9px] font-black tracking-[0.3em] uppercase">
            © 2026 MAHAVEER BOUNCER | VEER BOUNCER CLUB
          </p>
          <div className="flex items-center gap-2 group">
            <span className="text-zinc-500 dark:text-zinc-800 text-[9px] font-black tracking-[0.3em] uppercase group-hover:text-black dark:group-hover:text-zinc-500 transition-colors">
              Designed by codewebx
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;