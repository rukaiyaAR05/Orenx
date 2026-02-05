import Link from "next/link";
import { ArrowLeft, BookMarked } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function DocumentationPage() {
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
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <BookMarked className="w-8 h-8 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Documentation</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Comprehensive documentation to help you get the most out of ORENX. Learn how to use all features effectively.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Getting Started</h3>
                <p className="text-purple-700">Step-by-step guides to set up and configure ORENX.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Advanced Topics</h3>
                <p className="text-purple-700">Deep dive into advanced features and configurations.</p>
              </div>
            </div>

            <p className="text-slate-500">Documentation coming soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
