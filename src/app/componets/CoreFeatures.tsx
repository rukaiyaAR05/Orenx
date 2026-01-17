"use client";

import { useState } from "react";
import { Brain, Activity, AlertTriangle, BarChart3, Zap, Shield, TrendingUp, Users, Settings, X } from "lucide-react";

const features = [
  {
    icon: <Brain size={32} />,
    title: "AI Assistance",
    short: "Smart suggestions",
    detail: "ORENX uses AI to analyze your sales trends and inventory movement to suggest optimal reorder points, predict future demand, and reduce overstocking.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
  {
    icon: <Activity size={32} />,
    title: "Real-Time Tracking",
    short: "Live inventory",
    detail: "Track inventory across warehouses and stores in real-time with automatic updates for sales, purchases, transfers, and adjustments.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Sales Analytics",
    short: "Growth insights",
    detail: "Monitor sales performance with detailed analytics, identify trends, and make data-driven decisions to grow your business.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
  {
    icon: <AlertTriangle size={32} />,
    title: "Low Stock Alerts",
    short: "Never run out",
    detail: "Get instant notifications when stock reaches minimum levels so you can reorder in time and avoid lost sales.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Reports & Insights",
    short: "Smart reports",
    detail: "Generate detailed stock, sales, profit, and performance reports with AI-powered insights to help you optimize operations.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500",
    isCenter: true,
  },
  {
    icon: <Users size={32} />,
    title: "Team Access",
    short: "Multi-user",
    detail: "Add team members with custom roles and permissions. Control who can view, edit, or manage different aspects of your inventory.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
  {
    icon: <Shield size={32} />,
    title: "GST Compliant",
    short: "100% compliant",
    detail: "Stay fully compliant with GST regulations. Auto-generate GST invoices, file returns, and maintain proper documentation.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
  {
    icon: <Zap size={32} />,
    title: "Fast Performance",
    short: "Lightning quick",
    detail: "Experience blazing fast performance even with thousands of products. Our optimized system ensures smooth operations.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
  {
    icon: <Settings size={32} />,
    title: "Easy Setup",
    short: "Quick start",
    detail: "Get started in minutes with our easy setup wizard. Import your existing data and customize settings to match your workflow.",
    color: "from-[#0F2A1D] to-[#1a4030]",
    bgColor: "bg-[#0F2A1D]",
  },
];

export default function CoreFeatures() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-[#f0fdf4] to-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-teal-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e293b] font-bold leading-tight">
            Everything fits{" "}
            <span className="relative inline-block">
              <span className="relative z-10">together</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Click any piece to explore our powerful features
          </p>
        </div>

        {/* Puzzle Grid - 3x3 */}
        <div className="relative max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-1">
            {features.map((feature, index) => (
              <PuzzlePiece
                key={index}
                feature={feature}
                index={index}
                isOpen={openCard === index}
                onClick={() => setOpenCard(openCard === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Detail Modal */}
        {openCard !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpenCard(null)}>
            <div 
              className={`relative max-w-md w-full bg-gradient-to-br ${features[openCard].color} rounded-3xl p-8 shadow-2xl transform animate-[scale-in_0.3s_ease-out]`}
              onClick={(e) => e.stopPropagation()}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scale-in {
                  from { opacity: 0; transform: scale(0.9); }
                  to { opacity: 1; transform: scale(1); }
                }
              `}} />
              
              <button 
                onClick={() => setOpenCard(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                {features[openCard].icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {features[openCard].title}
              </h3>

              <p className="text-white/90 leading-relaxed">
                {features[openCard].detail}
              </p>

              <button className="mt-6 w-full bg-white text-[#0F2A1D] py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-[#0F2A1D] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-emerald-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
            Start Free Trial
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function PuzzlePiece({ 
  feature, 
  index, 
  isOpen,
  onClick 
}: { 
  feature: typeof features[0] & { isCenter?: boolean };
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  // Determine position in 3x3 grid
  const row = Math.floor(index / 3);
  const col = index % 3;
  
  const isTop = row === 0;
  const isBottom = row === 2;
  const isLeft = col === 0;
  const isRight = col === 2;
  const isCenter = feature.isCenter || false;

  return (
    <div 
      className="relative aspect-square cursor-pointer group"
      onClick={onClick}
    >
      {/* Main piece with SVG puzzle shape */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-lg"
        style={{ filter: isOpen ? 'brightness(1.1)' : undefined }}
      >
        <defs>
          <clipPath id={`puzzle-${index}`}>
            <path d={getPuzzlePath(isTop, isRight, isBottom, isLeft, index)} />
          </clipPath>
        </defs>
        
        {/* Background */}
        <rect 
          x="0" y="0" 
          width="100" height="100" 
          className={feature.bgColor}
          clipPath={`url(#puzzle-${index})`}
        />
        
        {/* Gradient overlay */}
        <rect 
          x="0" y="0" 
          width="100" height="100" 
          fill="url(#grad)" 
          opacity="0.3"
          clipPath={`url(#puzzle-${index})`}
        />
        
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white transition-transform duration-300 group-hover:scale-105">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg ${isCenter ? 'bg-white/20 shadow-white/20' : 'bg-emerald-500 shadow-emerald-500/30'}`}>
          {feature.icon}
        </div>
        <h3 className="text-xs md:text-sm font-bold text-center leading-tight">
          {feature.title}
        </h3>
        <p className={`text-[10px] md:text-xs text-center mt-1 hidden md:block ${isCenter ? 'text-white/80' : 'text-emerald-300'}`}>
          {feature.short}
        </p>
      </div>

      {/* Hover glow */}
      <div className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`} />
    </div>
  );
}

function getPuzzlePath(isTop: boolean, isRight: boolean, isBottom: boolean, isLeft: boolean, index: number): string {
  const tabSize = 12;
  const tabOffset = 50;
  
  const topTab = !isTop && (index % 2 === 0);
  const rightTab = !isRight && (Math.floor(index / 3) % 2 === 0);
  const bottomTab = !isBottom && (index % 2 === 1);
  const leftTab = !isLeft && (Math.floor(index / 3) % 2 === 1);

  let path = '';
  
  path += 'M 0 0 ';
  
  // Top edge
  if (isTop) {
    path += 'L 100 0 ';
  } else if (topTab) {
    path += `L ${tabOffset - tabSize} 0 `;
    path += `C ${tabOffset - tabSize} ${-tabSize}, ${tabOffset + tabSize} ${-tabSize}, ${tabOffset + tabSize} 0 `;
    path += 'L 100 0 ';
  } else {
    path += `L ${tabOffset - tabSize} 0 `;
    path += `C ${tabOffset - tabSize} ${tabSize}, ${tabOffset + tabSize} ${tabSize}, ${tabOffset + tabSize} 0 `;
    path += 'L 100 0 ';
  }
  
  // Right edge
  if (isRight) {
    path += 'L 100 100 ';
  } else if (rightTab) {
    path += `L 100 ${tabOffset - tabSize} `;
    path += `C ${100 + tabSize} ${tabOffset - tabSize}, ${100 + tabSize} ${tabOffset + tabSize}, 100 ${tabOffset + tabSize} `;
    path += 'L 100 100 ';
  } else {
    path += `L 100 ${tabOffset - tabSize} `;
    path += `C ${100 - tabSize} ${tabOffset - tabSize}, ${100 - tabSize} ${tabOffset + tabSize}, 100 ${tabOffset + tabSize} `;
    path += 'L 100 100 ';
  }
  
  // Bottom edge
  if (isBottom) {
    path += 'L 0 100 ';
  } else if (bottomTab) {
    path += `L ${tabOffset + tabSize} 100 `;
    path += `C ${tabOffset + tabSize} ${100 + tabSize}, ${tabOffset - tabSize} ${100 + tabSize}, ${tabOffset - tabSize} 100 `;
    path += 'L 0 100 ';
  } else {
    path += `L ${tabOffset + tabSize} 100 `;
    path += `C ${tabOffset + tabSize} ${100 - tabSize}, ${tabOffset - tabSize} ${100 - tabSize}, ${tabOffset - tabSize} 100 `;
    path += 'L 0 100 ';
  }
  
  // Left edge
  if (isLeft) {
    path += 'L 0 0 ';
  } else if (leftTab) {
    path += `L 0 ${tabOffset + tabSize} `;
    path += `C ${-tabSize} ${tabOffset + tabSize}, ${-tabSize} ${tabOffset - tabSize}, 0 ${tabOffset - tabSize} `;
    path += 'L 0 0 ';
  } else {
    path += `L 0 ${tabOffset + tabSize} `;
    path += `C ${tabSize} ${tabOffset + tabSize}, ${tabSize} ${tabOffset - tabSize}, 0 ${tabOffset - tabSize} `;
    path += 'L 0 0 ';
  }
  
  path += 'Z';
  
  return path;
}
