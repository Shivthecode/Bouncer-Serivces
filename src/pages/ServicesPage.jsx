import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, UserCheck, PartyPopper, Building2, Briefcase, MessageCircle, ArrowRight, CheckCircle2, ChevronUp, ShieldAlert } from 'lucide-react';

const services = [
  {
    id: "private-guards",
    title: "Private Security Guards",
    desc: "Our guards are not just watchers; they are trained tacticians for total security assurance.",
    longDesc: "We identify and mitigate all risks, present and foreseeable. Our personnel are appointed only after rigorous training in crowd control and emergency response.",
    specs: ["24/7 Surveillance", "Armed & Unarmed Options", "Ex-Servicemen Units", "Incident Reporting"],
    icon: <Shield size={32} />,
    img: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1000"
  },
  {
    id: "event-security",
    title: "Event Security Services",
    desc: "Ensuring the safety of professional and social events with precision and peace of mind.",
    longDesc: "Whether it's a high-profile wedding in Amethi or a corporate concert in Lucknow, we handle crowd management and VIP entry with absolute tactical control.",
    specs: ["Crowd Management", "VIP Guest Protocol", "Emergency Evacuation", "Baggage Scanning"],
    icon: <PartyPopper size={32} />,
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000"
  },
  {
    id: "pso",
    title: "Personal Security (PSO)",
    desc: "Hire trained and fully verified ex-servicemen Guardians for unparalleled protection.",
    longDesc: "Our PSOs are veterans of the Indian Army and Paramilitary forces, trained in defensive driving and immediate threat neutralization protocols.",
    specs: ["Armed PSOs", "Travel Escort", "Threat Assessment", "Secret Intelligence"],
    icon: <UserCheck size={32} />,
    img: "https://images.unsplash.com/photo-1590402444587-43d765678190?q=80&w=1000"
  },
  {
    id: "bouncer-services",
    title: "Elite Bouncer Services",
    desc: "Verified male and female bouncers to ensure peace at clubs, parties, and gatherings.",
    longDesc: "We keep the party safe. Our bouncers are trained to handle conflict with a cool mind and professional patience under Veer Bouncer Club standards.",
    specs: ["Male/Female Bouncers", "Soft-Skill Trained", "Crisis De-escalation", "Entry Management"],
    icon: <Users size={32} />,
    img: "https://images.unsplash.com/photo-1555933935-d0743bc139c2?q=80&w=1000"
  },
  {
    id: "facility-management",
    title: "Facility Management",
    desc: "Where efficiency meets excellence. The upkeep and care of your space is our responsibility.",
    longDesc: "We pave the way for productivity and comfort in corporate offices and luxury residences through systematic maintenance and staffing.",
    specs: ["Corporate Maintenance", "Cleaning Services", "Staffing Solutions", "Technical Support"],
    icon: <Building2 size={32} />,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
  },
  {
    id: "office-security",
    title: "Office & Corporate Security",
    desc: "Safeguarding your workspace and empowering success. We secure your business focus.",
    longDesc: "Specializing in corporate intelligence and risk mitigation to prevent fraud, identity theft, and unauthorized access to your assets.",
    specs: ["Access Control", "CCTV Monitoring", "Fire Safety Drill", "Asset Protection"],
    icon: <Briefcase size={32} />,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"
  }
];

const ServicesPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = (serviceName) => {
    const phone = "919956197272";
    const message = `Hello Mahaveer Bouncer, I am interested in "${serviceName}" service. Please provide details.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-[#F5F5F7] dark:bg-[#050505] text-black dark:text-white pt-32 pb-20 selection:bg-blue-600 selection:text-white transition-colors duration-500 font-sans">
      
      {/* 🚀 Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6"
        >
          <ShieldAlert size={14} /> Full Spectrum Protection
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter text-[#0A1D56] dark:text-white leading-none"
        >
          TACTICAL <span className="text-blue-600 italic font-light">SOLUTIONS</span>
        </motion.h1>
        <p className="text-zinc-500 mt-6 max-w-2xl mx-auto uppercase tracking-[0.4em] text-[10px] font-black">
          High-Level Protection by Mahaveer Bouncer | Amethi Command
        </p>
      </section>

      {/* 🛠️ Services Detailed List */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {services.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}
          >
            {/* Visual Side */}
            <div className="flex-1 relative group w-full">
              <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white dark:border-white/5 aspect-video shadow-2xl">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100 brightness-100 group-hover:brightness-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D56]/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute top-6 left-6 p-4 bg-white/90 dark:bg-[#0A1D56]/80 backdrop-blur-md rounded-2xl border border-blue-600/20 text-blue-600 shadow-xl">
                {service.icon}
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-8 pt-4">
              <div className="space-y-2">
                <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.5em]">Division 0{idx + 1}</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0A1D56] dark:text-white leading-none">
                  {service.title}
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
              </div>
              
              <div className="space-y-4 font-medium">
                <p className="text-zinc-700 dark:text-zinc-200 text-xl italic leading-relaxed">"{service.desc}"</p>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-base">{service.longDesc}</p>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-blue-50/50 dark:bg-white/[0.02] border border-blue-600/10 dark:border-white/5 rounded-[2rem] p-6 md:p-8 shadow-inner"
                  >
                    <h4 className="text-[#0A1D56] dark:text-white font-black uppercase text-[10px] tracking-widest mb-6 border-b border-blue-600/10 pb-4">Core Tactical Specializations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {service.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 text-xs font-black uppercase tracking-wider">
                          <CheckCircle2 size={16} className="text-blue-600" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap gap-4 pt-4">
                {/* 🟢 Keeping WhatsApp GREEN as requested */}
                <button 
                  onClick={() => handleWhatsApp(service.title)}
                  className="bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-widest text-[10px]"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp
                </button>
                <button 
                  onClick={() => toggleDetails(service.id)}
                  className="bg-[#0A1D56] dark:bg-blue-600 text-white font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-widest text-[10px]"
                >
                  {expandedId === service.id ? "Hide Intelligence" : "Tactical Details"} 
                  {expandedId === service.id ? <ChevronUp size={18} /> : <ArrowRight size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 🏁 Bottom CTA */}
      <section className="mt-40 max-w-5xl mx-auto px-6 text-center">
        <div className="p-12 md:p-20 bg-white dark:bg-zinc-900/40 border border-blue-600/10 dark:border-white/5 rounded-[4rem] space-y-8 relative overflow-hidden shadow-2xl transition-colors">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0A1D56] dark:text-white leading-[0.9]">Need a Customized <br/> <span className="text-blue-600">Security Plan?</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto font-black uppercase tracking-widest text-[10px] leading-relaxed">Our command center is ready to analyze your threat level and deploy tactical units within 24 hours.</p>
          <button 
            onClick={() => handleWhatsApp("Custom Deployment Plan")}
            className="inline-flex bg-blue-600 text-white font-black px-12 py-5 rounded-2xl uppercase tracking-[0.4em] text-[10px] hover:bg-[#0A1D56] transition-all shadow-xl shadow-blue-600/20"
          >
            Consult Our Experts
          </button>
        </div>
      </section>

      {/* Background Watermark */}
      <div className="fixed bottom-0 left-0 text-[18rem] font-black text-blue-600/[0.02] dark:text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter leading-none -z-10">
        FORCE
      </div>
    </div>
  );
};

export default ServicesPage;