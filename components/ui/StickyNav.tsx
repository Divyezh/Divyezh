"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { Sun, Moon, Menu, X, Command } from "lucide-react";

export default function StickyNav({
  theme,
  toggleTheme,
  openCommandPalette,
}: {
  theme: string;
  toggleTheme: () => void;
  openCommandPalette: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { label: "VIVA Case", href: "#viva" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub Proof", href: "#github" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <nav className="flex items-center justify-between px-4 py-2.5 rounded-full bg-[#121216]/80 dark:bg-[#121216]/80 backdrop-blur-md border border-white/10 shadow-lg">
            {/* Logo Mark */}
            <a
              href="#hero"
              className="flex items-center gap-2 group font-display font-bold text-lg text-zinc-100 tracking-tight"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e8821a] text-[#0a0a0c] font-black text-sm shadow-[0_0_12px_#e8821a]/40 group-hover:scale-105 transition-transform">
                DS
              </span>
              <span className="hidden sm:inline font-semibold">
                Divyesh<span className="text-[#e8821a]">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Tools (Command Palette, Theme Toggle, Hire Me) */}
            <div className="flex items-center gap-2.5">
              {/* Command Palette Button */}
              <button
                onClick={openCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-zinc-200 transition-colors text-xs font-mono"
                title="Open Command Palette (Cmd/Ctrl + K)"
              >
                <Command className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-[11px]">Cmd+K</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-zinc-100 transition-colors"
                title="Toggle Theme"
                aria-label="Toggle Dark and Light Theme"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4 text-zinc-800" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>

              {/* Hire Me CTA */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#e8821a] hover:bg-[#ffaa44] text-[#0a0a0c] font-display font-semibold text-xs transition-colors shadow-[0_0_15px_rgba(232,130,26,0.3)]"
              >
                Hire Me
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 text-zinc-400 hover:text-zinc-100"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-[#0a0a0c]/95 backdrop-blur-xl flex flex-col justify-center px-8 text-white md:hidden animate-fadeIn">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-semibold text-zinc-300 hover:text-[#e8821a] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#e8821a] text-[#0a0a0c] font-display font-bold text-sm"
              >
                Hire Me →
              </a>
              <a
                href={siteConfig.author.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 rounded-xl border border-white/15 text-zinc-200 font-display font-medium text-sm"
              >
                Download Résumé (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
