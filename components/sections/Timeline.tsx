"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 border-t border-white/8 bg-[#0a0a0c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#ffaa44]" />
            BACKGROUND &amp; TIMELINE
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            Education &amp; Experience
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            A chronicle of formal degrees, real-time research, and shipped applications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#e8821a]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {siteConfig.timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#121216] border-2 border-[#e8821a] group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#121216] border border-white/8 hover:border-[#e8821a]/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#ffaa44]">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-zinc-100 mb-1">
                  {item.role}
                </h3>
                <h4 className="font-sans text-sm font-semibold text-[#e8821a] mb-4">
                  {item.organization}
                </h4>

                <ul className="space-y-2 font-sans text-xs sm:text-sm text-zinc-400">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#ffaa44] mt-1 shrink-0">▪</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
