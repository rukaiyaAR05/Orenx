"use client";

import { useState, useEffect } from "react";
import { ScanLine, Calculator, MessageSquareText, ArrowLeftRight, FileBarChart, Receipt, HeadphonesIcon, ArrowRight, Zap, Palette, Download, ChevronLeft, ChevronRight } from "lucide-react";

const tools = [
  { name: "OCR Scanner", icon: ScanLine, color: "from-emerald-500 to-green-600", decor: "📄" },
  { name: "Stock Valuator", icon: Calculator, color: "from-teal-500 to-emerald-600", decor: "📊" },
  { name: "AI Chat", icon: MessageSquareText, color: "from-green-500 to-teal-600", decor: "🤖" },
  { name: "Import/Export", icon: ArrowLeftRight, color: "from-emerald-600 to-teal-700", decor: "📥" },
  { name: "Reports", icon: FileBarChart, color: "from-teal-600 to-green-700", decor: "📑" },
  { name: "GST Reports", icon: Receipt, color: "from-green-600 to-emerald-700", decor: "🧾" },
  { name: "Support", icon: HeadphonesIcon, color: "from-emerald-700 to-teal-800", decor: "🎧" },
];

const features = [
  { icon: Zap, title: "Lightning-Fast", desc: "Process data in seconds with optimized tools" },
  { icon: Palette, title: "Easy Customization", desc: "Adapt tools to fit your workflow" },
  { icon: Download, title: "Export Anywhere", desc: "Download reports in multiple formats" },
];

export default function Tools() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(tools.length / 2));
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate cards
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % tools.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + tools.length) % tools.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % tools.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleCardClick = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-emerald-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-teal-200/40 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e293b] font-bold leading-tight mb-4">
            Powerful{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Tools</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>{" "}
            to Make Your{" "}
            <span className="relative inline-block">
              <span>Work Easy</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q25 2 50 6 T100 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
        </h2>

          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8 font-light">
            Save time with smart automation tools,
            <br />
            no complex setup needed.
          </p>
          
          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2B26] text-white font-medium hover:bg-[#0F3D35] transition-all duration-300 shadow-lg shadow-emerald-900/20">
            Explore Tools
            <ArrowRight size={18} />
          </button>
        </div>

        {/* 3D Rotating Cards Gallery - Full Width */}
        <div 
          className="relative h-[300px] md:h-[360px] mb-16" 
          style={{ perspective: '1500px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-emerald-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-green-50 to-transparent z-10 pointer-events-none" />
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 flex items-center justify-center text-emerald-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 flex items-center justify-center text-emerald-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Cards Container - Full Width */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {tools.map((tool, i) => {
              // Calculate position relative to active index
              let offset = i - activeIndex;
              
              // Handle wrapping for circular rotation
              if (offset > tools.length / 2) offset -= tools.length;
              if (offset < -tools.length / 2) offset += tools.length;
              
              const rotateY = offset * 15;
              const translateX = offset * 240;
              const translateZ = -Math.abs(offset) * 50;
              const opacity = Math.abs(offset) > 3 ? 0 : 1 - Math.abs(offset) * 0.18;
              const scale = Math.abs(offset) > 3 ? 0.6 : 1 - Math.abs(offset) * 0.08;
              const zIndex = 10 - Math.abs(offset);
              const blur = Math.abs(offset) > 1 ? Math.abs(offset) * 0.5 : 0;
              
              return (
                <div
                  key={i}
                  onClick={() => handleCardClick(i)}
                  className="absolute w-[140px] sm:w-[160px] md:w-[200px] h-[180px] sm:h-[220px] md:h-[280px] rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    filter: `blur(${blur}px)`,
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color}`} />
                  
                  {/* Pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: '16px 16px'
                    }}
                  />

                  {/* Single Corner Decoration */}
                  <div 
                    className="absolute top-3 right-3 text-xl md:text-2xl opacity-70 animate-bounce"
                    style={{ animationDuration: '3s' }}
                  >
                    {tool.decor}
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Active glow */}
                  {i === activeIndex && (
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent animate-pulse" />
                  )}
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6">
                    <div 
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 md:mb-5 shadow-lg transition-transform duration-500"
                      style={{
                        transform: i === activeIndex ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      <tool.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-center text-sm md:text-base tracking-wide drop-shadow-md" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      {tool.name}
                    </h3>
                  </div>
                  
                  {/* Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl shadow-2xl transition-all duration-500"
                    style={{
                      border: i === activeIndex ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(255,255,255,0.25)',
                      boxShadow: i === activeIndex ? '0 25px 50px -12px rgba(0,0,0,0.25), inset 0 0 30px rgba(255,255,255,0.1)' : '0 10px 30px -10px rgba(0,0,0,0.2)',
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {tools.map((_, i) => (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all duration-500 ease-out disabled:cursor-not-allowed ${
                  i === activeIndex 
                    ? 'w-8 bg-emerald-600' 
                    : 'w-2 bg-emerald-300 hover:bg-emerald-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-emerald-200">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="text-[#0B2B26] font-semibold tracking-wide">{feature.title}</h4>
              </div>
              <p className="text-slate-500 text-sm font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
