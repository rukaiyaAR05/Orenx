"use client";

import Image from "next/image";
import { XCircle, AlertTriangle } from "lucide-react";

const leftPains = [
  { text: "Stock data spread across Excel, WhatsApp, and multiple systems" },
  { text: "Frequent stockouts or overstock leading to lost revenue" },
  { text: "No real-time visibility across warehouses and stores" },
];

const rightPains = [
  { text: "Manual errors in stock updates, billing, and reports" },
  { text: "Difficult to scale operations as the business grows" },
  { text: "Time wasted on repetitive manual tasks daily" },
];

export default function ProblemSection() {
  return (
    <section className="bg-gradient-to-br from-white via-red-50/30 to-orange-50/20 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-6">
            <AlertTriangle size={16} />
            The Problem
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#0B2B26] font-bold leading-tight">
            Inventory shouldn&apos;t be{" "}
            <span className="relative inline-block">
              <span>complicated</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 10" fill="none" preserveAspectRatio="none">
                <path d="M2 6 Q25 2 50 5 T98 3" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            <span>.</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Most businesses struggle with outdated tools and scattered data.
          </p>
        </div>

        {/* Three Column Layout - Problems | Image | Problems */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Pain Points */}
          <div className="space-y-4">
            {leftPains.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl bg-white/80 px-5 py-4 border border-red-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all lg:translate-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-md">
                  <XCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#0B2B26] font-medium">{pain.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Image */}
          <div className="flex items-center justify-center relative">
            {/* Decorative circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] border-2 border-dashed border-red-200/50 rounded-full" />
              <div className="absolute w-[280px] h-[280px] border border-orange-200/40 rounded-full" />
            </div>
            
            {/* Image Container */}
            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-white rounded-2xl p-3 shadow-xl border border-red-100">
                <Image
                  src="/I3.jpg"
                  alt="Business Problems Illustration"
                  width={400}
                  height={350}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating alert icons */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: "2s" }}>
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
                <XCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Right Pain Points */}
          <div className="space-y-4">
            {rightPains.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl bg-white/80 px-5 py-4 border border-red-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all lg:-translate-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-md">
                  <XCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#0B2B26] font-medium">{pain.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Text */}
        <div className="text-center mt-16">
          <p className="text-lg font-semibold text-emerald-600">
            ✨ ORENX removes this complexity with a simple, smart approach.
          </p>
        </div>
      </div>
    </section>
  );
}
