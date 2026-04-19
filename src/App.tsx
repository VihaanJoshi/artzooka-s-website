/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Palette, 
  GraduationCap, 
  Brush, 
  Users, 
  CheckCircle2, 
  ArrowUpRight,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Zap,
  Star,
  Shapes,
  Instagram
} from "lucide-react";
import React, { useState, useRef } from "react";

const BUSINESS_NAME = "Rachna's Artzooka Studio";
const PHONE = "9977211509";
const WHATSAPP = "919977211509";
const EMAIL = "artzooka0509@gmail.com";
const ADDRESS = "63 Usha Nagar Ext, Indore";
const MAP_LINK = "https://maps.app.goo.gl/eRtgBpWFJRgzYEsF6";
const INSTAGRAM = "https://www.instagram.com/artzooka_art_design_skool?igsh=MWhub2g1MzN2eGZmaw==";
const HOURS = "Mon, Wed, Fri 5-8pm";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    program: "Diploma in Fine Arts",
    message: ""
  });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello! I'm ${formData.name}. I'm interested in the ${formData.program} program. 

Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodedText}`, "_blank");
  };

  const mainServices = [
    {
      title: "Diploma in Fine Arts",
      description: "University-affiliated professional diploma for serious art careers.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-blue-500",
      accent: "text-blue-600"
    },
    {
      title: "NID / NIFT Coaching",
      description: "Expert guidance for India's elite design entrance exams.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-orange-500",
      accent: "text-orange-600"
    },
    {
      title: "BFA Preparation",
      description: "Comprehensive coaching for Bachelor of Fine Arts university entrance.",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-amber-500",
      accent: "text-amber-600"
    },
    {
      title: "Junior Certificate",
      description: "Foundational painting course for kids and young enthusiasts.",
      icon: <Brush className="w-6 h-6" />,
      color: "bg-emerald-500",
      accent: "text-emerald-600"
    }
  ];

  const categories = [
    { name: "Painting", img: "https://i.postimg.cc/RZp0mWkC/painting.jpg" },
    { name: "Digital Art", img: "https://i.postimg.cc/BnKTPGJD/digital.jpg" },
    { name: "Graphic Design", img: "https://i.postimg.cc/VkCq0czb/graphic.jpg" },
    { name: "Sketching", img: "https://i.postimg.cc/JzkNHWRX/sketching-final.jpg" },
    { name: "Sculpture", img: "https://i.postimg.cc/7Z23JyqJ/sculpture.jpg" }
  ];

  const LogoContainer = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-yellow-400 to-blue-500 rounded-full blur-lg opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
        <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden border-2 border-slate-100">
          <img 
            src="https://i.postimg.cc/kGGM6q3L/logo-png.jpg" 
            alt="Rachna's Artzooka Logo" 
            className="w-full h-full object-cover scale-110 group-hover:rotate-12 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-display font-black text-2xl tracking-tighter leading-none flex items-baseline">
          RACHNA'S <span className="text-primary text-sm ml-1 italic">ARTZOOKA</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">Studio</span>
          <div className="h-px flex-grow bg-slate-200" />
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative selection:bg-orange-200 selection:text-orange-950">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, 100]), y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, -100]), y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* Luxury Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas/30 backdrop-blur-xl border-b border-canvas/50">
        <div className="max-w-screen-2xl mx-auto px-6 h-24 flex items-center justify-between">
          <LogoContainer />
          
          <div className="hidden lg:flex items-center gap-12 font-bold text-sm uppercase tracking-widest text-slate-600">
            <a href="#about" className="hover:text-primary transition-colors">Theory</a>
            <a href="#courses" className="hover:text-primary transition-colors">Courses</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-gradient-to-r from-orange-600 to-red-500 transition-all shadow-xl active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Start Creating</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Editorial Hero */}
      <section className="min-h-screen pt-44 pb-24 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 grid xl:grid-cols-[1.2fr_0.8fr] gap-12 items-center text-center xl:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-700">Indore's Premier Creative Studio</span>
            </div>
            
            <h1 className="font-display text-[clamp(2.75rem,8vw,6rem)] font-black leading-[0.85] tracking-tighter mb-10">
              CRAFT YOUR <span className="text-primary">LEGACY</span><br />
              THROUGH <span className="brush-underline italic text-red-600">COLOR</span>
            </h1>

            <p className="font-sans text-xl md:text-2xl text-slate-600 max-w-2xl mb-12 font-medium mx-auto xl:mx-0 text-balance leading-relaxed">
              Professional Fine Arts training at Rachna's Studio. From BFA entrance to advanced Digital Art mastery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start">
              <a 
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="group relative bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl inline-flex items-center justify-center gap-4 overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 font-black">Join The Class</span>
                <ArrowUpRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-6 justify-center">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-canvas object-cover" src={`https://picsum.photos/seed/raz_student_${i}/100/100`} />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />)}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mt-1">NID • NIFT • NATA Experts</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fancy Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 group">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,64,175,0.25)] border-8 border-white p-4 bg-white">
                <img 
                  src="https://i.postimg.cc/L5W9jwm2/header-jpg.jpg" 
                  alt="Rachna's Artzooka Studio Mural"
                  className="w-full h-full object-cover rounded-2xl grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-16 -right-16 w-56 h-56 pointer-events-none"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900 opacity-10">
                  <path id="heroCirclePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0 " />
                  <text className="font-mono text-[7px] uppercase tracking-[0.4em]">
                    <textPath xlinkHref="#heroCirclePath">Rachna's Artzooka Studio • Creative Art and Design Hub</textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Curriculum */}
      <section id="courses" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <svg className="w-full h-full" viewBox="0 0 100 100">
             <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <div className="font-mono text-orange-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">The Portfolio Pathway</div>
              <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">PROFESSIONAL<br /><span className="text-blue-500">PROGRAMS</span>.</h2>
            </div>
            <p className="text-slate-400 max-w-sm font-medium border-l-2 border-slate-800 pl-6 py-2">We transform creative curiosity into industry-standard technical mastery.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((s, idx) => (
              <motion.a
                key={idx}
                href={`https://wa.me/${WHATSAPP}?text=I'm interested in the ${s.title} program.`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 md:p-12 bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] border border-white/5 overflow-hidden transition-all shadow-2xl hover:shadow-primary/10 block"
              >
                <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-black group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="font-display text-2xl font-black mb-4 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10">{s.description}</p>
                <div className="absolute bottom-8 md:bottom-10 left-8 md:left-12 right-8 md:right-12 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className={`font-mono text-[10px] font-bold uppercase tracking-widest ${s.accent}`}>Inquire Now</div>
                   <ArrowUpRight className={`w-4 h-4 ${s.accent}`} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-slate-50 shadow-2xl">
              <img 
                src="https://i.postimg.cc/zG4FBGWq/rachna-joshi.jpg" 
                alt="Rachna S Joshi"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-primary text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl max-w-[200px] md:max-w-xs animate-float">
               <Star className="w-6 h-6 md:w-8 md:h-8 text-orange-400 mb-4" />
               <div className="font-display text-lg md:text-2xl font-black italic">"Art is not what you see, but what you make others see."</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Founder</div>
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none uppercase">
              MEET<br /><span className="text-primary tracking-normal font-serif italic not-uppercase border-b-8 border-orange-500/20">Rachna S Joshi</span>
            </h2>
            
            <div className="space-y-8 text-slate-600 font-medium text-lg leading-relaxed">
              <p>
                As the heart of Rachna's Artzooka Studio, Rachna S Joshi brings over 15 years of artistic pedigree to every classroom. Her unique teaching methodology doesn't just focus on the brush, but on the <span className="text-slate-900 font-bold italic">visionary thinking</span> required to excel in today's competitive design landscape.
              </p>
              <p>
                A distinguished university-affiliated educator and expert in NID, NIFT, and NATA entrance preparation, she has successfully mentored over a thousand students into India's premier design institutions.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
               <div className="bg-canvas p-6 rounded-2xl border border-slate-100">
                  <div className="font-display text-4xl font-black text-primary mb-1 tracking-tighter">15+</div>
                  <div className="font-mono text-[10px] uppercase font-black tracking-widest text-slate-400">Years Mastery</div>
               </div>
               <div className="bg-canvas p-6 rounded-2xl border border-slate-100">
                  <div className="font-display text-4xl font-black text-orange-500 mb-1 tracking-tighter">1000+</div>
                  <div className="font-mono text-[10px] uppercase font-black tracking-widest text-slate-400">Students Mentored</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immersive Gallery */}
      <section id="gallery" className="py-32 bg-canvas">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-24">
             <div className="inline-block relative">
               <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase">Studio Life.</h2>
               <div className="absolute -bottom-2 right-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 rounded-full" />
             </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`group relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 ${
                  i === categories.length - 1 ? "lg:col-start-2 lg:col-span-2 sm:col-span-2" : ""
                }`}
              >
                <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 pr-12">
                   <span className="font-mono text-white/40 text-[10px] md:text-xs block mb-2 tracking-[0.5em]">MODULE 0{i+1}</span>
                   <h4 className="text-white font-display text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none">{cat.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relational Trust */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            <h2 className="font-display text-5xl md:text-6xl font-black tracking-tighter mb-12 uppercase leading-[0.85] italic">
              UNCOMPROMISED<br /><span className="text-primary not-italic tracking-normal">TECHNICAL</span><br />MASTERY.
            </h2>
            
            <div className="space-y-16">
              <div className="grid sm:grid-cols-[80px_1fr] items-start gap-8 text-left">
                <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center text-white p-4">
                  <Shapes className="w-full h-full" />
                </div>
                <div>
                   <h5 className="font-black text-2xl uppercase tracking-tighter mb-3 leading-tight">University Accredited</h5>
                   <p className="text-slate-500 font-medium leading-relaxed">Our college-level Diploma programs are affiliated with Raja Mansingh Tomar Music & Arts University, providing recognized academic value.</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-[80px_1fr] items-start gap-8 text-left">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-white p-4">
                  <Star className="w-full h-full" />
                </div>
                <div>
                   <h5 className="font-black text-2xl uppercase tracking-tighter mb-3 leading-tight">Entrance Excellence</h5>
                   <p className="text-slate-500 font-medium leading-relaxed">We specialize in India's toughest design tests—NID, NIFT, and NATA—guiding you through portfolio building and studio tests.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Contact */}
      <section id="contact" className="pb-24 pt-4 px-4 md:px-6">
        <div className="max-w-screen-2xl mx-auto glass-card rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.1)]">
           <div className="grid lg:grid-cols-[1fr_1.8fr]">
              <div className="bg-slate-950 p-8 md:p-24 text-white">
                 <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter mb-12 italic leading-none">JOIN THE<br /><span className="not-italic text-blue-500 tracking-normal underline underline-offset-8 decoration-orange-500">STUDIO</span>.</h2>
                 
                 <div className="space-y-12">
                   <div className="flex gap-6">
                     <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                     <div>
                       <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">Location</div>
                       <div className="font-bold text-lg leading-tight">{ADDRESS}</div>
                     </div>
                   </div>
                   <div className="flex gap-6">
                     <Phone className="w-6 h-6 text-blue-500 mt-1" />
                     <div>
                       <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">Connect</div>
                       <div className="font-bold text-lg leading-tight">{PHONE}</div>
                       <div className="text-sm text-slate-400 mt-1 font-medium">{EMAIL}</div>
                     </div>
                   </div>
                   <div className="flex gap-6">
                     <Clock className="w-6 h-6 text-emerald-500 mt-1" />
                     <div>
                       <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">Studio Hours</div>
                       <div className="font-bold text-lg leading-tight">{HOURS}</div>
                     </div>
                   </div>
                   <div className="flex gap-6">
                     <Instagram className="w-6 h-6 text-rose-500 mt-1" />
                     <div>
                       <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">Instagram</div>
                       <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="font-bold text-lg leading-tight hover:text-rose-500 transition-colors">@artzooka_art_design_skool</a>
                     </div>
                   </div>
                 </div>

                 <div className="mt-24">
                    <LogoContainer className="scale-110 origin-left" />
                 </div>
              </div>

              <div className="p-8 md:p-24 bg-white relative">
                 <div className="max-w-xl">
                   <h3 className="font-display text-2xl md:text-4xl font-black tracking-tighter uppercase mb-12 leading-[0.8]"><span className="text-primary tracking-normal block text-xl mb-4 italic not-uppercase font-serif">Hello Creative!</span> RESERVE YOUR SPOT.</h3>
                   <form className="space-y-10" onSubmit={handleWhatsAppInquiry}>
                     <div className="group relative">
                       <input 
                         type="text" 
                         required
                         value={formData.name}
                         onChange={e => setFormData({ ...formData, name: e.target.value })}
                         className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-bold text-xl focus:outline-none focus:border-primary transition-colors placeholder:text-transparent peer" 
                         placeholder="Full Name" 
                       />
                       <label className="absolute left-0 top-4 text-slate-300 font-bold text-xl pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs uppercase tracking-widest peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                     </div>
                     <div className="group relative">
                       <select 
                         value={formData.program}
                         onChange={e => setFormData({ ...formData, program: e.target.value })}
                         className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-bold text-xl focus:outline-none focus:border-primary transition-colors appearance-none"
                       >
                         <option>Diploma in Fine Arts</option>
                         <option>NID / NIFT Preparation</option>
                         <option>BFA Entrance Coaching</option>
                         <option>Junior Certificate Painting</option>
                       </select>
                       <label className="absolute left-0 -top-6 text-primary text-xs font-bold uppercase tracking-widest">Select Program</label>
                     </div>
                     <div className="group relative">
                       <textarea 
                         required
                         value={formData.message}
                         onChange={e => setFormData({ ...formData, message: e.target.value })}
                         className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-bold text-xl focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-none peer" 
                         placeholder="Message"
                       ></textarea>
                       <label className="absolute left-0 top-4 text-slate-300 font-bold text-xl pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-primary peer-focus:text-xs uppercase tracking-widest peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">Your Message</label>
                     </div>
                    <button type="submit" className="w-full bg-slate-950 text-white py-6 rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-orange-500 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4">
                       Send Inquiry
                       <ArrowUpRight className="w-6 h-6" />
                     </button>
                   </form>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-canvas border-t border-slate-200">
         <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-1">
               <LogoContainer className="mb-8" />
               <p className="text-slate-400 font-medium leading-relaxed text-sm pr-12 italic">Recognized university-affiliated art education and design entrance coaching in the heart of Indore.</p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 gap-12">
               <div className="space-y-6">
                  <h6 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Programs</h6>
                  <ul className="space-y-4 font-bold text-slate-500 text-sm italic">
                    <li className="hover:text-primary cursor-pointer transition-colors">Fine Arts Diploma</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Degree (BFA) Prep</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Digital & Graphics</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">NID/NIFT/NATA</li>
                  </ul>
               </div>
               <div className="space-y-6">
                  <h6 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Studio</h6>
                  <ul className="space-y-4 font-bold text-slate-500 text-sm italic">
                    <li className="hover:text-primary cursor-pointer transition-colors">Our Approach</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Gallery Space</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Contact Hub</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Admissions</li>
                  </ul>
               </div>
            </div>

            <div className="flex flex-col items-center lg:items-end justify-between">
               <div className="flex gap-4">
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-50 hover:bg-green-500 hover:text-white transition-all"><MessageCircle className="w-6 h-6" /></a>
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-50 hover:bg-rose-500 hover:text-white transition-all"><Instagram className="w-6 h-6" /></a>
                  <a href={`tel:${PHONE}`} className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-50 hover:bg-blue-500 hover:text-white transition-all"><Phone className="w-6 h-6" /></a>
                  <a href={MAP_LINK} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-50 hover:bg-orange-500 hover:text-white transition-all"><MapPin className="w-6 h-6" /></a>
               </div>
               <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-slate-300 font-bold pt-12">© {new Date().getFullYear()} RACHNA'S ARTZOOKA.</div>
            </div>
         </div>
      </footer>
    </div>
  );
}
