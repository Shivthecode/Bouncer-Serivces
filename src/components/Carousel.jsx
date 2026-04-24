import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Import images
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";

const slideContent = [
  {
    title: "Executive Protection",
    desc: "Elite security for VIPs, celebrities, and high-profile executives. Our personnel are trained in tactical defense and discreet surveillance.",
    stats: "24/7 Coverage",
    feature: "Ex-Servicemen Units",
    tag: "Premium"
  },
  {
    title: "Event Security",
    desc: "Comprehensive crowd management and entry control for concerts, weddings, and corporate galas. We ensure a zero-incident environment.",
    stats: "Verified Staff",
    feature: "Rapid Response",
    tag: "Tactical"
  },
  {
    title: "Asset Protection",
    desc: "Securing your physical and intellectual property with advanced perimeter control and professional guarding services.",
    stats: "Fully Insured",
    feature: "Real-time Reporting",
    tag: "Secure"
  },
  {
    title: "Bouncer Services",
    desc: "Professional male and female bouncers for high-end clubs and private parties, maintaining decorum with firm yet polite authority.",
    stats: "Licensed Pros",
    feature: "Conflict Resolution",
    tag: "Reliable"
  }
];

const images = [img1, img2, img3, img3];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#0A1D56] dark:bg-[#050505] overflow-hidden">
      
      {/* 📱 MOBILE & TABLET VERSION (Card Style) */}
      {/* Fixed height (min-h-[600px]) prevents the screen from jumping when slides change */}
      <div className="lg:hidden w-full min-h-[600px] flex items-center justify-center p-6">
        <div className="relative w-full max-w-sm h-[450px]"> 
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 flex flex-col shadow-2xl"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-[9px] font-black uppercase tracking-widest text-white">
                  {slideContent[index].tag}
                </span>
                <span className="text-white/40 text-xs font-mono">0{index + 1} / 04</span>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-black text-white leading-tight uppercase italic tracking-tighter mb-4">
                  {slideContent[index].title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">
                  {slideContent[index].desc}
                </p>
              </div>

              {/* Card Footer (More details added here) */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-blue-400 uppercase font-black tracking-tighter">Availability</p>
                    <p className="text-white text-xs font-bold">{slideContent[index].stats}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-400 uppercase font-black tracking-tighter">Key Feature</p>
                    <p className="text-white text-xs font-bold">{slideContent[index].feature}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {slideContent.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-10 bg-blue-500' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 💻 PC VERSION (Strictly Unchanged) */}
      <div className="hidden lg:block w-full h-screen p-6">
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img
                src={images[index]}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-blue-900/30 to-black/60"></div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? 'w-12 bg-blue-600' : 'w-4 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Carousel;