"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { copyToClipboard } from "@/lib/utils";
import { Check, Copy, ExternalLink, Github, Radio, Shield, Users, Video } from "lucide-react";

export default function CaseStudy() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleCopyCode = async () => {
    await copyToClipboard(siteConfig.vivaCaseStudy.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="viva" className="relative py-24 border-t border-white/8 bg-[#0a0a0c]">
      {/* Amber radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e8821a]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8821a]/15 border border-[#e8821a]/30 font-mono text-xs text-[#ffaa44] mb-4">
            <Radio className="w-3.5 h-3.5 text-[#ffaa44] animate-pulse" />
            FLAGSHIP CASE STUDY
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            {siteConfig.vivaCaseStudy.title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-zinc-400">
            {siteConfig.vivaCaseStudy.tagline}
          </p>
        </div>

        {/* 4-Step Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.vivaCaseStudy.steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[#16161c] border-[#e8821a] shadow-[0_0_20px_rgba(232,130,26,0.15)]"
                  : "bg-[#121216] border-white/8 hover:border-white/20"
              }`}
            >
              <span className="font-mono text-xs text-[#ffaa44] font-semibold uppercase tracking-wider block mb-2">
                {step.phase}
              </span>
              <h3 className="font-display text-lg font-bold text-zinc-100 mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Deep-Dive: UI Mockup + Architecture Snippet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Meeting UI Call Tile Preview */}
          <div className="lg:col-span-7 rounded-2xl bg-[#121216] border border-white/8 overflow-hidden shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-[#0e0e12]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-xs text-zinc-400 ml-2">VIVA Video Room — Room #q3-sync</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono text-[10px] font-semibold">
                ENCRYPTED P2P
              </span>
            </div>

            {/* Video Call Grid Mockup */}
            <div className="p-4 grid grid-cols-2 gap-4 bg-[#0a0a0c]">
              {/* Host tile with active speaking wave ring */}
              <div className="relative aspect-video rounded-xl bg-[#16161c] border-2 border-[#e8821a] flex flex-col items-center justify-center overflow-hidden">
                <div className="w-14 h-14 rounded-full bg-[#e8821a]/20 border border-[#e8821a] flex items-center justify-center text-2xl shadow-[0_0_20px_#e8821a]">
                  👨‍💻
                </div>
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Speaking (94dB)
                </div>
                <span className="absolute bottom-2.5 left-2.5 font-sans text-xs font-semibold text-zinc-200 bg-black/60 px-2 py-0.5 rounded">
                  Divyesh Soni (Host)
                </span>
              </div>

              {/* Peer 2 */}
              <div className="relative aspect-video rounded-xl bg-[#16161c] border border-white/8 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <span className="absolute bottom-2.5 left-2.5 font-sans text-xs font-semibold text-zinc-300 bg-black/60 px-2 py-0.5 rounded">
                  Sarah Chen (Lead Architect)
                </span>
              </div>

              {/* Lossless Screen Share Tile */}
              <div className="col-span-2 relative aspect-[21/9] rounded-xl bg-[#121216] border border-white/8 p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/8 pb-2">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#ffaa44]" />
                    <span className="font-mono text-xs text-zinc-300">Screen Stream: Q3 WebRTC Flow Diagram</span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">Lossless 60 FPS</span>
                </div>
                <div className="flex items-center justify-center py-6">
                  <div className="font-mono text-xs text-zinc-400 bg-black/40 px-4 py-2 rounded-lg border border-white/6 text-center">
                    [Host Screen Broadcaster: Track Replacement Zero Delay]
                  </div>
                </div>
                {/* Host Admission Knock Prompt overlay */}
                <div className="flex items-center justify-between bg-[#1a1a22] border border-[#e8821a]/40 p-2.5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#ffaa44]" />
                    <span className="font-sans text-xs text-zinc-200">
                      <strong>Alex Petrov</strong> is knocking to enter the room
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded bg-emerald-500 text-black font-semibold text-xs hover:bg-emerald-400">
                      Admit
                    </button>
                    <button className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 text-xs hover:bg-zinc-700">
                      Deny
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architecture Code Snippet + Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Code Snippet Card */}
            <div className="rounded-2xl bg-[#121216] border border-white/8 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-[#0e0e12]">
                <span className="font-mono text-xs text-zinc-400">viva-peer-mesh.config.ts</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Config</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed bg-[#0a0a0c]">
                <code>{siteConfig.vivaCaseStudy.codeSnippet}</code>
              </pre>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.vivaCaseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#121216] border border-white/8">
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#ffaa44]">
                    {m.value}
                  </div>
                  <div className="font-mono text-xs text-zinc-500 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.vivaCaseStudy.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#e8821a] hover:bg-[#ffaa44] text-[#0a0a0c] font-display font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(232,130,26,0.3)]"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={siteConfig.vivaCaseStudy.sourceCodeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#16161c] hover:bg-[#1a1a22] text-zinc-200 border border-white/10 font-display font-semibold text-xs transition-all"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
