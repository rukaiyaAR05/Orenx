import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function CookiesPage() {
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
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Cookie className="w-8 h-8 text-amber-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Cookie Policy</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              This cookie policy explains how ORENX uses cookies and similar technologies to recognize you.
            </p>

            <div className="bg-amber-50 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Last Updated</h3>
              <p className="text-amber-700">January 1, 2024</p>
            </div>

            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">Cookie Policy</h2>
              <p className="text-slate-600 mb-4">
                Cookies are small text files stored on your device to help us improve your browsing experience and personalize content.
              </p>
              <p className="text-slate-500">Full cookie policy coming soon...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
