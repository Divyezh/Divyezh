import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 flex flex-col items-center justify-center p-4 text-center">
      <span className="font-mono text-sm text-[#ffaa44] mb-2">[ 404: PEER NOT FOUND ]</span>
      <h1 className="font-display text-5xl sm:text-7xl font-bold mb-4">Route Disconnected</h1>
      <p className="font-sans text-sm text-zinc-400 max-w-md mb-8">
        The requested pathway or project resource could not be negotiated across the signaling mesh.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e8821a] text-[#0a0a0c] font-display font-bold text-xs"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Signal Gateway</span>
      </Link>
    </div>
  );
}
