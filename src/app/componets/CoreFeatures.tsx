"use client";

import { useState } from "react";
import { Brain, Activity, AlertTriangle, BarChart3, Zap, Shield, TrendingUp, Users, Settings, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "AI Assistance",
    short: "Smart suggestions",
    detail: "ORENX uses AI to analyze your sales trends and inventory movement to suggest optimal reorder points and predict future demand.",
    link: "#demo",
    color: "#134E4A",
  },
  {
    icon: Activity,
    title: "Real-Time Tracking",
    short: "Live inventory",
    detail: "Track inventory across warehouses and stores in real-time with automatic updates for sales, purchases, and transfers.",
    link: "#tools",
    color: "#0D9488",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    short: "Growth insights",
    detail: "Monitor sales performance with detailed analytics, identify trends, and make data-driven decisions.",
    link: "#about",
    color: "#115E59",
  },
  {
    icon: AlertTriangle,
    title: "Low Stock Alerts",
    short: "Never run out",
    detail: "Get instant notifications when stock reaches minimum levels so you can reorder in time.",
    link: "#tools",
    color: "#14B8A6",
  },
  {
    icon: BarChart3,
    title: "Reports",
    short: "Smart reports",
    detail: "Generate detailed stock, sales, profit, and performance reports with AI-powered insights.",
    link: "#demo",
    color: "#0F2A1D",
    isCenter: true,
  },
  {
    icon: Users,
    title: "Team Access",
    short: "Multi-user",
    detail: "Add team members with custom roles and permissions to manage different aspects of inventory.",
    link: "#pricing",
    color: "#059669",
  },
  {
    icon: Shield,
    title: "GST Compliant",
    short: "100% compliant",
    detail: "Stay fully compliant with GST regulations. Auto-generate GST invoices and file returns.",
    link: "#tools",
    color: "#047857",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    short: "Lightning quick",
    detail: "Experience blazing fast performance even with thousands of products.",
    link: "#demo",
    color: "#10B981",
  },
  {
    icon: Settings,
    title: "Easy Setup",
    short: "Quick start",
    detail: "Get started in minutes with our easy setup wizard. Import your existing data easily.",
    link: "#faq",
    color: "#065F46",
  },
];

// Generate puzzle clip path based on position
function getPuzzleClipPath(row: number, col: number): string {
  const hasTop = row > 0;
  const hasRight = col < 2;
  const hasBottom = row < 2;
  const hasLeft = col > 0;
  
  // Base percentages
  const tabSize = 12; // percentage
  const tabPos = 50; // center position
  
  let path = '';
  
  // Start top-left, go clockwise
  // Top edge
  if (hasTop) {
    // Has indent on top
    path += `0% 0%, ${tabPos - tabSize}% 0%, ${tabPos - tabSize/2}% ${tabSize}%, ${tabPos + tabSize/2}% ${tabSize}%, ${tabPos + tabSize}% 0%, 100% 0%`;
  } else {
    path += `0% 0%, 100% 0%`;
  }
  
  // Right edge
  if (hasRight) {
    // Has tab on right
    path += `, 100% ${tabPos - tabSize}%, ${100 + tabSize}% ${tabPos - tabSize/2}%, ${100 + tabSize}% ${tabPos + tabSize/2}%, 100% ${tabPos + tabSize}%, 100% 100%`;
  } else {
    path += `, 100% 100%`;
  }
  
  // Bottom edge
  if (hasBottom) {
    // Has tab on bottom
    path += `, ${tabPos + tabSize}% 100%, ${tabPos + tabSize/2}% ${100 + tabSize}%, ${tabPos - tabSize/2}% ${100 + tabSize}%, ${tabPos - tabSize}% 100%, 0% 100%`;
  } else {
    path += `, 0% 100%`;
  }
  
  // Left edge
  if (hasLeft) {
    // Has indent on left
    path += `, 0% ${tabPos + tabSize}%, ${-tabSize}% ${tabPos + tabSize/2}%, ${-tabSize}% ${tabPos - tabSize/2}%, 0% ${tabPos - tabSize}%, 0% 0%`;
  } else {
    path += `, 0% 0%`;
  }
  
  return `polygon(${path})`;
}

export default function CoreFeatures() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-[#f0fdf4] via-white to-[#f0fdf4] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-emerald-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-teal-200/50 rounded-full blur-3xl" />
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

        {/* Puzzle Grid - 3x3 with SVG */}
        <div className="relative max-w-2xl mx-auto">
          <svg viewBox="0 0 330 330" className="w-full h-auto">
            <defs>
              {/* Define puzzle piece paths */}
              {features.map((_, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                return (
                  <clipPath key={`clip-${index}`} id={`puzzleClip${index}`}>
                    <path d={generatePuzzleSVGPath(row, col)} />
                  </clipPath>
                );
              })}
              
              {/* Gradient for 3D effect */}
              <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                <stop offset="50%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="black" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {features.map((feature, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;
              const x = col * 110;
              const y = row * 110;
              const IconComponent = feature.icon;

              return (
                <g 
                  key={index} 
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  style={{ transformOrigin: `${x + 55}px ${y + 55}px` }}
                  onClick={() => setOpenCard(openCard === index ? null : index)}
                >
                  {/* Main piece */}
                  <g clipPath={`url(#puzzleClip${index})`} transform={`translate(${x}, ${y})`}>
                    {/* Background */}
                    <rect x="-20" y="-20" width="150" height="150" fill={feature.color} />
                    {/* Shine overlay */}
                    <rect x="-20" y="-20" width="150" height="150" fill="url(#shineGrad)" />
                  </g>
                  
                  {/* Border */}
                  <path 
                    d={generatePuzzleSVGPath(row, col)} 
                    transform={`translate(${x}, ${y})`}
                    fill="none" 
                    stroke="rgba(255,255,255,0.3)" 
                    strokeWidth="2"
                  />
                  
                  {/* Icon and text */}
                  <foreignObject x={x + 15} y={y + 15} width="80" height="80">
                    <div className="w-full h-full flex flex-col items-center justify-center text-white">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/20 flex items-center justify-center mb-1">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-[10px] md:text-xs font-bold text-center leading-tight px-1">
                        {feature.title}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail Modal */}
        {openCard !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpenCard(null)}>
            <div 
              className="relative max-w-md w-full rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-200"
              style={{ backgroundColor: features[openCard].color }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setOpenCard(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                {(() => {
                  const IconComponent = features[openCard].icon;
                  return <IconComponent size={32} />;
                })()}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {features[openCard].title}
              </h3>

              <p className="text-white/90 leading-relaxed">
                {features[openCard].detail}
              </p>

              <Link 
                href={features[openCard].link}
                onClick={() => setOpenCard(null)}
                className="mt-6 w-full bg-[#4ADE80] text-white py-3 rounded-xl font-semibold hover:bg-[#22C55E] transition-colors flex items-center justify-center gap-2 group"
              >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="#pricing"
            className="group bg-[#4ADE80] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Free Trial
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Generate SVG path for puzzle piece
function generatePuzzleSVGPath(row: number, col: number): string {
  const size = 110;
  const tabSize = 15;
  const tabWidth = 22;
  const tabCenter = size / 2;
  
  const hasTopSlot = row > 0;
  const hasRightTab = col < 2;
  const hasBottomTab = row < 2;
  const hasLeftSlot = col > 0;
  
  let d = '';
  
  // Start at top-left
  d += `M 0 0 `;
  
  // Top edge
  if (hasTopSlot) {
    d += `L ${tabCenter - tabWidth/2} 0 `;
    d += `Q ${tabCenter - tabWidth/2} ${tabSize}, ${tabCenter} ${tabSize} `;
    d += `Q ${tabCenter + tabWidth/2} ${tabSize}, ${tabCenter + tabWidth/2} 0 `;
  }
  d += `L ${size} 0 `;
  
  // Right edge
  if (hasRightTab) {
    d += `L ${size} ${tabCenter - tabWidth/2} `;
    d += `Q ${size + tabSize} ${tabCenter - tabWidth/2}, ${size + tabSize} ${tabCenter} `;
    d += `Q ${size + tabSize} ${tabCenter + tabWidth/2}, ${size} ${tabCenter + tabWidth/2} `;
  }
  d += `L ${size} ${size} `;
  
  // Bottom edge
  if (hasBottomTab) {
    d += `L ${tabCenter + tabWidth/2} ${size} `;
    d += `Q ${tabCenter + tabWidth/2} ${size + tabSize}, ${tabCenter} ${size + tabSize} `;
    d += `Q ${tabCenter - tabWidth/2} ${size + tabSize}, ${tabCenter - tabWidth/2} ${size} `;
  }
  d += `L 0 ${size} `;
  
  // Left edge
  if (hasLeftSlot) {
    d += `L 0 ${tabCenter + tabWidth/2} `;
    d += `Q ${tabSize} ${tabCenter + tabWidth/2}, ${tabSize} ${tabCenter} `;
    d += `Q ${tabSize} ${tabCenter - tabWidth/2}, 0 ${tabCenter - tabWidth/2} `;
  }
  d += `L 0 0 Z`;
  
  return d;
}
