import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, Phone, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <nav className="fixed top-0 left-0 w-full z-[100] 
    bg-white/70 dark:bg-black/60 backdrop-blur-xl 
    border-b border-white/20 dark:border-white/10 
    transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🔷 LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl text-white shadow-md">
            <ShieldCheck size={22} />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-[#0A1D56] dark:text-white">
              MAHAVEER
            </span>
            <span className="text-[10px] tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase">
              Security Services
            </span>
          </div>
        </Link>

        {/* 🔷 NAV LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-[13px] font-semibold uppercase tracking-wide transition-all duration-300
              ${location.pathname === link.path
                  ? 'text-blue-600'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-blue-600'
              }`}
            >
              {link.name}

              <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}>
              </span>
            </Link>
          ))}
        </div>

        {/* 🔷 RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-white/10 transition"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* 📞 CLICKABLE CONTACT BOX */}
          <a 
            href="tel:+919956197272"
            className="hidden sm:flex items-center gap-3 
            bg-white/80 dark:bg-white/5 
            backdrop-blur-md border border-white/30 dark:border-white/10 
            px-4 py-2 rounded-2xl shadow-md 
            hover:scale-[1.03] transition"
          >
            <div className="bg-blue-600/10 text-blue-600 p-2 rounded-lg">
              <Phone size={16} />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-1">
                24/7 Protection
              </span>
              <span className="text-[13px] font-bold text-[#0A1D56] dark:text-white">
                +91 99561 97272
              </span>
            </div>
          </a>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔷 MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-zinc-200 dark:border-white/10 px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wide text-[#0A1D56] dark:text-white"
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