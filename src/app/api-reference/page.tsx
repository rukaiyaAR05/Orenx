import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function APIReferencePage() {
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
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center">
                <Code2 className="w-8 h-8 text-cyan-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">API Reference</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Complete API documentation for developers. Build custom integrations with ORENX using our REST API.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cyan-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">REST API</h3>
                <p className="text-cyan-700">Full reference of all REST endpoints and parameters.</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-cyan-900 mb-3">Webhooks</h3>
                <p className="text-cyan-700">Real-time event notifications for your integrations.</p>
              </div>
            </div>

            <p className="text-slate-500">API documentation coming soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
