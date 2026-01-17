import { Layers, CheckCircle, Zap, Eye, TrendingUp, Sparkles } from "lucide-react";

const solutions = [
  { 
    icon: Layers, 
    title: "Unified Platform",
    desc: "One platform for inventory, sales, and purchases" 
  },
  { 
    icon: CheckCircle, 
    title: "GST Ready",
    desc: "Built for Indian businesses with GST-ready workflows" 
  },
  { 
    icon: Zap, 
    title: "Smart Automation",
    desc: "Reduce manual work with intelligent automation" 
  },
  { 
    icon: Eye, 
    title: "Real-time Visibility",
    desc: "Track everything across locations and teams" 
  },
  { 
    icon: TrendingUp, 
    title: "Scalable",
    desc: "Grows seamlessly as your business expands" 
  },
];

export default function SolutionSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1f1a] via-[#0F2A24] to-[#0a1f1a] py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Vector Art - Connected nodes */}
        <svg className="absolute top-20 left-[5%] w-32 h-32 text-emerald-500/20" viewBox="0 0 100 100" fill="none">
          <circle cx="20" cy="20" r="6" fill="currentColor"/>
          <circle cx="80" cy="20" r="6" fill="currentColor"/>
          <circle cx="50" cy="80" r="6" fill="currentColor"/>
          <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.5"/>
          <path d="M26 22 L44 48" stroke="currentColor" strokeWidth="2"/>
          <path d="M74 22 L56 48" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 58 L50 74" stroke="currentColor" strokeWidth="2"/>
        </svg>

        {/* Vector Art - Checkmark flow */}
        <svg className="absolute bottom-20 right-[5%] w-28 h-28 text-teal-500/20" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-sm mb-4">
            <Sparkles size={16} />
            The Solution
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Why{" "}
            <span className="relative inline-block">
              <span className="relative z-10">ORENX</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>{" "}
            — How We{" "}
            <span className="relative inline-block">
              <span>Solve It</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q25 2 50 6 T100 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
          
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            ORENX removes this complexity with a simple, smart way.
          </p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all">
                <solution.icon size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">{solution.title}</h3>
              <p className="text-sm text-slate-400">{solution.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all">
            Get Started Free
          </button>
          <p className="mt-4 text-sm text-slate-500">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
