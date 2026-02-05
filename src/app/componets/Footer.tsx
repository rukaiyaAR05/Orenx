"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Tools", href: "/#tools" },
    { name: "Demo", href: "/#demo" },
    { name: "Testimonials", href: "/#testimonials" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "FAQ", href: "/#faq" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/documentation" },
    { name: "Help Center", href: "/help" },
    { name: "API Reference", href: "/api-reference" },
    { name: "Community", href: "/community" },
    { name: "Tutorials", href: "/tutorials" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0B2B26] to-[#071a17] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">
            
            {/* Logo & Company Info - Takes 2 columns */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-1">
                  <Image
                    src="/logo1.png"
                    alt="ORENX Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span 
                  className="text-2xl text-white font-bold"
                >
                  ORENX
                </span>
              </div>
              
              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                Smart inventory management for modern businesses. Simplify your operations, reduce costs, and grow faster with ORENX.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:hello@orenx.com" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  <Mail size={16} className="text-emerald-500" />
                  ram@orenx.in
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  <Phone size={16} className="text-emerald-500" />
                  +91 98765 43210
                </a>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Jamnagar, Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe to our newsletter for updates and tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                  <ArrowRight size={18} />
                </button>
              </div>
              
              {/* Social Links */}
              <div className="mt-6">
                <p className="text-slate-500 text-xs mb-3">Follow us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-emerald-500/20 hover:border-emerald-500/30 hover:text-emerald-400 transition-all"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} ORENX. All rights reserved.
              </p>
              
              {/* Made with love */}
              <p className="text-sm text-slate-500 flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500 fill-red-500" /> in India
              </p>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
