"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, Project, ProjectCategory } from "@/content/projects";
import { ArrowUpRight, Github, X, Sparkles } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ["All", "Real-time", "AI", "Client work", "3D"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-t border-white/8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#ffaa44]" />
              FEATURED WORKS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
              Selected Projects
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121216] p-1.5 rounded-2xl border border-white/8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-sans text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#e8821a] text-[#0a0a0c] shadow-[0_0_12px_rgba(232,130,26,0.35)]"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              onClick={() => setActiveModalProject(project)}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#121216] border border-white/8 hover:border-[#e8821a]/50 p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,130,26,0.15)] cursor-pointer overflow-hidden"
            >
              <div>
                {/* Cover Image Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-[#0a0a0c] border border-white/6">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 font-mono text-[10px] text-[#ffaa44]">
                    {project.category}
                  </div>
                </div>

                {/* Card Title & Outcome */}
                <h3 className="font-display text-xl font-bold text-zinc-100 mb-2 group-hover:text-[#ffaa44] transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[#ffaa44] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.outcome}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/4 font-mono text-[10.5px] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-0.5 rounded bg-white/4 font-mono text-[10.5px] text-zinc-500">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121216] border border-white/10 p-6 md:p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/5 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-[#ffaa44] uppercase tracking-wider block mb-2">
              {activeModalProject.category} Case Study
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              {activeModalProject.title}
            </h2>
            <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6">
              {activeModalProject.tagline}
            </p>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black border border-white/8">
              <Image
                src={activeModalProject.coverImage}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-display text-sm font-semibold text-zinc-200 mb-1">
                  The Problem
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-400">
                  {activeModalProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-zinc-200 mb-1">
                  My Engineering Role
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-400">
                  {activeModalProject.role}
                </p>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-zinc-200 mb-2">
                  Key Outcomes &amp; Architectural Results
                </h4>
                <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-zinc-300">
                  {activeModalProject.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#e8821a] font-bold">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/8 mb-6">
              {activeModalProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#1a1a20] border border-white/6 font-mono text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#e8821a] text-[#0a0a0c] font-display font-bold text-xs text-center hover:bg-[#ffaa44] transition-colors"
                >
                  View Deployment
                </a>
              )}
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-white/10 text-zinc-200 font-display font-semibold text-xs text-center hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
