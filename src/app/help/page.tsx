import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function HelpPage() {
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
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Help Center</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Find answers to common questions and get support from our helpful documentation and community.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">FAQs</h3>
                <p className="text-orange-700">Frequently asked questions answered by our experts.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">Contact Support</h3>
                <p className="text-orange-700">Reach out to our support team for personalized help.</p>
              </div>
            </div>

            <p className="text-slate-500">Help center coming soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
