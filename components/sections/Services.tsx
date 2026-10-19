"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Layers, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services({
  onSelectService,
}: {
  onSelectService?: (serviceTitle: string) => void;
}) {
  const handleStartProject = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 border-t border-white/8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#ffaa44]" />
            SERVICES &amp; ENGAGEMENT
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            How We Can Work Together
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            Available for high-impact frontend contracts, WebRTC architecture design, and internship roles.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-[#121216] border border-white/8 hover:border-[#e8821a]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs text-[#ffaa44] uppercase tracking-wider block mb-2">
                  {service.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-zinc-100 mb-4 group-hover:text-[#ffaa44] transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-white/6 mb-6">
                  {service.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 font-sans text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#e8821a] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline: {service.timeline}</span>
                </div>

                <button
                  onClick={() => handleStartProject(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-[#e8821a] hover:text-[#0a0a0c] text-zinc-200 font-display font-semibold text-xs tracking-wide transition-all"
                >
                  <span>Start a project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
