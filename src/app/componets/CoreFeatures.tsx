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
    color: "#134E4A", // teal-900
  },
  {
    icon: Activity,
    title: "Real-Time Tracking",
    short: "Live inventory",
    detail: "Track inventory across warehouses and stores in real-time with automatic updates for sales, purchases, and transfers.",
    link: "#tools",
    color: "#0D9488", // teal-600
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    short: "Growth insights",
    detail: "Monitor sales performance with detailed analytics, identify trends, and make data-driven decisions.",
    link: "#about",
    color: "#115E59", // teal-800
  },
  {
    icon: AlertTriangle,
    title: "Low Stock Alerts",
    short: "Never run out",
    detail: "Get instant notifications when stock reaches minimum levels so you can reorder in time.",
    link: "#tools",
    color: "#14B8A6", // teal-500
  },
  {
    icon: BarChart3,
    title: "Reports",
    short: "Smart reports",
    detail: "Generate detailed stock, sales, profit, and performance reports with AI-powered insights.",
    link: "#demo",
    color: "#0F2A1D", // brand dark green
    isCenter: true,
  },
  {
    icon: Users,
    title: "Team Access",
    short: "Multi-user",
    detail: "Add team members with custom roles and permissions to manage different aspects of inventory.",
    link: "#pricing",
    color: "#059669", // emerald-600
  },
  {
    icon: Shield,
    title: "GST Compliant",
    short: "100% compliant",
    detail: "Stay fully compliant with GST regulations. Auto-generate GST invoices and file returns.",
    link: "#tools",
    color: "#047857", // emerald-700
  },
  {
    icon: Zap,
    title: "Fast Performance",
    short: "Lightning quick",
    detail: "Experience blazing fast performance even with thousands of products.",
    link: "#demo",
    color: "#10B981", // emerald-500
  },
  {
    icon: Settings,
    title: "Easy Setup",
    short: "Quick start",
    detail: "Get started in minutes with our easy setup wizard. Import your existing data easily.",
    link: "#faq",
    color: "#065F46", // emerald-800
  },
];

export default function CoreFeatures() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-[#f0fdf4] via-white to-[#f0fdf4] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-emerald-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-teal-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl" />
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
          <div className="grid grid-cols-3" style={{ gap: '0px' }}>
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
              className="relative max-w-md w-full rounded-3xl p-8 shadow-2xl transform animate-[scale-in_0.3s_ease-out]"
              style={{ backgroundColor: features[openCard].color }}
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
                className="mt-6 w-full bg-white text-[#0F2A1D] py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
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
            className="group bg-[#0F2A1D] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-emerald-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Free Trial
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

interface FeatureType {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  short: string;
  detail: string;
  link: string;
  color: string;
  isCenter?: boolean;
}

function PuzzlePiece({ 
  feature, 
  index, 
  isOpen,
  onClick 
}: { 
  feature: FeatureType;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  const IconComponent = feature.icon;
  const row = Math.floor(index / 3);
  const col = index % 3;
  
  // Determine which sides have tabs (outward) or slots (inward)
  const hasTopSlot = row > 0;
  const hasRightTab = col < 2;
  const hasBottomTab = row < 2;
  const hasLeftSlot = col > 0;

  const clipPathId = `puzzle-clip-${index}`;

  return (
    <div 
      className={`
        relative cursor-pointer group
        transition-all duration-300
        ${isOpen ? 'z-20 scale-105' : 'hover:z-10 hover:scale-102'}
      `}
      style={{ 
        width: '100%',
        aspectRatio: '1',
        margin: '-2px',
      }}
      onClick={onClick}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-lg group-hover:drop-shadow-xl transition-all"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <clipPath id={clipPathId}>
            <path d={generatePuzzlePath(hasTopSlot, hasRightTab, hasBottomTab, hasLeftSlot)} />
          </clipPath>
          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </linearGradient>
          <filter id={`shadow-${index}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Main puzzle piece */}
        <g clipPath={`url(#${clipPathId})`} filter={`url(#shadow-${index})`}>
          {/* Background color */}
          <rect x="-20" y="-20" width="140" height="140" fill={feature.color} />
          
          {/* Gradient overlay for 3D effect */}
          <rect x="-20" y="-20" width="140" height="140" fill={`url(#grad-${index})`} />
          
          {/* Inner border highlight */}
          <path 
            d={generatePuzzlePath(hasTopSlot, hasRightTab, hasBottomTab, hasLeftSlot)} 
            fill="none" 
            stroke="white" 
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </g>
        
        {/* Outline */}
        <path 
          d={generatePuzzlePath(hasTopSlot, hasRightTab, hasBottomTab, hasLeftSlot)} 
          fill="none" 
          stroke="rgba(0,0,0,0.2)" 
          strokeWidth="0.5"
        />
      </svg>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4 text-white pointer-events-none">
        <div className={`
          w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-1 md:mb-2 
          bg-white/20 shadow-lg backdrop-blur-sm
          group-hover:scale-110 transition-transform
        `}>
          <IconComponent size={20} className="md:w-6 md:h-6" />
        </div>
        <h3 className="text-[10px] md:text-sm font-bold text-center leading-tight drop-shadow-md">
          {feature.title}
        </h3>
        <p className="text-[8px] md:text-xs text-center mt-0.5 text-white/70 hidden md:block">
          {feature.short}
        </p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" 
        style={{ clipPath: `url(#${clipPathId})` }}
      />
    </div>
  );
}

function generatePuzzlePath(hasTopSlot: boolean, hasRightTab: boolean, hasBottomTab: boolean, hasLeftSlot: boolean): string {
  const size = 100;
  const tabSize = 15;
  const tabWidth = 20;
  
  let path = '';
  
  // Start at top-left
  path += `M 0 0 `;
  
  // Top edge
  if (hasTopSlot) {
    path += `L ${(size - tabWidth) / 2} 0 `;
    path += `C ${(size - tabWidth) / 2} ${tabSize}, ${(size + tabWidth) / 2} ${tabSize}, ${(size + tabWidth) / 2} 0 `;
    path += `L ${size} 0 `;
  } else {
    path += `L ${size} 0 `;
  }
  
  // Right edge
  if (hasRightTab) {
    path += `L ${size} ${(size - tabWidth) / 2} `;
    path += `C ${size + tabSize} ${(size - tabWidth) / 2}, ${size + tabSize} ${(size + tabWidth) / 2}, ${size} ${(size + tabWidth) / 2} `;
    path += `L ${size} ${size} `;
  } else {
    path += `L ${size} ${size} `;
  }
  
  // Bottom edge
  if (hasBottomTab) {
    path += `L ${(size + tabWidth) / 2} ${size} `;
    path += `C ${(size + tabWidth) / 2} ${size + tabSize}, ${(size - tabWidth) / 2} ${size + tabSize}, ${(size - tabWidth) / 2} ${size} `;
    path += `L 0 ${size} `;
  } else {
    path += `L 0 ${size} `;
  }
  
  // Left edge
  if (hasLeftSlot) {
    path += `L 0 ${(size + tabWidth) / 2} `;
    path += `C ${tabSize} ${(size + tabWidth) / 2}, ${tabSize} ${(size - tabWidth) / 2}, 0 ${(size - tabWidth) / 2} `;
    path += `L 0 0 `;
  } else {
    path += `L 0 0 `;
  }
  
  path += 'Z';
  
  return path;
}
