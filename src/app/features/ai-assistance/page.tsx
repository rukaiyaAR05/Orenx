import Link from "next/link";
import { Brain, ArrowLeft } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function AIAssistancePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">AI Assistance</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              ORENX uses advanced AI to analyze your sales trends and inventory movement to suggest optimal reorder points and predict future demand. Our intelligent system learns from your business patterns to provide smart recommendations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-emerald-900 mb-3">Smart Analytics</h3>
                <p className="text-emerald-700">AI-powered insights into your sales and inventory patterns.</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-emerald-900 mb-3">Demand Prediction</h3>
                <p className="text-emerald-700">Forecast future demand with machine learning algorithms.</p>
              </div>
            </div>

            <Link
              href="#pricing"
              className="inline-block bg-[#4ADE80] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#22C55E] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
