"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { copyToClipboard, formatAhmedabadTime } from "@/lib/utils";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send, Clock, Sparkles } from "lucide-react";

export default function Contact({
  preselectedService,
}: {
  preselectedService?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(preselectedService || "Real-Time & WebRTC Applications");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    setCurrentTime(formatAhmedabadTime());
    const interval = setInterval(() => {
      setCurrentTime(formatAhmedabadTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    await copyToClipboard(siteConfig.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot spam field
    if (honeypot) {
      return;
    }

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    // Static export friendly handler: triggers mailto fallback while confirming feedback
    setTimeout(() => {
      const subject = encodeURIComponent(`Project Inquiry: ${service} from ${name}`);
      const body = encodeURIComponent(`Hi Divyesh,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${service}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/8 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Direct Email, Local Time */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#ffaa44]" />
                START A CONVERSATION
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-6 leading-tight">
                Let&apos;s build something <span className="text-[#e8821a]">real-time</span>.
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
                Currently evaluating frontend &amp; WebRTC internship opportunities, full-time engineering roles, and selective contract systems.
              </p>

              {/* Direct Email Click-to-Copy Card */}
              <div
                onClick={handleCopyEmail}
                className="p-5 rounded-2xl bg-[#121216] border border-white/8 hover:border-[#e8821a]/50 cursor-pointer transition-all mb-8 group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <span className="font-mono text-xs text-[#ffaa44] flex items-center gap-1">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Click to copy</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-zinc-100 group-hover:text-[#ffaa44] transition-colors">
                  {siteConfig.author.email}
                </div>
              </div>
            </div>

            {/* Location & Real-Time Clock */}
            <div className="space-y-4 pt-6 border-t border-white/8">
              <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-[#e8821a]" />
                <span>{siteConfig.author.location}</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-[#e8821a]" />
                <span>Ahmedabad Local Time: <strong className="text-zinc-200">{currentTime || "IST"}</strong></span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typical response time: Within 24 hours</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#121216] border border-white/8 shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500 text-emerald-400 flex items-center justify-center text-2xl mx-auto shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-100">
                  Inquiry Dispatched!
                </h3>
                <p className="font-sans text-sm text-zinc-400 max-w-sm mx-auto">
                  Your email client has opened with your message. I look forward to connecting and will reply within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 font-mono text-xs transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from users to capture spam bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Chen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/8 focus:border-[#e8821a] text-zinc-100 placeholder-zinc-600 font-sans text-sm outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/8 focus:border-[#e8821a] text-zinc-100 placeholder-zinc-600 font-sans text-sm outline-none transition-colors"
                  />
                </div>

                {/* Project Type / Service */}
                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-2">
                    Project Type or Role *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/8 focus:border-[#e8821a] text-zinc-100 font-sans text-sm outline-none transition-colors"
                  >
                    <option value="Real-Time & WebRTC Applications">
                      Real-Time &amp; WebRTC Applications
                    </option>
                    <option value="High-Performance Frontend Systems">
                      High-Performance Frontend Systems
                    </option>
                    <option value="3D Visuals & Creative WebXR">
                      3D Visuals &amp; Creative WebXR
                    </option>
                    <option value="Internship / Full-Time Engineering Opportunity">
                      Internship / Full-Time Engineering Opportunity
                    </option>
                    <option value="Other Technical Collaboration">
                      Other Technical Collaboration
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-2">
                    Your Message / Project Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your vision, timeline, or engineering opportunity..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/8 focus:border-[#e8821a] text-zinc-100 placeholder-zinc-600 font-sans text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#e8821a] hover:bg-[#ffaa44] text-[#0a0a0c] font-display font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(232,130,26,0.3)] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Preparing..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
