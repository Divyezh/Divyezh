export interface Skill {
  name: string;
  tooltip: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  points: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

export const siteConfig = {
  author: {
    name: "Divyesh Soni",
    role: "Full-Stack WebRTC & Frontend Engineer",
    rolesCycling: [
      "Full-Stack WebRTC Engineer",
      "Frontend Architecture Specialist",
      "Real-Time Systems & 3D Web Builder",
    ],
    positioning: "I build real-time, high-performance web products.",
    location: "Ahmedabad, India (Open to Remote)",
    timezone: "Asia/Kolkata",
    status: "Open to internships & freelance projects",
    education: "Integrated M.Sc. IT, Silver Oak University (Graduating 2026)",
    email: "sonidivyesh2004@gmail.com",
    github: "https://github.com/Divyezh",
    linkedin: "https://linkedin.com/in/divyesh-soni", // TODO: Add exact profile URL if different
    resumeUrl: "/resume.pdf", // TODO: Place actual resume PDF in /public/resume.pdf
  },

  proofStats: [
    { label: "Shipped Projects", value: "12+" },
    { label: "Years Engineering", value: "3+" },
    { label: "GitHub Repositories", value: "30+" },
  ],

  marqueeTechs: [
    { name: "WebRTC", badge: "P2P Mesh" },
    { name: "React 19", badge: "Core" },
    { name: "Next.js 15", badge: "App Router" },
    { name: "TypeScript", badge: "Strict" },
    { name: "Socket.io", badge: "Signaling" },
    { name: "Three.js", badge: "3D Graphics" },
    { name: "Tailwind v4", badge: "Styling" },
    { name: "Docker", badge: "Deploy" },
    { name: "Node.js", badge: "Runtime" },
  ],

  vivaCaseStudy: {
    title: "VIVA Meeting",
    tagline: "Ultra-Low Latency Peer-to-Peer Video Communication with Zero Friction",
    summary:
      "A state-of-the-art, open-source video communication suite built with native WebRTC, Socket.io, React 19, and Clerk Authentication without expensive third-party video SDKs.",
    liveDemoUrl: "https://github.com/Divyezh", // TODO: Live deployment URL if hosted
    sourceCodeUrl: "https://github.com/Divyezh/meeting-app", // TODO: Exact repo URL if public
    steps: [
      {
        phase: "01. The Problem",
        title: "Vendor Lock-In & Astronomical SDK Invoicing",
        description:
          "Traditional video conferencing platforms charge per-minute fees and enforce opaque, black-box tracking SDKs. I wanted to eliminate commercial SDK dependencies entirely by creating a native browser WebRTC peer-to-peer mesh that runs on open STUN infrastructure with zero usage billing.",
      },
      {
        phase: "02. Architecture",
        title: "Native P2P Mesh with Real-Time Socket Signaling",
        description:
          "Peers register with an event-driven Node.js & Socket.io signaling server. Session negotiation uses SDP offer/answer exchanges alongside Google public STUN servers for NAT traversal. Media channels stream directly peer-to-peer with no intermediary media server bottlenecks.",
      },
      {
        phase: "03. Core Capabilities",
        title: "Security, Voice Analytics & Screen Broadcasting",
        description:
          "Engineered an interactive Host Admission Waiting Room (knock-to-enter approval), real-time Web Audio API voice frequency visualizers for active-speaker detection, and lossless screen sharing with dynamic video track replacement.",
      },
      {
        phase: "04. Outcome & Benchmarks",
        title: "Zero SDK Cost & Production Latency",
        description:
          "Achieved direct peer-to-peer transmission with zero third-party platform licensing fees. Typical round-trip media packet latency is sub-30ms over standard fiber connections.",
      },
    ],
    codeSnippet: `// viva-peer-mesh.config.ts
import { VivaMeeting } from "@viva/webrtc-core";

export const vivaRoom = new VivaMeeting({
  signalingServer: "wss://signal.viva.dev",
  stunServers: ["stun:stun.l.google.com:19302"],
  topology: "full-mesh",
  audioAnalyser: {
    fftSize: 64,
    activeSpeakerThreshold: 0.25,
  },
  hostControls: {
    admissionKnockQueue: true,
    allowLosslessScreenShare: true,
  },
});`,
    metrics: [
      { label: "SDK Licensing Cost", value: "$0.00" },
      { label: "Signaling Transport", value: "Socket.io 4.8" },
      { label: "P2P Latency (Local)", value: "< 25ms" }, // TODO: Benchmark under varying network conditions
      { label: "UI Framework", value: "React 19.2" },
    ],
  },

  skills: [
    {
      title: "Real-Time Systems",
      description: "Low-latency network communication, signaling and peer-to-peer pipelines.",
      skills: [
        { name: "WebRTC", tooltip: "Direct peer-to-peer media mesh & data channels" },
        { name: "Socket.io", tooltip: "Real-time bidirectional signaling & room broadcasting" },
        { name: "STUN / TURN", tooltip: "NAT traversal and peer discovery protocols" },
        { name: "WebSockets", tooltip: "Raw bi-directional client-server streaming" },
      ],
    },
    {
      title: "Frontend Engineering",
      description: "Modern, reactive web applications built with type safety and smooth UI motion.",
      skills: [
        { name: "React 19", tooltip: "Concurrent features, Server Actions, and custom hooks" },
        { name: "Next.js 15", tooltip: "App Router, SSR, static export, and edge routing" },
        { name: "TypeScript", tooltip: "Strict type ergonomics and robust architectural interfaces" },
        { name: "Tailwind CSS v4", tooltip: "Fluid design tokens and responsive CSS architecture" },
        { name: "Motion (Framer)", tooltip: "Gesture handling, layout morphs, and spring dynamics" },
      ],
    },
    {
      title: "3D & Creative Web",
      description: "Hardware-accelerated visual computing and neural browser interfaces.",
      skills: [
        { name: "Three.js", tooltip: "WebGL scene graphs, lighting, materials, and shaders" },
        { name: "React Three Fiber", tooltip: "Declarative Three.js components and Zustand stores" },
        { name: "GSAP & ScrollTrigger", tooltip: "Pinned narrative timelines and scrubbed motion" },
        { name: "MediaPipe Vision", tooltip: "Real-time neural hand tracking and 6-DOF WebAR" },
      ],
    },
    {
      title: "Tooling & Infrastructure",
      description: "Modern deployment workflows, containers, and developer environments.",
      skills: [
        { name: "Docker", tooltip: "Multi-stage containerization for client & server" },
        { name: "Git & GitHub Actions", tooltip: "Automated CI/CD pipelines and static publishing" },
        { name: "Node.js & Express", tooltip: "RESTful microservices, WebSockets, and auth middleware" },
        { name: "Figma", tooltip: "UI design systems, wireframing, and component tokens" },
      ],
    },
  ],

  timeline: [
    {
      period: "2021 — 2026 (Expected)",
      role: "Integrated M.Sc. in Information Technology",
      organization: "Silver Oak University",
      location: "Ahmedabad, India",
      points: [
        "Focus on distributed systems, advanced web technologies, and software architecture.",
        "Authored research paper on automated full-stack web generation and LLM pipelines.",
      ],
    },
    {
      period: "2024 — Present",
      role: "Full-Stack WebRTC & Frontend Developer",
      organization: "Independent / Project Engineering",
      location: "Ahmedabad, India",
      points: [
        "Architected VIVA Meeting: a P2P video communication suite utilizing native WebRTC and Socket.io.",
        "Built MediCity: an autonomous 3D hospital logistics simulation powered by Next.js and Three.js.",
      ],
    },
    {
      period: "2023 — 2024",
      role: "Frontend Engineer (Client & Open Source)",
      organization: "Freelance & University Tech Labs",
      location: "Remote / Hybrid",
      points: [
        "Delivered responsive web applications and dashboards with modern React and Next.js.",
        "Engineered browser-based computer vision prototypes utilizing MediaPipe hand tracking.",
      ],
    },
  ],

  services: [
    {
      id: "webrtc",
      title: "Real-Time & WebRTC Applications",
      subtitle: "Zero-latency audio/video, collaborative canvases, and live data streaming.",
      description:
        "Custom peer-to-peer and mesh WebRTC architectures tailored for zero external SDK cost, enterprise security, and seamless device interoperability.",
      deliverables: [
        "Full P2P or SFU WebRTC pipeline",
        "Signaling server (Socket.io / WebSockets)",
        "Host admission & access moderation",
        "Screen share & audio frequency detection",
      ],
      timeline: "3 — 5 weeks",
    },
    {
      id: "frontend",
      title: "High-Performance Frontend Systems",
      subtitle: "Cinematic, accessible, and fast web applications built with Next.js 15 & React 19.",
      description:
        "Production-grade web apps built with strict TypeScript, tailored design systems, smooth layout animations, and 95+ Lighthouse performance scores.",
      deliverables: [
        "Next.js App Router architecture",
        "Tailored Tailwind CSS v4 design system",
        "Micro-animations & spring gestures",
        "WCAG AA accessibility & responsive layouts",
      ],
      timeline: "2 — 4 weeks",
    },
    {
      id: "3d-creative",
      title: "3D Visuals & Creative WebXR",
      subtitle: "Interactive 3D scenes, simulation environments, and neural hand tracking in the browser.",
      description:
        "Engaging 3D simulations and augmented reality experiences built with Three.js, React Three Fiber, and computer vision models running client-side.",
      deliverables: [
        "Optimized WebGL / Three.js scenes",
        "Interactive camera navigation & controls",
        "Real-time computer vision / MediaPipe integration",
        "Smooth fallback for low-power devices",
      ],
      timeline: "3 — 6 weeks",
    },
  ],

  testimonials: [] as Testimonial[], // TODO: Add verified client or peer recommendations when available
};
