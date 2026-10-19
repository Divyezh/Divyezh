import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/content/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-[#ffaa44] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        <div className="mb-6">
          <span className="font-mono text-xs text-[#ffaa44] uppercase tracking-wider block mb-2">
            {project.category}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="font-sans text-base sm:text-lg text-zinc-400 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-black border border-white/8 shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/8 mb-12">
          <div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-1">
              Category
            </span>
            <span className="font-sans text-sm font-semibold text-zinc-200">
              {project.category}
            </span>
          </div>
          <div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-1">
              Role
            </span>
            <span className="font-sans text-sm font-semibold text-zinc-200">
              {project.role.split("—")[0]}
            </span>
          </div>
          <div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-1">
              Primary Stack
            </span>
            <span className="font-sans text-sm font-semibold text-zinc-200">
              {project.techStack.slice(0, 3).join(", ")}
            </span>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-zinc-100 mb-3">
              The Problem &amp; Context
            </h2>
            <p className="font-sans text-base text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-zinc-100 mb-3">
              Engineering Architecture &amp; Contributions
            </h2>
            <p className="font-sans text-base text-zinc-300 leading-relaxed">
              {project.role}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-zinc-100 mb-4">
              Key Results &amp; Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((res, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#121216] border border-white/8">
                  <div className="text-[#e8821a] font-bold text-lg mb-1">0{i + 1}</div>
                  <div className="font-sans text-sm text-zinc-300">{res}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e8821a] text-[#0a0a0c] font-display font-bold text-sm hover:bg-[#ffaa44] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Application</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-zinc-200 font-display font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Inspect Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
