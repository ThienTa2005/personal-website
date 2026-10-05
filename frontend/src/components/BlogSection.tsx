"use client";

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts, quickNotes } from "../data/portfolioData";

export default function BlogSection() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p !== featuredPost);

  return (
    <section className="mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pb-20">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--rd-border)] pb-3">
        <h2 className="m-0 text-[clamp(1.5rem,2.5vw,1.85rem)] font-semibold tracking-[-0.03em] leading-tight text-[var(--rd-text)]">
          Engineering notes
        </h2>
        <a
          href="https://github.com/ThienTa2005"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.875rem] font-medium text-[var(--rd-text-3)] hover:text-[var(--rd-text)] transition-colors"
        >
          github.com/ThienTa2005
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Grid: Featured article on Left, list of articles + quick notes on Right */}
      <div className="grid gap-6 min-[900px]:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
        {/* Left: Featured Article Card */}
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--rd-border)] bg-[var(--rd-surface)] shadow-xs transition-all hover:shadow-md">
          {/* Card Banner / Poster */}
          <div className="relative aspect-16/9 w-full overflow-hidden bg-[var(--rd-surface-2)] flex items-center justify-center">
            {/* Visual tech gradient & badge */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-black pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-2 p-6 text-center">
              <span className="rounded-full bg-blue-500/20 px-3 py-1 font-mono text-xs font-semibold text-blue-400 border border-blue-500/30">
                LATEST ESSAY
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {featuredPost.title}
              </h3>
            </div>
          </div>

          {/* Article Info */}
          <div className="flex flex-col gap-3 p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[var(--rd-surface-2)] px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wider uppercase text-[var(--rd-text)]">
                {featuredPost.category}
              </span>
              <span className="font-mono text-[0.75rem] text-[var(--rd-text-3)]">
                {featuredPost.date} · {featuredPost.readTime}
              </span>
            </div>

            <h3 className="m-0 text-xl font-semibold tracking-tight text-[var(--rd-text)] group-hover:text-[var(--rd-accent)] transition-colors">
              <a
                href={featuredPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-inherit"
              >
                {featuredPost.title}
              </a>
            </h3>

            <p className="m-0 line-clamp-3 text-[0.9rem] leading-relaxed text-[var(--rd-text-2)]">
              {featuredPost.summary}
            </p>

            <div className="mt-2">
              <a
                href={featuredPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--rd-accent)] hover:underline"
              >
                Read full article
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </article>

        {/* Right: Recent articles stack + Quick notes container */}
        <div className="flex min-w-0 flex-col gap-6">
          {/* Recent Articles */}
          <div className="overflow-hidden rounded-2xl border border-[var(--rd-border)] bg-[var(--rd-surface)] shadow-xs divide-y divide-[var(--rd-line)]">
            {regularPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="group p-4 sm:p-5 transition-colors hover:bg-[var(--rd-surface-2)]/40">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center rounded-full bg-[var(--rd-surface-2)] px-2 py-0.5 text-[0.65rem] font-semibold tracking-wider uppercase text-[var(--rd-text)]">
                    {post.category}
                  </span>
                  <span className="font-mono text-[0.72rem] text-[var(--rd-text-3)]">
                    {post.date} · {post.readTime}
                  </span>
                </div>

                <h4 className="m-0 text-[0.98rem] font-medium tracking-tight text-[var(--rd-text)] group-hover:text-[var(--rd-accent)] transition-colors">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-inherit"
                  >
                    {post.title}
                  </a>
                </h4>

                <p className="m-0 mt-1 line-clamp-2 text-[0.82rem] leading-relaxed text-[var(--rd-text-2)]">
                  {post.summary}
                </p>
              </article>
            ))}
          </div>

          {/* Quick Notes Box */}
          <div className="overflow-hidden rounded-2xl border border-[var(--rd-border)] bg-[var(--rd-surface)] shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--rd-border)] px-4 py-3 bg-[var(--rd-surface-2)]/30">
              <span className="text-[0.72rem] font-bold tracking-[0.1em] text-[var(--rd-text-3)] uppercase font-mono">
                Certifications & Honors
              </span>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.75rem] font-medium text-[var(--rd-text-2)] hover:text-[var(--rd-text)]"
              >
                View CV →
              </a>
            </div>

            <ul className="m-0 list-none p-0 divide-y divide-[var(--rd-line)]">
              {quickNotes.map((note) => (
                <li key={note.title}>
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 px-4 py-3 text-inherit no-underline hover:bg-[var(--rd-surface-2)]/50 transition-colors"
                  >
                    <span className="truncate text-[0.85rem] font-medium text-[var(--rd-text)]">
                      {note.title}
                    </span>
                    <span className="font-mono text-[0.7rem] text-[var(--rd-text-3)] shrink-0">
                      {note.date}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
