"use client";

import React, { useEffect, useState, useMemo } from "react";
import { siteConfig } from "@/content/site";
import { copyToClipboard } from "@/lib/utils";
import { Search, FolderGit2, Mail, FileText, Moon, Sun, ArrowRight, ExternalLink } from "lucide-react";

interface ActionItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "External";
  icon: React.ReactNode;
  handler: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  toggleTheme,
  theme,
}: {
  isOpen: boolean;
  onClose: () => void;
  toggleTheme: () => void;
  theme: string;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const actions: ActionItem[] = useMemo(
    () => [
      {
        id: "nav-viva",
        title: "Go to Flagship: VIVA Meeting Case Study",
        category: "Navigation",
        icon: <ArrowRight className="w-4 h-4 text-[#e8821a]" />,
        handler: () => {
          document.getElementById("viva")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-projects",
        title: "Browse Featured Projects Bento",
        category: "Navigation",
        icon: <ArrowRight className="w-4 h-4 text-[#e8821a]" />,
        handler: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-github",
        title: "View Live GitHub Proof of Work",
        category: "Navigation",
        icon: <ArrowRight className="w-4 h-4 text-[#e8821a]" />,
        handler: () => {
          document.getElementById("github")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-skills",
        title: "Inspect Skills & Tooling (No Percentage Bars)",
        category: "Navigation",
        icon: <ArrowRight className="w-4 h-4 text-[#e8821a]" />,
        handler: () => {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-timeline",
        title: "View Experience & Education Timeline",
        category: "Navigation",
        icon: <ArrowRight className="w-4 h-4 text-[#e8821a]" />,
        handler: () => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "nav-contact",
        title: "Jump to Contact & Inquiries",
        category: "Navigation",
        icon: <ArrowRight className="w-4 h-4 text-[#e8821a]" />,
        handler: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "act-copy-email",
        title: `Copy Email (${siteConfig.author.email})`,
        category: "Actions",
        icon: <Mail className="w-4 h-4 text-emerald-400" />,
        handler: async () => {
          await copyToClipboard(siteConfig.author.email);
          setToast("Email address copied to clipboard!");
          setTimeout(() => setToast(null), 3000);
        },
      },
      {
        id: "act-resume",
        title: "Download Résumé (PDF)",
        category: "Actions",
        icon: <FileText className="w-4 h-4 text-[#ffaa44]" />,
        handler: () => {
          window.open(siteConfig.author.resumeUrl, "_blank");
          onClose();
        },
      },
      {
        id: "act-theme",
        title: `Toggle Theme (Currently ${theme === "light" ? "Light" : "Dark"})`,
        category: "Actions",
        icon: theme === "light" ? <Moon className="w-4 h-4 text-zinc-300" /> : <Sun className="w-4 h-4 text-amber-400" />,
        handler: () => {
          toggleTheme();
        },
      },
      {
        id: "ext-github",
        title: "Open GitHub Profile (@Divyezh)",
        category: "External",
        icon: <FolderGit2 className="w-4 h-4 text-zinc-400" />,
        handler: () => {
          window.open(siteConfig.author.github, "_blank");
          onClose();
        },
      },
      {
        id: "ext-linkedin",
        title: "Connect on LinkedIn",
        category: "External",
        icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
        handler: () => {
          window.open(siteConfig.author.linkedin, "_blank");
          onClose();
        },
      },
    ],
    [onClose, theme, toggleTheme]
  );

  const filtered = useMemo(() => {
    if (!query) return actions;
    return actions.filter(
      (a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [actions, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i: number) => (i + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i: number) => (i - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].handler();
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#121216] border border-white/10 shadow-2xl overflow-hidden text-white"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none font-sans"
          />
          <kbd className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-zinc-400">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-zinc-500 font-mono text-xs">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item: ActionItem, index: number) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.handler}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isSelected ? "bg-[#e8821a]/15 text-[#ffaa44]" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0">{item.icon}</span>
                    <span className="font-sans text-xs md:text-sm font-medium">
                      {item.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0a0a0c]/80 border-t border-white/5 text-[11px] font-mono text-zinc-500">
          <span>Navigate: ↑ ↓</span>
          <span>Select: ↵</span>
          <span>Close: Esc</span>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-xs shadow-lg animate-bounce">
            {toast}
          </div>
        )}
      </div>

      {/* Backdrop click close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
