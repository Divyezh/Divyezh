import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ArrowLeft, Download, Mail, MapPin, Globe } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 print-page">
      <div className="max-w-4xl mx-auto">
        {/* Screen Only Navigation */}
        <div className="no-print flex items-center justify-between mb-8 pb-4 border-b border-white/8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <a
            href={siteConfig.author.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e8821a] text-[#0a0a0c] font-display font-bold text-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Printable Resume Container */}
        <div className="bg-[#121216] border border-white/8 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/8">
            <div>
              <h1 className="font-display text-3xl font-bold text-zinc-100 mb-1">
                {siteConfig.author.name}
              </h1>
              <p className="font-sans text-sm font-semibold text-[#ffaa44]">
                {siteConfig.author.role}
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-400 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#e8821a]" />
                <span>{siteConfig.author.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#e8821a]" />
                <span>{siteConfig.author.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#e8821a]" />
                <span>github.com/Divyezh</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-white/8">
            <h2 className="font-mono text-xs text-[#ffaa44] uppercase tracking-wider font-semibold mb-3">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
              <span className="font-display text-base font-bold text-zinc-100">
                Integrated M.Sc. in Information Technology
              </span>
              <span className="font-mono text-xs text-zinc-400">2021 — 2026</span>
            </div>
            <div className="font-sans text-xs text-zinc-400">
              Silver Oak University, Ahmedabad · Focus on Distributed Systems, WebRTC, and Full-Stack Architecture
            </div>
          </div>

          {/* Experience */}
          <div className="py-6 border-b border-white/8">
            <h2 className="font-mono text-xs text-[#ffaa44] uppercase tracking-wider font-semibold mb-4">
              Engineering Experience &amp; Projects
            </h2>
            <div className="space-y-6">
              {siteConfig.timeline.map((item, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-display text-sm font-bold text-zinc-100">
                      {item.role}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">{item.period}</span>
                  </div>
                  <div className="font-sans text-xs text-[#e8821a] mb-2">{item.organization}</div>
                  <ul className="space-y-1 font-sans text-xs text-zinc-400">
                    {item.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#ffaa44]">▪</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="pt-6">
            <h2 className="font-mono text-xs text-[#ffaa44] uppercase tracking-wider font-semibold mb-4">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.skills.map((c) => (
                <div key={c.title}>
                  <span className="font-display text-xs font-semibold text-zinc-200 block mb-1.5">
                    {c.title}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10.5px] text-zinc-300"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
