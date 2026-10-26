"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StitchNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Proof & Works (6)", href: "/proof" },
    { label: "About Studio", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Audit Tool", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative max-w-[1360px] mx-auto px-5 sm:px-10 pt-6 pb-4 z-40"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111] flex items-center group"
          >
            evolveexpert
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-emerald-500 inline-block ml-0.5"
            >
              .
            </motion.span>
          </Link>

          {/* Desktop Floating Pill Navigation */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden lg:flex items-center bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-black/5 shadow-sm relative"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredNav === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.href)}
                  className={`relative text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200 z-10 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  {/* Active background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#111111] rounded-full z-[-1] shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover background highlight (only when not active) */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hoverNavPill"
                      className="absolute inset-0 bg-neutral-100/90 rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}

                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4 sm:gap-5">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/pricing#plans"
              className="hidden sm:inline-flex items-center gap-2 bg-[#111111] text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-neutral-800 active:scale-95 transition shadow-sm group"
            >
              <span>Deploy System</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Mobile Menu Hamburger */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition shadow-xs"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-4 p-5 rounded-[24px] bg-white border border-black/10 shadow-xl space-y-4 origin-top"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs">
              <span className="font-bold text-[#111111]">
                EvolveExpert
              </span>
              <span className="font-mono text-neutral-400">24/7 AI Lead-to-Booking</span>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#111111] text-white"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/pricing#plans"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#111111] text-white text-sm font-semibold hover:bg-neutral-800 transition shadow-sm"
              >
                <span>Deploy Lead-to-Booking</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
