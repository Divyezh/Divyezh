"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { Cpu, Info } from "lucide-react";

export default function Skills() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 border-t border-white/8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#ffaa44]" />
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            Grouped Capabilities
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            No meaningless percentage bars. Clear, context-driven skills with verified production usage.
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.skills.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-2xl bg-[#121216] border border-white/8 hover:border-[#e8821a]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-zinc-100 mb-2">
                  {category.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips with Tooltips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setActiveTooltip(skill.name)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      className="group relative"
                    >
                      <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1a1a20] border border-white/8 hover:border-[#e8821a]/50 text-zinc-200 hover:text-[#ffaa44] font-mono text-xs font-medium transition-all">
                        <span>{skill.name}</span>
                        <Info className="w-3 h-3 text-zinc-500 group-hover:text-[#e8821a]" />
                      </button>

                      {/* Floating Tooltip */}
                      {activeTooltip === skill.name && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 rounded-lg bg-[#1e1e26] border border-white/15 text-zinc-200 font-sans text-xs shadow-2xl z-20 pointer-events-none animate-fadeIn">
                          <p className="text-[#ffaa44] font-mono font-semibold text-[11px] mb-1">
                            {skill.name}
                          </p>
                          <p className="text-zinc-300 text-[11.5px] leading-snug">
                            {skill.tooltip}
                          </p>
                          {/* Triangle arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#1e1e26]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/6 mt-8 font-mono text-[11px] text-zinc-500">
                Hover over chips to view architectural context
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
