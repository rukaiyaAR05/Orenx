import Link from "next/link";
import { Settings, ArrowLeft } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function SetupPage() {
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
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-indigo-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Easy Setup</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Get started in minutes with our easy setup wizard. Import your existing data easily and be ready to manage inventory like never before.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-indigo-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Quick Start</h3>
                <p className="text-indigo-700">Get up and running in just a few minutes with guided setup.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Data Import</h3>
                <p className="text-indigo-700">Seamlessly import your existing inventory and product data.</p>
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
