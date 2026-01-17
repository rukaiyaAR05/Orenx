export default function FounderMessage() {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
  
          {/* Headline - Handwritten Style */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1e293b] font-bold leading-tight">
            A message from the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">team</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>{" "}
            behind{" "}
            <span className="relative inline-block">
              <span>ORENX</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q25 2 50 6 T100 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
  
          {/* Message */}
          <p className="mt-6 text-lg text-[#4A6B64] leading-relaxed">
            We built ORENX to remove everyday operational stress from growing businesses.
            Our goal is to give you clarity, control, and confidence — so you can focus on building, not managing.
          </p>
        </div>
      </section>
    );
  }
  