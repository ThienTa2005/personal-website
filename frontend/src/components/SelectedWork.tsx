"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { selectedProjects } from "../data/portfolioData";
import { Project } from "../types/portfolio";

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const activeProject: Project = selectedProjects[activeIndex] || selectedProjects[0];

  // Optional subtle auto-rotation if user isn't hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % selectedProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="projects" className="mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pt-4 pb-16">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-[var(--rd-border)] pb-3">
        <h2 className="m-0 text-[clamp(1.5rem,2.5vw,1.85rem)] font-semibold tracking-[-0.03em] leading-tight text-[var(--rd-text)]">
          Selected work
        </h2>
        <a
          href="https://github.com/ThienTa2005?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.875rem] font-medium text-[var(--rd-text-3)] hover:text-[var(--rd-text)] transition-colors"
        >
          All repositories
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Grid: Left interactive list + Right sticky showcase */}
      <div
        className="grid items-start gap-8 min-[900px]:grid-cols-[minmax(0,min(24rem,42%))_minmax(0,1fr)] lg:gap-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Left Column: Interactive Projects List */}
        <div className="flex min-w-0 flex-col">
          <ol className="m-0 flex list-none flex-col p-0 divide-y divide-[var(--rd-line)]">
            {selectedProjects.map((project, idx) => {
              const isActive = idx === activeIndex;

              return (
                <li key={project.id} className="py-2.5 first:pt-0 last:pb-0">
                  <div
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveIndex(idx);
                      }
                    }}
                    className={`group grid w-full cursor-pointer grid-cols-[1.4rem_minmax(0,1fr)] gap-x-2 text-left rounded-lg p-2 transition-all duration-150 ${
                      isActive ? "bg-[var(--rd-surface-2)]/60" : "hover:bg-[var(--rd-surface-2)]/30"
                    }`}
                    style={{ ["--work-tone" as any]: project.toneColor }}
                  >
                    {/* Number index */}
                    <span
                      className={`pt-0.5 font-mono text-[0.72rem] tracking-wider transition-colors ${
                        isActive ? "font-bold text-[var(--work-tone)]" : "text-[var(--rd-text-4)]"
                      }`}
                    >
                      {project.number}
                    </span>

                    {/* Content */}
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                          {/* Mini Badge Icon */}
                          <span
                            className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] text-[0.6rem] font-bold text-white shadow-2xs"
                            style={{ backgroundColor: project.toneColor }}
                          >
                            {project.logoText || project.name.slice(0, 2).toUpperCase()}
                          </span>
                          <span
                            className={`text-[0.9375rem] tracking-[-0.02em] font-medium transition-colors ${
                              isActive ? "text-[var(--rd-text)] font-semibold" : "text-[var(--rd-text)]"
                            }`}
                          >
                            {project.name}
                          </span>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <span
                            className="text-[0.7rem] font-semibold tracking-wider uppercase opacity-80"
                            style={{ color: project.toneColor }}
                          >
                            {project.category}
                          </span>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex h-6 w-6 items-center justify-center rounded text-[var(--rd-text-3)] hover:text-[var(--rd-text)] hover:bg-[var(--rd-surface)] transition-all"
                            aria-label={`Open ${project.name}`}
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Expandable active details */}
                      {isActive && (
                        <div className="mt-2 animate-in fade-in duration-200">
                          <p className="line-clamp-2 text-[0.8125rem] leading-relaxed text-[var(--rd-text-2)]">
                            {project.description}
                          </p>

                          {project.blogPostTitle && (
                            <div className="mt-1.5">
                              <a
                                href={project.blogPostUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[0.75rem] font-medium hover:underline"
                                style={{ color: project.toneColor }}
                              >
                                {project.blogPostTitle}
                                <ArrowUpRight className="h-3 w-3 inline" />
                              </a>
                            </div>
                          )}

                          {/* Animated Progress Rail Indicator */}
                          <div className="mt-3 block h-[2px] w-full overflow-hidden bg-[var(--rd-border)] rounded-full">
                            <span
                              key={`progress-${activeIndex}`}
                              className="block h-full origin-left animate-work-rail rounded-full"
                              style={{
                                backgroundColor: project.toneColor,
                                animationDuration: "6000ms",
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Right Column: Sticky Visual Showcase Card */}
        <div className="block h-auto w-full max-[899px]:order-first min-[900px]:sticky min-[900px]:top-24">
          <div
            className="group relative overflow-hidden rounded-2xl border border-[var(--rd-border)] bg-[var(--rd-surface)] shadow-lg transition-all duration-300"
            style={{ ["--work-tone" as any]: activeProject.toneColor }}
          >
            {/* Visual Header / Generative Abstract Art Canvas */}
            <div
              className="relative aspect-video sm:aspect-16/10 w-full overflow-hidden flex items-center justify-center transition-colors duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, ${activeProject.toneColor} 30%, #0a0a0a) 0%, #0a0a0a 100%)`,
              }}
            >
              {/* Geometric pattern grid background */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(${activeProject.toneColor} 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* High-tech central logo presentation */}
              <div className="relative z-10 flex flex-col items-center gap-3 p-6 text-center transform group-hover:scale-105 transition-transform duration-300">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-2xl border border-white/20"
                  style={{
                    backgroundColor: activeProject.toneColor,
                    boxShadow: `0 0 35px color-mix(in srgb, ${activeProject.toneColor} 60%, transparent)`,
                  }}
                >
                  {activeProject.logoText || activeProject.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                    {activeProject.name}
                  </h3>
                  <p className="text-xs font-mono tracking-wider uppercase text-white/70 mt-0.5">
                    {activeProject.category}
                  </p>
                </div>
              </div>

              {/* Sub-card overlay */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start gap-2 bg-gradient-to-t from-black/95 via-black/75 to-transparent px-5 pt-12 pb-5 text-white">
                <p className="m-0 line-clamp-3 text-[0.85rem] leading-relaxed text-zinc-300">
                  {activeProject.description}
                </p>

                {activeProject.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/10 px-2 py-0.5 text-[0.65rem] font-mono tracking-wide text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-2 text-[0.8125rem]">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-white hover:underline"
                  >
                    Visit {activeProject.domain}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-zinc-500">•</span>
                  <span className="font-mono text-xs text-zinc-400">
                    Production Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
