"use client";

import React, { useEffect, useState } from "react";
import { getGitHubData, GitHubData } from "@/lib/github";
import fallbackData from "@/content/github.json";
import { FolderGit2, GitBranch, GitCommit, Star, ExternalLink } from "lucide-react";

export default function GitHubSection() {
  const [data, setData] = useState<GitHubData>(fallbackData);

  useEffect(() => {
    getGitHubData().then(setData);
  }, []);

  return (
    <section id="github" className="py-24 border-t border-white/8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#ffaa44]" />
            PROOF OF WORK
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            Open Source &amp; Activity
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            Real code, public repositories, and verifiable contributions on GitHub.
          </p>
        </div>

        {/* 3 Metric Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-[#121216] border border-white/8">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">Total Stars</span>
              <Star className="w-4 h-4 text-[#ffaa44]" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-100">
              {data.totalStars}+
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#121216] border border-white/8">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">Public Repos</span>
              <FolderGit2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-100">
              {data.totalRepos}+
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#121216] border border-white/8">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">Commits (2026)</span>
              <GitCommit className="w-4 h-4 text-[#e8821a]" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-100">
              {data.commitsThisYear}+
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#121216] border border-white/8">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="font-mono text-xs">Pull Requests</span>
              <GitBranch className="w-4 h-4 text-sky-400" />
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-100">
              {data.pullRequests}+
            </div>
          </div>
        </div>

        {/* Heatmap & Languages Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left: Custom Amber Heatmap Display */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#121216] border border-white/8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-base font-semibold text-zinc-100">
                Annual Contribution Stream
              </h3>
              <span className="font-mono text-[11px] text-zinc-500">Live API</span>
            </div>

            {/* Custom SVG Amber Activity Graph */}
            <div className="w-full overflow-x-auto">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${data.username}&theme=react-dark&hide_border=true&bg_color=121216&color=FFAA44&line=E8821A&point=FFFFFF`}
                alt="GitHub Contribution Graph"
                className="w-full min-w-[500px] rounded-lg"
              />
            </div>
          </div>

          {/* Right: Languages Breakdown Bar */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#121216] border border-white/8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-base font-semibold text-zinc-100 mb-4">
                Top Languages
              </h3>
              <div className="flex h-3 w-full rounded-full overflow-hidden mb-6 bg-white/5">
                {data.topLanguages.map((l) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.percentage}%`, backgroundColor: l.color }}
                    title={`${l.name}: ${l.percentage}%`}
                  />
                ))}
              </div>

              <div className="space-y-3">
                {data.topLanguages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                      <span className="text-zinc-300">{l.name}</span>
                    </div>
                    <span className="text-zinc-500">{l.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/6 mt-6">
              <a
                href={`https://github.com/${data.username}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 font-sans text-xs font-semibold transition-colors"
              >
                <span>View Full GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#121216] border border-white/8 hover:border-[#e8821a]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#ffaa44] font-semibold flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
                </div>
                <p className="font-sans text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/6 font-mono text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-zinc-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
