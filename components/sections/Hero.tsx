"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import dynamic from "next/dynamic";
import { ArrowDown, FileText, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// Lazy load interactive canvas for performance
const MeshHero = dynamic(() => import("@/components/three/MeshHero"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] md:h-[500px] rounded-2xl bg-[#121216] border border-white/8 flex items-center justify-center font-mono text-xs text-zinc-500">
      Loading interactive WebRTC topology...
    </div>
  ),
});

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % siteConfig.author.rolesCycling.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#e8821a]/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#ffaa44]/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Identity, Roles & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121216] border border-white/10 w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-sans text-xs font-medium text-zinc-300">
                {siteConfig.author.status} · Ahmedabad / Remote
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.08] mb-4">
              {siteConfig.author.name}
            </h1>

            {/* Animated Cycling Role */}
            <div className="h-9 overflow-hidden mb-4">
              <div
                key={roleIndex}
                className="font-display text-lg sm:text-2xl font-semibold text-[#e8821a] animate-fadeIn"
              >
                {siteConfig.author.rolesCycling[roleIndex]}
              </div>
            </div>

            {/* Pitch */}
            <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-8">
              &ldquo;{siteConfig.author.positioning}&rdquo; Integrated M.Sc. IT candidate (2026) engineering zero-SDK
              peer-to-peer video streaming and GPU-accelerated web experiences.
            </p>

            {/* Two Main Above-The-Fold CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#viva"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e8821a] hover:bg-[#ffaa44] text-[#0a0a0c] font-display font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(232,130,26,0.35)] transition-all transform hover:-translate-y-0.5"
              >
                View VIVA Meeting →
              </a>

              <a
                href={siteConfig.author.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#121216] hover:bg-[#1a1a20] text-zinc-200 border border-white/10 font-display font-semibold text-sm transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#ffaa44]" />
                Download Résumé
              </a>
            </div>

            {/* Social Icons & Email */}
            <div className="flex items-center gap-5 text-zinc-400">
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-100 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 font-mono text-xs"
                title="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">{siteConfig.author.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive WebRTC Mesh Topology */}
          <div className="lg:col-span-6 w-full">
            <MeshHero />
          </div>
        </div>

        {/* Proof Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-16 pb-8 border-t border-white/8 mt-16 max-w-4xl mx-auto text-center">
          {siteConfig.proofStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-3xl sm:text-5xl font-bold text-zinc-100 tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/6 bg-[#0e0e12]/60 mt-8">
        <div className="flex w-max animate-marquee space-x-10 hover:[animation-play-state:paused]">
          {[...siteConfig.marqueeTechs, ...siteConfig.marqueeTechs].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/4 border border-white/6 text-zinc-400 hover:text-zinc-100 transition-colors font-mono text-xs cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8821a]" />
              <span className="font-semibold">{tech.name}</span>
              <span className="text-[10px] text-zinc-500">[{tech.badge}]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
