import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function PrivacyPage() {
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
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Privacy Policy</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>

            <div className="bg-red-50 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Last Updated</h3>
              <p className="text-red-700">January 1, 2024</p>
            </div>

            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">Privacy Policy</h2>
              <p className="text-slate-600 mb-4">
                This Privacy Policy explains how ORENX collects, uses, discloses, and safeguards your information when you visit our website and use our services.
              </p>
              <p className="text-slate-500">Full privacy policy content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
