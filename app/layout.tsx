import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/content/site";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divyesh Soni — Full-Stack WebRTC & Frontend Engineer",
  description:
    "I build real-time, high-performance web products. Creator of VIVA Meeting (WebRTC P2P mesh), MediCity 3D, and AR-Hologram.",
  keywords: [
    "Divyesh Soni",
    "WebRTC Engineer",
    "Frontend Developer",
    "React 19",
    "Next.js 15",
    "VIVA Meeting",
    "Peer-to-Peer",
    "Three.js",
    "Ahmedabad",
  ],
  authors: [{ name: "Divyesh Soni", url: siteConfig.author.github }],
  openGraph: {
    title: "Divyesh Soni — Full-Stack WebRTC & Frontend Engineer",
    description: "I build real-time, high-performance web products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.author.github,
    sameAs: [siteConfig.author.github, siteConfig.author.linkedin],
    knowsAbout: [
      "WebRTC",
      "React 19",
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Three.js",
      "Tailwind CSS",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0c] text-[#f4f4f5] antialiased selection:bg-[#e8821a] selection:text-black">
        <Preloader />
        <ScrollProgressBar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
