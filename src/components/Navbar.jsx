import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, Phone, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  // Theme logic check
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const primaryPhone = "+91 99561 97272";

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // 'absolute' ko 'fixed' kiya taaki scroll par move na ho
    // 'border-b-blue-600' aur 'border-b-[1px]' add kiya hai patli border ke liye
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 dark:bg-[#050505]/90 backdrop-blur-sm border-b-[1px] border-b-blue-600/50 dark:border-b-blue-500/30 py-5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* --- 🛡️ Left: Mahaveer Branding --- */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-[#0A1D56] dark:bg-white p-2 rounded-lg text-white dark:text-black">
            <ShieldCheck size={24} fill="currentColor" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-[#0A1D56] dark:text-white uppercase">
              MAHAVEER
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#0A1D56]/60 dark:text-white/50 uppercase">
              Security Services
            </span>
          </div>
        </Link>

        {/* --- 🧭 Middle: Nav Links (Standard Static Style) --- */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[12px] font-black uppercase tracking-wider transition-colors
                ${location.pathname === link.path 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-[#0A1D56]/80 dark:text-white/70 hover:text-blue-600 dark:hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- 📞 Right: Contact Box & Theme --- */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-[#0A1D56] dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 rounded-full"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact Box from Image */}
          <div className="hidden sm:flex items-center gap-3 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-2 rounded-2xl shadow-sm">
            <div className="bg-blue-100 dark:bg-blue-600/20 p-2 rounded-xl text-blue-600">
              <Phone size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest leading-none mb-1">
                24/7 Protection
              </span>
              <span className="text-[13px] font-black text-[#0A1D56] dark:text-white whitespace-nowrap">
                +91 99561 97272
              </span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#0A1D56] dark:text-white">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Simple) */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-b border-zinc-100 dark:border-white/10 p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-widest text-[#0A1D56] dark:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;