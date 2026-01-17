"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "What is ORENX and how does it work?",
    answer: "ORENX is a smart inventory management platform for SMEs. Track stock, manage orders, generate reports, and automate reordering — all from one dashboard."
  },
  {
    question: "Is ORENX suitable for my business size?",
    answer: "Yes! ORENX scales from small retail shops to large manufacturing units. Our flexible plans grow with your needs."
  },
  {
    question: "How secure is my data with ORENX?",
    answer: "We use 256-bit SSL encryption, daily backups, and enterprise-grade cloud infrastructure. Your data is always secure."
  },
  {
    question: "Does ORENX support GST billing?",
    answer: "Yes, ORENX is fully GST-compliant. Generate invoices, track taxes, and export reports for easy filing."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! 14-day free trial with full access. No credit card required."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0B2B26] via-[#0F3D35] to-[#071a17] py-16 overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 font-semibold text-sm mb-4">
            <MessageCircleQuestion size={14} className="text-emerald-400" />
            FAQs
          </div>
          
          {/* Headline - Handwritten Style */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Questions</span>
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 120 50" fill="none" preserveAspectRatio="none">
                <ellipse cx="60" cy="25" rx="58" ry="22" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                openIndex === index
                  ? "bg-emerald-500/10 border-emerald-500/30"
                  : "bg-white/5 border-white/10 hover:border-emerald-500/20 hover:bg-white/10"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-br from-emerald-400 to-teal-400"
                      : "bg-white/10 group-hover:bg-emerald-500/20"
                  }`}>
                    <HelpCircle className={`w-4 h-4 transition-colors ${
                      openIndex === index ? "text-[#0B2B26]" : "text-emerald-400"
                    }`} />
                  </div>
                  <span className={`font-medium text-sm transition-colors ${
                    openIndex === index ? "text-white" : "text-slate-300"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                  openIndex === index ? "text-emerald-400 rotate-180" : "text-slate-500"
                }`} />
              </button>

              {/* Answer Panel */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-5 pb-4 pl-16">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-slate-400 text-sm">
              More questions?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-[#0B2B26] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              Contact Us
              <MessageCircleQuestion size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
