"use client";

import { Shield, Cloud, Smartphone, Users, Building2, CheckCircle2 } from "lucide-react";

const features = [
  { icon: <Shield size={20} />, label: "Bank-level Security", desc: "256-bit encryption" },
  { icon: <Cloud size={20} />, label: "Cloud Sync", desc: "Real-time updates" },
  { icon: <Smartphone size={20} />, label: "Multi-Device", desc: "Mobile & Desktop" },
  { icon: <Users size={20} />, label: "Team Access", desc: "Unlimited users" },
];

const highlights = [
  "Instant setup in 5 minutes",
  "No credit card required",
  "Free migration support",
  "24/7 customer support",
];

export default function AboutApp() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2B26] via-[#0F3D35] to-[#134035]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="aboutGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-semibold text-sm">About ORENX</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Manage your business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                from anywhere
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Access your inventory, orders, and reports — anytime, anywhere. 
              ORENX keeps your business running smoothly, whether you&apos;re at the 
              office or on the go.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
              Get Started Free
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Right: Creative Visual */}
          <div className="relative">
            {/* Central Device Frame */}
            <div className="relative mx-auto w-full max-w-md">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-3xl blur-2xl scale-110" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <StatCard value="99.9%" label="Uptime" color="emerald" />
                  <StatCard value="256-bit" label="Encryption" color="teal" />
                  <StatCard value="24/7" label="Backup" color="cyan" />
                  <StatCard value="<5min" label="Setup" color="blue" />
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

                {/* Features */}
                <div className="space-y-4">
                  {features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{feature.label}</p>
                        <p className="text-slate-400 text-xs">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg">
                <span className="text-white font-bold text-sm">✓ Trusted by 10K+</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-700 font-semibold text-sm">Built for SMEs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  const colorClasses: Record<string, string> = {
    emerald: "from-emerald-500 to-emerald-400",
    teal: "from-teal-500 to-teal-400",
    cyan: "from-cyan-500 to-cyan-400",
    blue: "from-blue-500 to-blue-400",
  };
  
  return (
    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
      <p className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorClasses[color]}`}>
        {value}
      </p>
      <p className="text-xs text-slate-400 mt-1">{label}</p>
    </div>
  );
}
