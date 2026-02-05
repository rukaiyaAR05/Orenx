"use client";

import { useState, useEffect } from "react";
import {
  ScanLine,
  Calculator,
  MessageSquareText,
  ArrowLeftRight,
  FileBarChart,
  Receipt,
  HeadphonesIcon,
  ArrowRight,
  Zap,
  Palette,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tools = [
  { name: "OCR Scanner", icon: ScanLine, color: "from-emerald-500 to-green-600", decor: "📄", image: "/tools/A1.png" },
  { name: "Stock Valuator", icon: Calculator, color: "from-teal-500 to-emerald-600", decor: "📊", image: "/tools/D1.png" },
  { name: "AI Chat", icon: MessageSquareText, color: "from-green-500 to-teal-600", decor: "🤖", image: "/tools/N1.png" },
  { name: "Import/Export", icon: ArrowLeftRight, color: "from-emerald-600 to-teal-700", decor: "📥", image: "/tools/P1.png" },
  { name: "Reports", icon: FileBarChart, color: "from-teal-600 to-green-700", decor: "📑", image: "/tools/r1.png" },
  { name: "GST Reports", icon: Receipt, color: "from-green-600 to-emerald-700", decor: "🧾", image: "/tools/R2.png" },
  { name: "Support", icon: HeadphonesIcon, color: "from-emerald-700 to-teal-800", decor: "🎧", image: "/tools/R3.png" },
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
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Powerful <span className="text-emerald-600">Tools</span> to Make Your Work Easy
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8">
            Save time with smart automation tools, no complex setup needed.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2B26] text-white font-medium hover:bg-[#0F3D35] transition">
            Explore Tools <ArrowRight size={18} />
          </button>
        </div>

        {/* 3D Cards */}
        <div
          className="relative h-[320px]"
          style={{ perspective: "1500px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Arrows */}
          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow">
            <ChevronLeft />
          </button>
          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow">
            <ChevronRight />
          </button>

          <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
            {tools.map((tool, i) => {
              let offset = i - activeIndex;
              if (offset > tools.length / 2) offset -= tools.length;
              if (offset < -tools.length / 2) offset += tools.length;

              return (
                <div
                  key={i}
                  onClick={() => handleCardClick(i)}
                  className="absolute w-[200px] h-[280px] rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    transform: `translateX(${offset * 240}px) translateZ(${-Math.abs(offset) * 60}px) rotateY(${offset * 15}deg)`,
                    opacity: 1 - Math.abs(offset) * 0.2,
                    zIndex: 10 - Math.abs(offset),
                    transition: "all 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                >
                  {/* Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color}`} />

                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${tool.image})` }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur">
                      <tool.icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-semibold text-lg">{tool.name}</h3>
                  </div>

                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/30" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 border-t pt-8">
          {features.map((f, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <f.icon className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">{f.title}</h4>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
