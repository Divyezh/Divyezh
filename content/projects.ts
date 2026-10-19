export type ProjectCategory = "All" | "Real-time" | "AI" | "Client work" | "3D";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "Real-time" | "AI" | "Client work" | "3D";
  outcome: string;
  featured?: boolean;
  coverImage: string;
  techStack: string[];
  problem: string;
  role: string;
  results: string[];
  liveUrl?: string; // TODO: live link placeholder
  githubUrl?: string; // TODO: repo link placeholder
}

export const projectsData: Project[] = [
  {
    slug: "viva-meeting",
    title: "VIVA Meeting",
    tagline: "Ultra-low latency Peer-to-Peer video conferencing suite with zero commercial SDK dependencies.",
    category: "Real-time",
    outcome: "Eliminated commercial video SDK fees with native WebRTC mesh & host knocking room.",
    featured: true,
    coverImage: "/projects/viva-preview.jpg",
    techStack: ["React 19", "WebRTC", "Socket.io", "Tailwind v4", "Clerk Auth", "Docker"],
    problem:
      "Commercial video SDKs impose steep per-minute fees, black-box tracking, and vendor lock-in for small teams and startups requiring video calling.",
    role: "Lead Full-Stack WebRTC Engineer — Designed P2P mesh network, signaling protocol, active-speaker frequency analyser, and waiting room queue.",
    results: [
      "Zero dollar SDK licensing costs by utilizing Google public STUN and native WebRTC.",
      "Instant admission knocking queue for granular host conference moderation.",
      "Lossless screen sharing with dynamic video track renegotiation.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with live production URL
    githubUrl: "https://github.com/Divyezh/meeting-app", // TODO: Update with exact repo URL
  },
  {
    slug: "medicity-3d",
    title: "MediCity 3D Campus",
    tagline: "High-fidelity autonomous 3D hospital campus simulation and logistics management.",
    category: "3D",
    outcome: "Real-time hospital logistics with Three.js, procedural routing, and React 19.",
    featured: true,
    coverImage: "/projects/medicity-preview.jpg",
    techStack: ["Next.js 16", "React 19", "Three.js", "React Three Fiber", "Zustand", "Tailwind CSS"],
    problem:
      "Hospital operations and campus logistics require intuitive visual triage and routing for medical transport and department capacity.",
    role: "3D Graphics & Frontend Architect — Built isometric scene graph, ambulance dispatch pathfinding, and responsive camera controls.",
    results: [
      "Smooth 60 FPS 3D rendering in browser using lightweight instanced geometries.",
      "Dynamic department status monitor with synchronized Zustand store.",
      "Custom joystick and keyboard camera navigation with elevation controls.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with live URL
    githubUrl: "https://github.com/Divyezh", // TODO: Update with repo URL
  },
  {
    slug: "ar-hologram",
    title: "AR-Hologram WebXR",
    tagline: "Neural browser augmented reality with real-time 21-point palm tracking and procedural VFX.",
    category: "3D",
    outcome: "Zero-latency 6-DOF holographic companion anchoring to hand kinematics via MediaPipe.",
    featured: true,
    coverImage: "/projects/arhologram-preview.jpg",
    techStack: ["WebGL", "Three.js", "MediaPipe Vision", "React", "TypeScript"],
    problem:
      "Augmented reality usually requires installing heavy native apps or specialized hardware headsets instead of running instantly in standard browsers.",
    role: "Computer Vision & WebGL Engineer — Implemented GPU-accelerated palm landmark detection and procedural magic ring shader math.",
    results: [
      "Real-time 21 hand landmarks detected via browser GPU acceleration.",
      "Calculated palm normal vector quaternion for 6-DOF holographic anchoring.",
      "Zero installation required; runs across modern mobile and desktop browsers.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with live demo URL
    githubUrl: "https://github.com/Divyezh", // TODO: Update with repo URL
  },
  {
    slug: "velvet-ai",
    title: "VELVET.AI",
    tagline: "AI-powered website builder SaaS featuring live code sandbox and streaming LLM synthesis.",
    category: "AI",
    outcome: "Instant natural language to full-stack website generation with real-time sandbox preview.",
    coverImage: "/projects/viva-preview.jpg", // TODO: Replace with dedicated VELVET.AI screenshot
    techStack: ["Next.js", "TypeScript", "Nvidia AI (Mixtral)", "Monaco Editor", "Tailwind"],
    problem:
      "Creating modern, interactive landing pages is slow for non-technical founders, while existing builders produce bloated, cookie-cutter code.",
    role: "Full-Stack Engineer — Built streaming LLM generation handler, virtual sandbox execution sandbox, and in-browser code editor.",
    results: [
      "Sub-second streaming code generation with automated dependency resolution.",
      "Sandboxed iframe preview with live hot-reloading.",
      "Export ready clean HTML/Tailwind bundles.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with live URL
    githubUrl: "https://github.com/Divyezh", // TODO: Update with repo URL
  },
  {
    slug: "ojas-hospital",
    title: "Ojas Hospital Redesign",
    tagline: "Modern healthcare web portal redesign with appointment scheduling and department routing.",
    category: "Client work",
    outcome: "Fast, accessible patient portal reducing booking friction with clean Next.js architecture.",
    coverImage: "/projects/medicity-preview.jpg", // TODO: Replace with Ojas Hospital screenshot
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    problem:
      "Outdated legacy hospital site caused high patient drop-off and slow loading on mobile connections.",
    role: "Frontend Consultant — Redesigned information architecture, appointment booking UX, and accessibility.",
    results: [
      "98+ mobile Lighthouse score with optimized asset loading.",
      "Clear emergency department routing and doctor availability directory.",
      "WCAG AA accessible color contrast and screen-reader support.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with client URL
    githubUrl: "https://github.com/Divyezh", // TODO: Update with repo URL
  },
  {
    slug: "dairyworld-expo",
    title: "Dairyworld Expo",
    tagline: "B2B trade exhibition portal with exhibitor directory, floor map, and visitor registration.",
    category: "Client work",
    outcome: "Digital trade show platform handling thousands of attendee inquiries and exhibitor listings.",
    coverImage: "/projects/viva-preview.jpg", // TODO: Replace with Dairyworld screenshot
    techStack: ["React", "Node.js", "Express", "Tailwind CSS"],
    problem:
      "Trade expo required an intuitive directory where attendees can explore hundreds of stalls and register before visiting.",
    role: "Frontend Developer — Built interactive hall directory, responsive search filters, and lead capture form.",
    results: [
      "Automated lead capture system directly exporting attendee inquiries.",
      "Fast stall lookup with category filtering and interactive map markers.",
      "Zero downtime throughout peak exhibition weekend.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with live exhibition URL
    githubUrl: "https://github.com/Divyezh", // TODO: Update with repo URL
  },
  {
    slug: "one8-sneaker-3d",
    title: "one8 3D Experience",
    tagline: "Cinematic, scroll-driven 3D product showcase for premium athletic footwear.",
    category: "3D",
    outcome: "Immersive 360-degree interactive sneaker model with exploded material view and scroll animations.",
    coverImage: "/projects/arhologram-preview.jpg", // TODO: Replace with sneaker 3D screenshot
    techStack: ["Three.js", "React Three Fiber", "GSAP ScrollTrigger", "Tailwind CSS"],
    problem:
      "Standard 2D product photos fail to communicate athletic shoe cushioning technology, ergonomics, and material craft.",
    role: "Creative Technologist — Built GLTF model loader, material shaders, and scroll-linked exploded views.",
    results: [
      "Interactive 360-degree rotation and zoom on mobile and desktop.",
      "Scroll-driven camera choreography inspecting midsole foam and mesh upper.",
      "Optimized texture compression ensuring fast load under 2 seconds.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with demo URL
    githubUrl: "https://github.com/Divyezh", // TODO: Update with repo URL
  },
  {
    slug: "arijit-singh-radio",
    title: "Arijit Singh Radio",
    tagline: "Cinematic audio visualizer and tribute web experience with custom ambient wave shaders.",
    category: "Client work",
    outcome: "High-retention musical web sanctuary featuring responsive audio analysis and vinyl physics.",
    coverImage: "/projects/viva-preview.jpg", // TODO: Replace with Arijit Radio screenshot
    techStack: ["React", "Web Audio API", "Framer Motion", "Tailwind CSS"],
    problem:
      "Music fans sought an ambient, distraction-free listening experience with synchronized audio waveforms.",
    role: "Frontend Developer — Designed dark cinematic UI, Web Audio API frequency visualizer, and custom playback controls.",
    results: [
      "Dynamic reactive audio frequency visualizer rendering at 60 FPS.",
      "Smooth playlist queue management with custom ambient lighting.",
      "Responsive audio streaming across desktop and mobile browsers.",
    ],
    liveUrl: "https://github.com/Divyezh", // TODO: Update with live URL
    githubUrl: "https://github.com/Divyezh", // TODO: Update with repo URL
  },
];
