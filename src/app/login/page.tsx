"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import AuthNavbar from '../componets/AuthNavbar';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <AuthNavbar />

      <div className="flex min-h-[calc(100vh-72px)]">
      {/* Left Side - Vector Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#0B2B26] via-[#0F3D35] to-[#134035] overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="loginGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loginGrid)" />
          </svg>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px]" />

        {/* Vector Art - Business/Inventory Theme */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          {/* Main SVG Illustration */}
          <svg viewBox="0 0 400 400" className="w-80 h-80 mb-8">
            {/* Background Circle */}
            <circle cx="200" cy="200" r="180" fill="rgba(16,185,129,0.1)" />
            <circle cx="200" cy="200" r="150" fill="rgba(20,184,166,0.1)" />
            
            {/* Dashboard/Screen */}
            <rect x="100" y="80" width="200" height="140" rx="12" fill="#1e293b" stroke="#10b981" strokeWidth="2"/>
            <rect x="110" y="90" width="180" height="10" rx="2" fill="#374151"/>
            <circle cx="120" cy="95" r="3" fill="#ef4444"/>
            <circle cx="132" cy="95" r="3" fill="#f59e0b"/>
            <circle cx="144" cy="95" r="3" fill="#10b981"/>
            
            {/* Chart Bars */}
            <rect x="125" y="150" width="20" height="50" rx="3" fill="#10b981"/>
            <rect x="155" y="130" width="20" height="70" rx="3" fill="#14b8a6"/>
            <rect x="185" y="140" width="20" height="60" rx="3" fill="#06b6d4"/>
            <rect x="215" y="120" width="20" height="80" rx="3" fill="#10b981"/>
            <rect x="245" y="135" width="20" height="65" rx="3" fill="#14b8a6"/>
            
            {/* Floating Cards */}
            <g transform="translate(50, 240)">
              <rect width="80" height="60" rx="8" fill="white" opacity="0.95"/>
              <rect x="10" y="10" width="30" height="30" rx="6" fill="#10b981"/>
              <rect x="10" y="45" width="60" height="6" rx="2" fill="#e5e7eb"/>
            </g>
            
            <g transform="translate(270, 240)">
              <rect width="80" height="60" rx="8" fill="white" opacity="0.95"/>
              <rect x="10" y="10" width="30" height="30" rx="6" fill="#14b8a6"/>
              <rect x="10" y="45" width="60" height="6" rx="2" fill="#e5e7eb"/>
            </g>
            
            {/* Connection Lines */}
            <path d="M90 270 Q150 320 200 270" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.5"/>
            <path d="M310 270 Q250 320 200 270" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.5"/>
            
            {/* Decorative Dots */}
            <circle cx="80" cy="100" r="4" fill="#10b981" opacity="0.6"/>
            <circle cx="320" cy="120" r="5" fill="#14b8a6" opacity="0.5"/>
            <circle cx="60" cy="200" r="3" fill="#06b6d4" opacity="0.7"/>
            <circle cx="340" cy="220" r="4" fill="#10b981" opacity="0.6"/>
            
            {/* Checkmarks */}
            <g transform="translate(320, 80)">
              <circle r="15" fill="#10b981"/>
              <path d="M-6 0 L-2 4 L6 -4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </g>
          </svg>

          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">ORENX</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-sm">
              Manage your inventory, track sales, and grow your business — all in one place.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">10K+</p>
              <p className="text-slate-400 text-sm">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">99.9%</p>
              <p className="text-slate-400 text-sm">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">24/7</p>
              <p className="text-slate-400 text-sm">Support</p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 right-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-emerald-400 text-sm font-medium flex items-center gap-2">
              <Sparkles size={14} /> Trusted Platform
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-3 text-2xl font-bold text-[#0B2B26]">
              <Image
                src="/logo1.png"
                alt="ORENX"
                width={44}
                height={44}
                className="rounded-full"
              />
              ORENX
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0B2B26] mb-2">Welcome back!</h2>
            <p className="text-slate-500">Sign in to access your dashboard</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <Link href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-700 placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="remember" className="text-sm text-slate-600">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#0B2B26] to-[#0F3D35] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Sign In
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-sm text-slate-400">or continue with</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-medium text-slate-600">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="text-sm font-medium text-slate-600">GitHub</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-8 text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-emerald-600 font-semibold hover:text-emerald-700">
              Start free trial
            </Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
