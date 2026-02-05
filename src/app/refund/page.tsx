import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function RefundPage() {
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
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <RotateCcw className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Refund Policy</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We want you to be satisfied with your ORENX subscription. Learn about our refund and cancellation policies.
            </p>

            <div className="bg-green-50 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Last Updated</h3>
              <p className="text-green-700">January 1, 2024</p>
            </div>

            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">Refund Policy</h2>
              <p className="text-slate-600 mb-4">
                We offer a 30-day money-back guarantee on all subscriptions. If you're not satisfied with ORENX, we'll refund your payment.
              </p>
              <p className="text-slate-500">Full refund policy coming soon...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
