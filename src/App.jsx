import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (Home Sections)
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Carousel from "./components/Carousel";
import Message from "./components/Message";
import About from "./components/About";
import Contact from "./components/Contact";
import TeamSection from "./pages/Team"; 

// Full Pages
import AboutPage from "./pages/AboutPage"; 
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from './pages/Team'; 

gsap.registerPlugin(ScrollTrigger);

// --- 🏠 Home Page Wrapper ---
const Home = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "circOut" }}
  >
    <Hero />
    <Carousel />
    
    <Services />
    <Message />
    <About />
    <TeamSection /> 
    <Contact />
  </motion.div>
);

// --- 🛠️ App Content Handler ---
const AppContent = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // 1. 🌊 Lenis Smooth Scroll Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      mouseMultiplier: 1,
    });

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 2. 🎯 Page Change Handling
    // Scroll to top instantly on route change
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    // Refresh ScrollTrigger after a short delay for dynamic content
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white selection:bg-blue-600 selection:text-white transition-colors duration-500">
      <Navbar />
      
      <main className="relative">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;