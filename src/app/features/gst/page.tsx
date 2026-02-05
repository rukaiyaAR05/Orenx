import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function GSTPage() {
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
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">GST Compliant</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Stay fully compliant with GST regulations automatically. Auto-generate GST invoices and file returns with just a few clicks. Never worry about GST compliance again.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Auto Invoicing</h3>
                <p className="text-blue-700">Automatically generate GST-compliant invoices for all transactions.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Filing Returns</h3>
                <p className="text-blue-700">Simplify GST return filing with integrated filing support.</p>
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
