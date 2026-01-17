export default function FinalCTA() {
    return (
      <section className="bg-[#0B2B26] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
  
          {/* Headline - Handwritten Style */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to simplify your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">inventory</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>?
          </h2>
  
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-full bg-[#1F7A5C] px-8 py-3 font-medium shadow hover:bg-[#17624A] transition">
              Get Started Free
            </button>
            <button className="rounded-full border border-white/30 px-8 py-3 font-medium hover:bg-white/10 transition">
              Book a Demo
            </button>
          </div>
  
          {/* Supporting Line */}
          <p className="mt-6 text-lg text-green-200">
            Join thousands of businesses using ORENX to grow smarter.
          </p>
        </div>
      </section>
    );
  }
  