import { PlayCircle, Sparkles } from "lucide-react";

export default function ProductDemo() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[60%] right-[15%] w-40 h-40 bg-teal-200/40 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
        <div className="absolute bottom-[20%] left-[20%] w-24 h-24 bg-green-200/40 rounded-full blur-2xl animate-pulse [animation-delay:2s]" />
        
        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 right-[5%] w-64 h-64 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-bounce [animation-duration:3s]" />
        <div className="absolute bottom-1/4 left-[5%] w-56 h-56 bg-gradient-to-br from-teal-300/20 to-green-300/20 rounded-full blur-3xl animate-bounce [animation-duration:4s] [animation-delay:1.5s]" />
        
        {/* Rotating Earth - Left */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[3%] w-48 h-48 opacity-30 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin [animation-duration:20s]">
            <defs>
              <linearGradient id="earthGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981"/>
                <stop offset="50%" stopColor="#14b8a6"/>
                <stop offset="100%" stopColor="#059669"/>
              </linearGradient>
              <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399"/>
                <stop offset="100%" stopColor="#10b981"/>
              </linearGradient>
            </defs>
            {/* Ocean */}
            <circle cx="50" cy="50" r="45" fill="url(#earthGrad1)" opacity="0.6"/>
            {/* Continents */}
            <ellipse cx="35" cy="35" rx="12" ry="8" fill="url(#landGrad)" opacity="0.8"/>
            <ellipse cx="60" cy="45" rx="15" ry="10" fill="url(#landGrad)" opacity="0.8"/>
            <ellipse cx="45" cy="65" rx="10" ry="6" fill="url(#landGrad)" opacity="0.8"/>
            <ellipse cx="70" cy="60" rx="8" ry="12" fill="url(#landGrad)" opacity="0.8"/>
            <ellipse cx="25" cy="55" rx="6" ry="8" fill="url(#landGrad)" opacity="0.8"/>
            {/* Atmosphere glow */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.3"/>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.2"/>
          </svg>
        </div>

        {/* Rotating Earth - Right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[3%] w-40 h-40 opacity-25 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin [animation-duration:25s] [animation-direction:reverse]">
            <circle cx="50" cy="50" r="45" fill="url(#earthGrad1)" opacity="0.6"/>
            <ellipse cx="40" cy="30" rx="10" ry="7" fill="url(#landGrad)" opacity="0.8"/>
            <ellipse cx="65" cy="50" rx="12" ry="8" fill="url(#landGrad)" opacity="0.8"/>
            <ellipse cx="35" cy="60" rx="8" ry="10" fill="url(#landGrad)" opacity="0.8"/>
            <ellipse cx="55" cy="70" rx="6" ry="5" fill="url(#landGrad)" opacity="0.8"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.3"/>
          </svg>
        </div>

        {/* Small orbiting dots around earth */}
        <div className="absolute top-[45%] left-[8%] w-3 h-3 bg-emerald-400 rounded-full animate-ping [animation-duration:2s] hidden lg:block" />
        <div className="absolute top-[55%] right-[8%] w-2 h-2 bg-teal-400 rounded-full animate-ping [animation-duration:3s] hidden lg:block" />
        
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #059669 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-6">
          <Sparkles size={16} />
          Product Demo
        </div>

        {/* Headline - Handwritten Style */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e293b] font-bold leading-tight">
          See{" "}
          <span className="relative inline-block">
            <span className="relative z-10">ORENX</span>
            <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
              <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
            </svg>
          </span>{" "}
          in{" "}
          <span className="relative inline-block">
            <span>action</span>
            <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
              <path d="M0 6 Q25 2 50 6 T100 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>.
        </h2>

        {/* Subheadline */}
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          A quick <span className="text-emerald-600 font-semibold">60-second</span> walkthrough of how ORENX simplifies inventory and operations.
        </p>

        {/* Video Container */}
        <div className="mt-12 relative mx-auto max-w-4xl">
          {/* Glow behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 blur-2xl scale-95 rounded-3xl" />
          
          {/* Video Frame */}
          <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 p-[3px] rounded-3xl shadow-2xl shadow-emerald-200">
            <div className="relative aspect-video rounded-[21px] bg-gradient-to-br from-emerald-900 to-teal-900 overflow-hidden">
              {/* Animated grid pattern inside */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-emerald-700 font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <PlayCircle className="h-7 w-7 group-hover:text-emerald-600 transition-colors" />
                  <span className="text-lg">Play Demo</span>
          </button>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                1:00
              </div>

              {/* Floating elements inside video */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-500/80 backdrop-blur-sm rounded-lg text-white text-xs font-semibold">
                ▶ Live Preview
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button className="rounded-full bg-emerald-600 px-8 py-3.5 text-white font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all">
            Watch Full Demo
          </button>
          <button className="rounded-full border-2 border-emerald-600 px-8 py-3.5 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all">
            Start Free Trial
          </button>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-slate-500">
          No credit card required • Setup in under 5 minutes
        </p>
      </div>
    </section>
  );
}
