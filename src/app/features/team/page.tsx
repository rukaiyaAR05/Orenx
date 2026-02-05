import Link from "next/link";
import { Users, ArrowLeft } from "lucide-react";
import Navbar from "@/app/componets/Navbar";
import Footer from "@/app/componets/Footer";

export default function TeamPage() {
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
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Team Access</h1>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Add team members with custom roles and permissions to manage different aspects of your inventory. Control who can view, edit, and delete data.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-emerald-900 mb-3">Custom Roles</h3>
                <p className="text-emerald-700">Create roles with specific permissions for different team members.</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-emerald-900 mb-3">Collaboration</h3>
                <p className="text-emerald-700">Work together seamlessly with real-time sync across all users.</p>
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
