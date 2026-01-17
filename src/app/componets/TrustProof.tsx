"use client";

const trustedCompanies = [
  "Tata Industries",
  "Reliance Group",
  "Mahindra & Co",
  "Bajaj Auto",
  "Godrej Industries",
  "Larsen & Toubro",
  "Hindustan Unilever",
  "ITC Limited",
  "Aditya Birla",
  "JSW Steel",
];

export default function TrustProof() {
  return (
    <section className="relative bg-gradient-to-b from-[#f0fdf4] to-white py-16 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Title */}
        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Trusted by 500+ businesses</p>
        
        {/* Rotating Logos */}
        <div className="relative mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f0fdf4] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...trustedCompanies, ...trustedCompanies].map((company, i) => (
                <div key={i} className="flex-shrink-0 mx-8">
                  <span className="text-xl font-bold text-[#0F2A1D]/30 hover:text-[#0F2A1D]/60 transition-colors whitespace-nowrap cursor-default">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
