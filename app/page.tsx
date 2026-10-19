"use client";

import React, { useEffect, useState } from "react";
import StickyNav from "@/components/ui/StickyNav";
import CommandPalette from "@/components/ui/CommandPalette";
import Hero from "@/components/sections/Hero";
import CaseStudy from "@/components/sections/CaseStudy";
import Projects from "@/components/sections/Projects";
import GitHubSection from "@/components/sections/GitHubSection";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Real-Time & WebRTC Applications");

  // Load persisted theme
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("ds_portfolio_theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      }
    } catch {
      // fallback
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("ds_portfolio_theme", nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
    } catch {
      // ignore
    }
  };

  // Keyboard shortcut for Cmd/Ctrl+K and Easter Egg typing "viva"
  useEffect(() => {
    let keyBuffer = "";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K opens command palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }

      // Easter egg: check for typing "viva"
      if (!["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        keyBuffer += e.key.toLowerCase();
        if (keyBuffer.length > 10) {
          keyBuffer = keyBuffer.slice(-10);
        }
        if (keyBuffer.endsWith("viva")) {
          document.getElementById("viva")?.scrollIntoView({ behavior: "smooth" });
          keyBuffer = "";
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-100 flex flex-col justify-between selection:bg-[#e8821a] selection:text-black">
      <StickyNav
        theme={theme}
        toggleTheme={toggleTheme}
        openCommandPalette={() => setCommandPaletteOpen(true)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        toggleTheme={toggleTheme}
        theme={theme}
      />

      <Hero />
      <CaseStudy />
      <Projects />
      <GitHubSection />
      <Skills />
      <Timeline />
      <Services onSelectService={(s) => setSelectedService(s)} />
      <Contact preselectedService={selectedService} />
      <Footer />
    </main>
  );
}
