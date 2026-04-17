import React, { useEffect } from "react";

// 🔝 Components (correct path)
import Navbar from "./components/Navbar";
import BouncerCanvasScroll from "./components/BouncerCanvasScroll";
import About from "./components/About";
import Contact from "./components/Contact";

// 📄 Pages (correct path)
import Hero from "./pages/Hero";
import Service from "./pages/Services"; // ⚠️ make sure name = Service.jsx

// ⚡ Smooth Scroll
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    // 🎯 RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🔥 GSAP sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* 🔝 Navbar */}
      <Navbar />

      <main>

        {/* 🏙 Hero Section */}
        <Hero />

        {/* 🎬 Canvas Scroll Section */}
        <BouncerCanvasScroll />

        {/* 💼 Services Section */}
        <Service />

        {/* 🧠 About Section */}
        <About />

        {/* 📞 Contact Section */}
        <Contact />

        {/* 🚀 Footer */}
        <section className="h-[50vh] flex items-center justify-center bg-black border-t border-white/10">
          <h2 className="text-white/20 text-xl uppercase tracking-[0.3em] text-center px-4">
            © CodeWebX – All Rights Reserved
          </h2>
        </section>

      </main>

    </div>
  );
}

export default App;