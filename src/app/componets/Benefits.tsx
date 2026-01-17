"use client";

import Image from "next/image";
import { TrendingUp, Clock, Wallet, Eye, ShieldCheck, Layers, Sparkles } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Reduce Stockouts", color: "from-emerald-400 to-green-500" },
  { icon: Clock, title: "Save Time", color: "from-teal-400 to-cyan-500" },
  { icon: Wallet, title: "Cash Flow", color: "from-green-400 to-emerald-500" },
  { icon: Eye, title: "Visibility", color: "from-cyan-400 to-teal-500" },
  { icon: ShieldCheck, title: "Less Errors", color: "from-emerald-500 to-green-600" },
  { icon: Layers, title: "Scale Easy", color: "from-teal-500 to-emerald-600" },
];

export default function Benefits() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-emerald-50/50 to-slate-50 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-300/20 rounded-full blur-[60px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-green-300/20 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200 shadow-lg text-emerald-700 font-semibold text-sm mb-4">
            <Sparkles size={16} className="text-emerald-500" />
            Why Choose Us
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e293b] font-bold leading-tight mb-2">
            Top{" "}
            <span className="relative inline-block">
              <span className="relative z-10">6 Benefits</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>{" "}
            of{" "}
            <span className="relative inline-block">
              <span>ORENX</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q25 2 50 6 T100 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
        </h2>
          <p className="text-slate-500">Transform your business with powerful features</p>
        </div>

        {/* Circle Layout */}
        <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] mx-auto">
          
          {/* Outer Decorative Ring */}
          <div className="absolute inset-[-20px] md:inset-[-30px] rounded-full border border-emerald-200/40" />
          <div className="absolute inset-[-40px] md:inset-[-60px] rounded-full border border-dashed border-emerald-100/60" />
          
          {/* Animated Outer Ring */}
          <svg className="absolute inset-[-60px] md:inset-[-80px] w-[calc(100%+120px)] md:w-[calc(100%+160px)] h-[calc(100%+120px)] md:h-[calc(100%+160px)] animate-spin" style={{ animationDuration: '60s' }}>
            <circle cx="50%" cy="50%" r="48%" fill="none" stroke="url(#outerGrad)" strokeWidth="1" strokeDasharray="8 12" opacity="0.4" />
            <defs>
              <linearGradient id="outerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Glowing Ring */}
          <div className="absolute inset-[60px] md:inset-[100px] rounded-full bg-gradient-to-br from-emerald-100/50 to-teal-100/50 blur-sm" />
          
          {/* Main Circle Border */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-300/60 shadow-[0_0_60px_rgba(16,185,129,0.15)]" />
          
          {/* Rotating Gradient Ring */}
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '30s' }}>
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#14b8a6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#0d9488" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <circle cx="50%" cy="50%" r="49%" fill="none" stroke="url(#ringGrad)" strokeWidth="3" />
          </svg>

          {/* Connecting Lines with Gradient */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 480">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {benefits.map((_, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const x = 240 + 160 * Math.cos(angle);
              const y = 240 + 160 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="240"
                  y1="240"
                  x2={x}
                  y2={y}
                  stroke="url(#lineGrad)"
                  strokeWidth="2"
                />
              );
            })}
          </svg>

          {/* Small Floating Dots */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const radius = 38;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            );
          })}

          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36">
            {/* Glow behind logo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 blur-xl opacity-40 animate-pulse" />
            
            {/* Logo container */}
            <div className="relative w-full h-full rounded-full bg-white shadow-2xl shadow-emerald-300/50 border-4 border-white overflow-hidden ring-4 ring-emerald-400/30 ring-offset-2 ring-offset-transparent">
              <Image
                src="/logo1.png"
                alt="ORENX Logo"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Benefit Circles */}
          {benefits.map((benefit, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            
            return (
              <div
                key={i}
                className="absolute group cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${benefit.color} blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Card */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-xl border-2 border-white shadow-xl shadow-emerald-200/50 flex flex-col items-center justify-center group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-emerald-300/50 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-1 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon size={18} className="text-white md:w-5 md:h-5" />
                  </div>
                  {/* Title */}
                  <span className="text-[9px] md:text-[11px] font-bold text-[#0B2B26] text-center px-1 leading-tight">{benefit.title}</span>
                </div>

                {/* Pulse ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </div>
            );
          })}

          {/* Decorative corner elements */}
          {[0, 90, 180, 270].map((rotation, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 md:w-4 md:h-4"
              style={{
                left: `${50 + 52 * Math.cos((rotation - 45) * Math.PI / 180)}%`,
                top: `${50 + 52 * Math.sin((rotation - 45) * Math.PI / 180)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="w-full h-full rounded-sm bg-gradient-to-br from-emerald-400 to-teal-500 rotate-45 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center mt-16 text-slate-600 text-sm font-medium">
          All benefits working together for <span className="text-emerald-600 font-semibold">your success</span>
        </p>
      </div>
    </section>
  );
}
