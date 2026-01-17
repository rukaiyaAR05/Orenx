"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const scrollingHeadlines = [
  { text: "Manage your business in one place", lang: "English" },
  { text: "अपने व्यापार को एक जगह प्रबंधित करें", lang: "Hindi" },
  { text: "உங்கள் வணிகத்தை ஒரே இடத்தில் நிர்வகிக்கவும்", lang: "Tamil" },
  { text: "আপনার ব্যবসা এক জায়গায় পরিচালনা করুন", lang: "Bengali" },
  { text: "మీ వ్యాపారాన్ని ఒకే చోట నిర్వహించండి", lang: "Telugu" },
  { text: "ನಿಮ್ಮ ವ್ಯಾಪಾರವನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಿಸಿ", lang: "Kannada" },
  { text: "તમારા વ્યવસાયને એક જગ્યાએ સંચાલિત કરો", lang: "Gujarati" },
  { text: "आपला व्यवसाय एकाच ठिकाणी व्यवस्थापित करा", lang: "Marathi" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Pre-generate particle data to avoid Math.random() during render
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      size: 2 + (i % 6),
      left: (i * 17 + 5) % 100,
      top: (i * 23 + 10) % 100,
      r: 16 + (i % 4) * 9,
      g: 185 + (i % 3) * 8,
      b: 129 + (i % 5) * 8,
      opacity: 0.3 + (i % 5) * 0.1,
      delay: -(i * 0.4),
      duration: 6 + (i % 6),
    })), []);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Headline rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % scrollingHeadlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Embedded Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-1deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(10px, -20px) scale(1.1); opacity: 0.8; }
          50% { transform: translate(-5px, -40px) scale(0.9); opacity: 0.4; }
          75% { transform: translate(15px, -20px) scale(1.05); opacity: 0.7; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        @keyframes wave {
          0%, 100% { d: path('M0,60 Q180,20 360,60 T720,60 T1080,60 T1440,60 V120 H0 Z'); }
          50% { d: path('M0,60 Q180,100 360,60 T720,60 T1080,60 T1440,60 V120 H0 Z'); }
        }
        @keyframes blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 10px) scale(1.05); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes headline-slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          15% { transform: translateY(0); opacity: 1; }
          85% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes lang-badge-fade {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          15%, 85% { opacity: 1; transform: translateY(0); }
        }
        .animate-headline-slide { animation: headline-slide-up 3s ease-in-out; }
        .animate-lang-badge { animation: lang-badge-fade 3s ease-in-out; }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite 1s; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-gradient { animation: gradient-shift 8s ease infinite; background-size: 200% 200%; }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
        .animate-fade-up-delay-1 { animation: fade-up 0.8s ease-out 0.1s forwards; opacity: 0; }
        .animate-fade-up-delay-2 { animation: fade-up 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-up-delay-3 { animation: fade-up 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-up-delay-4 { animation: fade-up 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-particle { animation: particle-float 8s ease-in-out infinite; }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-blob { animation: blob-move 12s ease-in-out infinite; }
      `}} />

      {/* Base Background with Gradient Mesh */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(16,185,129,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(20,184,166,0.12) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 20%, rgba(52,211,153,0.1) 0%, transparent 40%),
            linear-gradient(135deg, #fafdf9 0%, #f0fdf4 50%, #ecfdf5 100%)
          `
        }}
      />

      {/* Animated Morphing Blobs */}
      <div 
        className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] animate-morph animate-blob"
        style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.25), rgba(20,184,166,0.15))',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] animate-morph animate-blob"
        style={{
          background: 'linear-gradient(225deg, rgba(52,211,153,0.2), rgba(16,185,129,0.1))',
          filter: 'blur(50px)',
          animationDelay: '-4s',
        }}
      />
      <div 
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] animate-morph"
        style={{
          background: 'linear-gradient(45deg, rgba(110,231,183,0.15), rgba(20,184,166,0.08))',
          filter: 'blur(40px)',
          animationDelay: '-2s',
        }}
      />

        
      {/* Animated Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(15,42,29,0.5)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Flowing Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path 
          d="M-100,200 Q200,100 400,200 T800,150 T1200,250 T1600,200" 
          fill="none" 
          stroke="url(#lineGrad1)" 
          strokeWidth="1"
          strokeDasharray="8 12"
          className="animate-dash"
        />
        <path 
          d="M-100,400 Q300,300 500,400 T900,350 T1300,450 T1700,400" 
          fill="none" 
          stroke="url(#lineGrad1)" 
          strokeWidth="1"
          strokeDasharray="8 12"
          className="animate-dash"
          style={{ animationDelay: '-5s' }}
        />
        <path 
          d="M-100,600 Q250,500 450,600 T850,550 T1250,650 T1650,600" 
          fill="none" 
          stroke="url(#lineGrad1)" 
          strokeWidth="1"
          strokeDasharray="8 12"
          className="animate-dash"
          style={{ animationDelay: '-10s' }}
        />
      </svg>

      {/* Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full animate-particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                background: `rgba(${p.r}, ${p.g}, ${p.b}, ${p.opacity})`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Geometric Shapes - Static */}
      <div className="absolute top-[12%] left-[6%] w-4 h-4 bg-emerald-400/50 rounded-full shadow-lg shadow-emerald-400/30" />
      <div className="absolute top-[22%] right-[12%] w-3 h-3 bg-teal-400/40 rounded-full" />
      <div className="absolute bottom-[28%] left-[10%] w-5 h-5 border-2 border-emerald-300/50 rounded-full" />
      <div className="absolute top-[55%] right-[6%] w-3 h-3 bg-green-400/50 rotate-45" />
      <div className="absolute top-[38%] left-[4%] w-8 h-8 border border-emerald-200/40 rounded-xl rotate-12" />
      <div className="absolute bottom-[40%] right-[18%] w-2 h-2 bg-emerald-500/60 rounded-full" />
      <div className="absolute top-[70%] left-[25%] w-6 h-6 border border-dashed border-teal-300/30 rounded-lg" />

      {/* Main Content - Centered Layout */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        
        {/* TOP: Full Line Scrolling Headlines in Different Languages */}
        <div className={`text-center mb-12 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Scrolling Headline Container */}
          <div className="relative h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] overflow-hidden flex items-center justify-center">
            <h1
              key={currentWordIndex}
              className="absolute animate-headline-slide text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight text-[#0B2B26] px-4 whitespace-nowrap"
            >
              {scrollingHeadlines[currentWordIndex].text}
            </h1>
          </div>
          
          {/* Language Badge */}
          <div className="flex justify-center mt-2">
            <span
              key={`lang-${currentWordIndex}`}
              className="animate-lang-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm font-semibold text-emerald-700">
                {scrollingHeadlines[currentWordIndex].lang}
              </span>
          </span>
          </div>
        </div>
        
        {/* MIDDLE: Three Column Layout - Left Text | Image | Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-center mb-12">
          
          {/* Left Side - Simple Lines */}
          <div className={`space-y-6 lg:text-right ${mounted ? 'animate-fade-up-delay-1' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 lg:flex-row-reverse">
              <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex-shrink-0 shadow-lg shadow-emerald-500/30" />
              <p className="text-xl lg:text-2xl text-[#0F2A1D] font-black tracking-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                Real-time inventory tracking
              </p>
            </div>
            <div className="flex items-center gap-4 lg:flex-row-reverse">
              <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex-shrink-0 shadow-lg shadow-emerald-500/30" />
              <p className="text-xl lg:text-2xl text-[#0F2A1D] font-black tracking-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                AI-powered predictions
              </p>
        </div>
      </div>

          {/* Center: Vector Art Image */}
          <div className="relative flex items-center justify-center">
            {/* Central Glow */}
            <div 
              className="absolute w-[400px] h-[400px] rounded-full blur-3xl transition-all duration-700 ease-out"
              style={{
                background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(20,184,166,0.15) 50%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            
            {/* Hero Vector Art Image */}
            <div className={`relative z-10 animate-float-1 ${mounted ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>
              <div className="relative">
                {/* Decorative frame behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-[2rem] blur-xl" />
                <div className="absolute -inset-2 bg-gradient-to-br from-white/80 to-white/40 rounded-[1.5rem] backdrop-blur-sm border border-white/50 shadow-2xl" />
                
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(15,42,29,0.25)]">
                  <Image
                    src="/I1.jpg"
                    alt="ORENX Business Management"
                    width={380}
                    height={380}
                    className="object-cover rounded-2xl"
                    priority
                  />
                  
                  {/* Gradient overlay for blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

          {/* Right Side - Simple Lines */}
          <div className={`space-y-6 ${mounted ? 'animate-fade-up-delay-1' : 'opacity-0'}`}>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex-shrink-0 shadow-lg shadow-teal-500/30" />
              <p className="text-xl lg:text-2xl text-[#0F2A1D] font-black tracking-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                Smart alerts & reminders
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex-shrink-0 shadow-lg shadow-teal-500/30" />
              <p className="text-xl lg:text-2xl text-[#0F2A1D] font-black tracking-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                Multi-user team access
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM: CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${mounted ? 'animate-fade-up-delay-3' : 'opacity-0'}`}>
          <button className="group relative bg-[#0F2A1D] text-white px-10 py-4 rounded-2xl text-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/25 hover:-translate-y-1">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Free Demo
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </button>
          
          <button className="group flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm text-[#0F2A1D] border-2 border-[#0F2A1D]/10 px-10 py-4 rounded-2xl text-lg font-bold hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
            <svg className="w-6 h-6 text-emerald-600 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Watch Demo
          </button>
        </div>

      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="url(#waveGrad)"
          />
          <path 
            d="M0 120L60 105C120 95 240 75 360 68C480 55 600 65 720 70C840 75 960 85 1080 88C1200 92 1320 88 1380 86L1440 84V120H0Z" 
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
