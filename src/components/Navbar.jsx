import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Bouncer', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between px-6 md:px-10 py-3 transition-all duration-500
          ${scrolled 
            ? 'w-full md:w-[75%] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
            : 'w-full bg-transparent border-transparent'
          }`}
      >
        
        {/* Left: Branding - Ice White Focus */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="p-1.5 bg-[#F0F8FF] rounded-lg shadow-[0_0_20px_rgba(240,248,255,0.3)]"
          >
            <ShieldCheck size={20} className="text-black" strokeWidth={2.5} />
          </motion.div>
          <span className="text-[#FFFAFA] font-bold tracking-tighter text-xl uppercase">
            Bouncer<span className="text-[#F0F8FF] opacity-80 italic">Hub</span>
          </span>
        </div>

        {/* Middle: Links - Ice White Hover */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[11px] uppercase tracking-[0.2em] font-bold text-[#F0F8FF]/50 transition-colors hover:text-[#F0F8FF]"
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F0F8FF]"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </div>

        {/* Right: Hire Now Button - Ice White Theme */}
        <div className="flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F0F8FF] text-black text-[12px] font-black px-7 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-lg"
          >
            HIRE NOW
            <ArrowRight size={14} />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4 md:hidden text-[#F0F8FF]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Deep Black & Ice White */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-black border border-white/10 rounded-3xl p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[#F0F8FF] text-lg font-bold tracking-widest">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;