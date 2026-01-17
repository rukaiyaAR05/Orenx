"use client";

const testimonials = [
  {
    name: "Rohit Mehta",
    role: "Operations Manager, SteelFab Pvt Ltd",
    text: "ORENX completely replaced our Excel sheets. We now have real-time stock visibility across all warehouses.",
  },
  {
    name: "Anjali Shah",
    role: "Founder, FreshBite Foods",
    text: "Low-stock alerts alone saved us from multiple production delays. Very easy for our team to use.",
  },
  {
    name: "Vikram Patel",
    role: "Director, Patel Electronics",
    text: "The reporting and insights helped us reduce excess stock by 30% in just three months.",
  },
  {
    name: "Sneha Iyer",
    role: "Supply Chain Lead, Urban Retail",
    text: "Multi-user access and approvals made our operations much more organized and transparent.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F6F4EF] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Headline - Handwritten Style */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-[#1e293b] font-bold leading-tight">
          What our{" "}
          <span className="relative inline-block">
            <span className="relative z-10">customers</span>
            <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
              <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
            </svg>
          </span>{" "}
          <span className="relative inline-block">
            <span>say</span>
            <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
              <path d="M0 6 Q25 2 50 6 T100 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>.
        </h2>

        {/* Scroll Container */}
        <div className="mt-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 w-max px-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[320px] max-w-[320px] rounded-3xl bg-white p-6 shadow-sm border border-[#E0DDD5]"
              >
                <p className="text-sm text-[#4A6B64] leading-relaxed">
                  “{t.text}”
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-[#0B2B26]">{t.name}</p>
                  <p className="text-xs text-[#4A6B64]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
