"use client";

import React, { useEffect, useRef, useState } from "react";

interface Node {
  id: number;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  isHost?: boolean;
  isSignal?: boolean;
}

interface Packet {
  from: number;
  to: number;
  progress: number;
  speed: number;
  color: string;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export default function MeshHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activePeer, setActivePeer] = useState<string>("Host (You)");
  const [packetsCount, setPacketsCount] = useState<number>(0);
  const [rtt, setRtt] = useState<number>(18);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initial 6 nodes
    const nodes: Node[] = [
      { id: 0, label: "HOST", sublabel: "Admit Queue", baseX: 0.25, baseY: 0.28, x: 0, y: 0, radius: 26, color: "#22c55e", isHost: true },
      { id: 1, label: "SIGNAL", sublabel: "Socket.io", baseX: 0.5, baseY: 0.48, x: 0, y: 0, radius: 34, color: "#e8821a", isSignal: true },
      { id: 2, label: "PEER A", sublabel: "Audio Track", baseX: 0.78, baseY: 0.26, x: 0, y: 0, radius: 24, color: "#ffaa44" },
      { id: 3, label: "PEER B", sublabel: "Screen Share", baseX: 0.18, baseY: 0.72, x: 0, y: 0, radius: 24, color: "#f4f4f5" },
      { id: 4, label: "PEER C", sublabel: "Data Channel", baseX: 0.82, baseY: 0.74, x: 0, y: 0, radius: 24, color: "#f4f4f5" },
      { id: 5, label: "STUN", sublabel: "Google NAT", baseX: 0.5, baseY: 0.86, x: 0, y: 0, radius: 22, color: "#e8821a" },
    ];

    // Compute pixel positions
    const updateNodePositions = (mx: number, my: number) => {
      nodes.forEach((n) => {
        const targetX = n.baseX * width + (mx - width / 2) * 0.04;
        const targetY = n.baseY * height + (my - height / 2) * 0.04;
        n.x += (targetX - n.x) * 0.1;
        n.y += (targetY - n.y) * 0.1;
      });
    };

    // Connections between peers
    const edges: [number, number][] = [
      [0, 1], [2, 1], [3, 1], [4, 1], [5, 1],
      [0, 2], [0, 3], [2, 4], [3, 4], [3, 5], [4, 5],
    ];

    // Active packets traveling along edges
    const packets: Packet[] = [
      { from: 0, to: 1, progress: 0.1, speed: 0.012, color: "#ffaa44" },
      { from: 1, to: 2, progress: 0.6, speed: 0.015, color: "#ffaa44" },
      { from: 2, to: 4, progress: 0.3, speed: 0.01, color: "#22c55e" },
      { from: 3, to: 0, progress: 0.7, speed: 0.014, color: "#ffaa44" },
      { from: 5, to: 1, progress: 0.4, speed: 0.009, color: "#e8821a" },
    ];

    const ripples: Ripple[] = [];

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Trigger ripple
      ripples.push({ x: clickX, y: clickY, radius: 5, alpha: 1 });

      // Check if node clicked
      nodes.forEach((n) => {
        const dx = clickX - n.x;
        const dy = clickY - n.y;
        if (Math.hypot(dx, dy) < n.radius + 10) {
          setActivePeer(`${n.label} (${n.sublabel})`);
          setRtt(Math.floor(14 + Math.random() * 8));
          // Spawn extra packets from clicked node
          edges
            .filter(([a, b]) => a === n.id || b === n.id)
            .forEach(([a, b]) => {
              const target = a === n.id ? b : a;
              packets.push({
                from: n.id,
                to: target,
                progress: 0,
                speed: 0.02,
                color: "#ffaa44",
              });
            });
        }
      });
    };
    canvas.addEventListener("click", handleClick);

    // Initial positioning
    nodes.forEach((n) => {
      n.x = n.baseX * width;
      n.y = n.baseY * height;
    });

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      updateNodePositions(mouseX, mouseY);

      // 1. Draw Mesh Edges
      ctx.lineWidth = 1;
      edges.forEach(([fromId, toId]) => {
        const n1 = nodes[fromId];
        const n2 = nodes[toId];
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = "rgba(232, 130, 26, 0.16)";
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Draw & Update Packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          setPacketsCount((c: number) => c + 1);
        }

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        const px = n1.x + (n2.x - n1.x) * p.progress;
        const py = n1.y + (n2.y - n1.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw & Update Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 2.5;
        r.alpha -= 0.025;
        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 130, 26, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 4. Draw Nodes
      nodes.forEach((n) => {
        // Node halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232, 130, 26, 0.04)";
        ctx.fill();

        // Node main circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#121216";
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = "#f4f4f5";
        ctx.font = "bold 11px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y + 4);

        // Sublabel below
        ctx.fillStyle = "#71717a";
        ctx.font = "9.5px 'JetBrains Mono', monospace";
        ctx.fillText(n.sublabel, n.x, n.y + n.radius + 14);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] md:h-[500px] rounded-2xl bg-[#121216] border border-white/8 overflow-hidden shadow-2xl flex flex-col">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-[#0a0a0c]/60 backdrop-blur-sm z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-xs text-zinc-500 ml-2">
            webrtc-mesh-topology.canvas
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1a1a20] border border-[#e8821a]/30 font-mono text-[10px] text-[#ffaa44]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            P2P MESH ACTIVE
          </span>
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="relative flex-1 cursor-pointer">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute top-3 left-4 pointer-events-none">
          <p className="font-mono text-[11px] text-zinc-400">
            Selected: <span className="text-[#ffaa44] font-semibold">{activePeer}</span>
          </p>
        </div>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none text-zinc-500 font-mono text-[11px]">
          <span>RTT: <strong className="text-emerald-400">{rtt}ms</strong></span>
          <span>Jitter: <strong className="text-emerald-400">1.8ms</strong></span>
          <span>Packets: <strong className="text-zinc-300">{packetsCount}</strong></span>
          <span className="hidden sm:inline text-zinc-600">Click node for ripple</span>
        </div>
      </div>
    </div>
  );
}
