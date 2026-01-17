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

        {/* Puzzle Grid - 3x3 */}
        <div className="relative max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-2">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  onClick={() => setOpenCard(openCard === index ? null : index)}
                  className={`
                    relative aspect-square cursor-pointer group
                    rounded-2xl overflow-hidden
                    transition-all duration-300 ease-out
                    shadow-lg hover:shadow-2xl
                    ${openCard === index ? 'scale-95 ring-4 ring-white' : 'hover:scale-105 hover:-translate-y-1'}
                  `}
                  style={{ backgroundColor: feature.color }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
                  
                  {/* Puzzle notches - visual only */}
                  {/* Top notch (if not first row) */}
                  {index >= 3 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full" 
                      style={{ backgroundColor: features[index - 3]?.color || feature.color }} 
                    />
                  )}
                  {/* Right notch (if not last column) */}
                  {index % 3 !== 2 && (
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                      style={{ backgroundColor: feature.color }}
                    />
                  )}
                  {/* Bottom hole (if not last row) */}
                  {index < 6 && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full bg-black/30" />
                  )}
                  {/* Left hole (if not first column) */}
                  {index % 3 !== 0 && (
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/30" />
                  )}

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 text-white z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent size={24} className="md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-center leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-center mt-1 text-white/70 hidden md:block">
                      {feature.short}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/10 group-hover:border-white/30 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Modal */}
        {openCard !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpenCard(null)}>
            <div 
              className="relative max-w-md w-full rounded-3xl p-8 shadow-2xl"
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
