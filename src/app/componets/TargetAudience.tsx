"use client";

import { useState, useRef, useEffect } from "react";
import { Factory, Store, Truck, Utensils, Cpu, MoreHorizontal, Sparkles, ArrowRight } from "lucide-react";

const audiences = [
  { icon: Factory, label: "Manufacturing Unit Manager" },
  { icon: Truck, label: "Wholesale Trader" },
  { icon: Store, label: "Retail Store Chain" },
  { icon: Utensils, label: "Food Processing Unit" },
  { icon: Cpu, label: "Electronics Distributor" },
  { icon: MoreHorizontal, label: "And more..." },
];

export default function TargetAudience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Generate grid dots
  const gridSize = 40;
  const cols = 40;
  const rows = 20;

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-br from-[#0B2B26] via-[#0F3D35] to-[#071a17] py-16 overflow-hidden"
    >
      {/* Interactive Dot Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full">
          {Array.from({ length: rows }).map((_, row) =>
            Array.from({ length: cols }).map((_, col) => {
              const x = col * gridSize + 20;
              const y = row * gridSize + 20;
              const distance = Math.sqrt(
                Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2)
              );
              const maxDistance = 150;
              const intensity = Math.max(0, 1 - distance / maxDistance);
              const opacity = 0.1 + intensity * 0.8;
              const scale = 1 + intensity * 2;
              const color = intensity > 0.3 
                ? `rgba(16, 185, 129, ${opacity})` 
                : `rgba(255, 255, 255, ${0.1 + intensity * 0.2})`;

              return (
                <circle
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  r={1.5 * scale}
                  fill={color}
                  style={{
                    transition: 'all 0.15s ease-out',
                  }}
                />
              );
            })
          )}
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-teal-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Mouse Glow Effect */}
      <div 
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
          opacity: mousePos.x > 0 ? 1 : 0,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left - Stacked Cards Visual */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[280px] h-[320px]">
              {/* Background cards */}
              <div className="absolute top-4 left-4 w-full h-full rounded-2xl bg-emerald-900/50 rotate-6 border border-emerald-700/30" />
              <div className="absolute top-2 left-2 w-full h-full rounded-2xl bg-emerald-800/50 rotate-3 border border-emerald-600/30" />
              
              {/* Main card */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 shadow-2xl shadow-emerald-500/20">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute bottom-8 left-4 w-12 h-12 rounded-full bg-white/10" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Built For SMEs</h3>
                    <p className="text-white/80 text-sm">From small businesses to large enterprises</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            {/* Header */}
            <div className="mb-8">
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
              <h2 className="text-3xl md:text-4xl text-white mt-2 font-bold leading-tight">
                Built For{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">All</span>
                  <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                    <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Audience Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {audiences.map((audience, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <audience.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{audience.label}</span>
                </div>
              ))}
            </div>

            {/* Supporting Line */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1 h-full min-h-[40px] rounded-full bg-gradient-to-b from-emerald-400 to-teal-400" />
              <p className="text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Orenx adapts to your workflow</span> — no matter your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
