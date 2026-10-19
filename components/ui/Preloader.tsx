"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if shown this session
    const hasLoaded = sessionStorage.getItem("portfolio_preloader_seen");
    if (hasLoaded) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("portfolio_preloader_seen", "true");
    }, 1500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVisible(false);
        sessionStorage.setItem("portfolio_preloader_seen", "true");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSkip = () => {
    setVisible(false);
    sessionStorage.setItem("portfolio_preloader_seen", "true");
  };

  const nameLetters = "DIVYESH SONI".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0c] text-white"
        >
          <div className="flex items-center gap-1.5 md:gap-3 overflow-hidden mb-6">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * i,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`font-display text-3xl md:text-5xl font-bold tracking-tight ${
                  letter === " " ? "w-3 md:w-5" : ""
                } ${i >= 8 ? "text-[#e8821a]" : "text-zinc-100"}`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-center gap-2 font-mono text-xs text-zinc-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>INITIALIZING WEBRTC MESH &amp; ASSETS...</span>
          </motion.div>

          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 font-mono text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
          >
            Skip [Esc]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
