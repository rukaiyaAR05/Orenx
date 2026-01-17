"use client";

import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@orenx.com",
    subDetail: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 98765 43210",
    subDetail: "Mon-Sat, 9am-6pm IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Business Park",
    subDetail: "Mumbai, India 400001",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 9AM - 6PM",
    subDetail: "Sunday: Closed",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B2B26] via-[#0F3D35] to-[#134035] py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="contactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
            <MessageSquare size={16} className="text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Us</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions about ORENX? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#0B2B26] mb-1">{info.title}</h3>
                <p className="text-slate-800 font-medium">{info.detail}</p>
                <p className="text-slate-500 text-sm">{info.subDetail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0B2B26]">Send us a message</h2>
                  <p className="text-slate-500 text-sm">Fill out the form and we&apos;ll respond shortly</p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Your company name"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#0B2B26] to-[#0F3D35] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              {/* Map Container */}
              <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span className="font-semibold text-[#0B2B26]">Our Location</span>
                  </div>
                </div>
                
                {/* Embedded Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Office Info Card */}
              <div className="bg-gradient-to-br from-[#0B2B26] to-[#0F3D35] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">ORENX Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-medium">123 Business Park, Tech Hub</p>
                      <p className="text-slate-300 text-sm">Andheri East, Mumbai, Maharashtra 400069</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <p>+91 98765 43210</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <p>support@orenx.com</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-emerald-400 font-semibold text-sm mb-2">Business Hours</p>
                  <p className="text-slate-300 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-300 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0B2B26] mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-600 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 transition-all"
            >
              Start Free Trial
            </a>
            <a
              href="/#demo"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-[#0B2B26] font-bold rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-all"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
