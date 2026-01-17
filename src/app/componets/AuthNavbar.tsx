"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function AuthNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navBackground = scrolled
    ? "linear-gradient(135deg, rgba(5,20,15,0.85), rgba(10,35,25,0.85))"
    : "linear-gradient(135deg, rgba(5, 20, 15, 0.81), rgba(29, 114, 80, 0.6))";

  const linkColor = (href: string) => {
    const isActive = pathname === href;
    return isActive ? "#10b981" : "#ffffff";
  };

  return (
    <>
      {/* spacer so content sits below fixed nav */}
      <div style={{ height: "72px" }} />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: navBackground,
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.45)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white no-underline"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo1.png"
              alt="ORENX Logo"
              width={100}
              height={100}
              className="h-9 w-9 rounded-full object-contain"
              priority
            />
            <span className="text-xl font-extrabold tracking-tight text-white">ORENX</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  color: linkColor(item.href),
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="rounded-md px-4 py-2 text-sm font-semibold text-[#062015] no-underline"
              style={{
                background: "linear-gradient(135deg,rgb(18, 81, 60), #34d399)",
                boxShadow: "0 10px 25px rgba(16,185,129,0.35)",
              }}
            >
              Login
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span
              style={{
                width: "20px",
                height: "2px",
                backgroundColor: "white",
                display: "block",
                position: "relative",
                transition: "transform 0.2s ease, opacity 0.2s ease",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  left: 0,
                  width: "20px",
                  height: "2px",
                  backgroundColor: "white",
                  transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "6px",
                  left: 0,
                  width: "20px",
                  height: "2px",
                  backgroundColor: "white",
                  transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "20px",
                  height: "2px",
                  backgroundColor: "white",
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(5,20,15,0.95), rgba(10,35,25,0.95))",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="space-y-3 px-4 pb-6 pt-3">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-semibold text-white no-underline"
                style={{ color: linkColor(item.href) }}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/login"
              className="mt-2 block rounded-md px-4 py-2 text-center text-sm font-semibold text-[#062015] no-underline"
              style={{
                background: "linear-gradient(135deg, #10b981, #34d399)",
                boxShadow: "0 10px 25px rgba(16,185,129,0.35)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
