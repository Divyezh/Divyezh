"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/8 bg-[#0a0a0c] text-zinc-500 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#e8821a] text-[#0a0a0c] font-black text-xs font-display">
              DS
            </span>
            <span className="text-zinc-300 font-medium">
              Divyesh Soni · Full-Stack WebRTC &amp; Frontend Engineer
            </span>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a href="#hero" className="hover:text-zinc-200 transition-colors">
              Home
            </a>
            <a href="#viva" className="hover:text-zinc-200 transition-colors">
              VIVA Case
            </a>
            <a href="#projects" className="hover:text-zinc-200 transition-colors">
              Projects
            </a>
            <a href="#github" className="hover:text-zinc-200 transition-colors">
              GitHub
            </a>
            <a href="#contact" className="hover:text-zinc-200 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-mono text-[11px] text-zinc-600">
            © {new Date().getFullYear()} Divyesh Soni. Built with Next.js 15 &amp; React 19. Exported for GitHub Pages.
          </p>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="hover:text-zinc-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
