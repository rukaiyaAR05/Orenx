import Link from "next/link";
import { Zap, ArrowLeft } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function PerformancePage() {
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
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Fast Performance</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Experience blazing fast performance even with thousands of products. Our optimized infrastructure ensures smooth operations at scale.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-yellow-900 mb-3">Lightning Speed</h3>
                <p className="text-yellow-700">Instant search, filtering, and data processing capabilities.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-yellow-900 mb-3">Scalability</h3>
                <p className="text-yellow-700">Handle thousands of products without performance degradation.</p>
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
