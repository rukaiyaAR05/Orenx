"use client";

import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "₹999",
    period: "/month",
    desc: "Perfect for small businesses starting their inventory journey.",
    features: [
      "Up to 1 warehouse",
      "Basic inventory reports",
      "Email support",
      "Mobile app access",
      "100 products limit",
    ],
    color: "from-slate-400 to-slate-500",
    bgGlow: "bg-slate-400/20",
  },
  {
    name: "Growth",
    icon: Sparkles,
    price: "₹1,999",
    period: "/month",
    desc: "For growing teams that need advanced control and insights.",
    features: [
      "Up to 5 warehouses",
      "Advanced analytics",
      "Low stock alerts",
      "Priority support",
      "Unlimited products",
      "Team collaboration",
      "API access",
    ],
    highlight: true,
    color: "from-emerald-400 to-teal-400",
    bgGlow: "bg-emerald-400/30",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "",
    desc: "For large businesses with complex workflows and integrations.",
    features: [
      "Unlimited warehouses",
      "Custom integrations",
      "Dedicated manager",
      "SLA guarantee",
      "On-premise option",
      "Custom training",
    ],
    color: "from-amber-400 to-orange-500",
    bgGlow: "bg-amber-400/20",
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-gradient-to-b from-[#0B2B26] via-[#0F3D35] to-[#071a17] py-24 overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blur orbs */}
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[100px]" />
        
        {/* Smaller accent blurs */}
        <div className="absolute top-[60%] left-[5%] w-[200px] h-[200px] bg-teal-400/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[30%] right-[10%] w-[250px] h-[250px] bg-emerald-300/10 rounded-full blur-[90px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl" />
              <Image
                src="/logo1.png"
                alt="ORENX"
                width={60}
                height={60}
                className="relative rounded-full border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/20"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 font-semibold text-sm mb-6">
            <Sparkles size={16} className="text-emerald-400" />
            Pricing Plans
          </div>
          
          {/* Headline - Handwritten Style */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Simple,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">transparent</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>{" "}
            <span className="relative inline-block">
              <span>pricing</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q25 2 50 6 T100 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
          
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Start free, upgrade anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group rounded-3xl transition-all duration-500 ${
                plan.highlight 
                  ? "md:-mt-4 md:mb-4" 
                  : ""
              }`}
            >
              {/* Popular Badge with Blur */}
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-400/50 rounded-full blur-lg" />
                    <div className="relative px-5 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-[#0B2B26] text-sm font-bold rounded-full shadow-xl shadow-emerald-500/40 backdrop-blur-sm border border-emerald-300/30">
                      ⭐ Most Popular
                    </div>
                  </div>
                </div>
              )}

              {/* Card Glow */}
              <div className={`absolute -inset-2 ${plan.bgGlow} rounded-[32px] blur-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />
              <div className={`absolute -inset-1 ${plan.bgGlow} rounded-[28px] blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />

              {/* Card with Dark Glassmorphism */}
              <div className={`relative h-full rounded-3xl border p-8 transition-all duration-300 backdrop-blur-xl ${
                plan.highlight 
                  ? "bg-gradient-to-b from-emerald-400/20 to-teal-400/10 border-emerald-400/40 shadow-2xl shadow-emerald-500/20" 
                  : "bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/10"
              }`}>
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${plan.color} shadow-lg mb-6`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white">
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className={`mt-2 text-sm ${plan.highlight ? "text-emerald-200" : "text-slate-400"}`}>
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="mt-6 mb-8">
                  <span className="text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg ${plan.highlight ? "text-emerald-300" : "text-slate-500"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlight 
                          ? "bg-emerald-400/20" 
                          : "bg-white/10"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlight ? "text-emerald-400" : "text-emerald-400"}`} />
                      </div>
                      <span className={`text-sm ${plan.highlight ? "text-slate-200" : "text-slate-400"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-[#0B2B26] hover:shadow-lg hover:shadow-emerald-500/30"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-emerald-500/30"
                }`}>
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-400">No credit card required</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-sm text-slate-400">14-day free trial</span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-sm text-slate-400">Cancel anytime</span>
          </div>
          
          <p className="mt-6 text-sm text-slate-500">
            * All prices are exclusive of GST
          </p>
        </div>
      </div>
    </section>
  );
}
