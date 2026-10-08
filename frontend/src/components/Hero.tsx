"use client";

import React from "react";
import { profileData } from "../data/portfolioData";
import { FileText, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        {/* Left Column: Headlines, Bio, and Socials */}
        <div className="min-w-0 max-w-[46rem]">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 mb-4 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Software Engineer / Backend Internship
          </div>

          <h1 className="m-0 flex flex-col gap-2">
            <span className="font-semibold tracking-[-0.035em] leading-[1.05] text-[clamp(2.4rem,6vw,4.2rem)] text-[var(--rd-text)]">
              {profileData.title}
            </span>
            <span className="text-[clamp(1.05rem,1.7vw,1.25rem)] font-medium tracking-[-0.02em] leading-snug text-[var(--rd-text-2)]">
              {profileData.subtitle}
            </span>
          </h1>

          {/* Narrative bio paragraphs */}
          <div className="mt-6 grid max-w-[62ch] gap-3 text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed text-[var(--rd-text-2)]">
            {profileData.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Social and Contact Links */}
          <nav className="mt-7 flex flex-wrap items-center gap-3 text-[0.875rem]" aria-label="Social connections">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--rd-text)] border-b border-[var(--rd-border)] pb-0.5 transition-colors hover:text-[var(--rd-accent)] hover:border-[var(--rd-accent)]"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              ThienTa2005
            </a>
            <span className="text-[var(--rd-text-4)] select-none">|</span>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--rd-text)] border-b border-[var(--rd-border)] pb-0.5 transition-colors hover:text-[var(--rd-accent)] hover:border-[var(--rd-accent)]"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Tạ Thiên
            </a>
            <span className="text-[var(--rd-text-4)] select-none">|</span>
            <a
              href={`mailto:${profileData.socials.email}`}
              className="inline-flex items-center gap-1.5 font-medium text-[var(--rd-text)] border-b border-[var(--rd-border)] pb-0.5 transition-colors hover:text-[var(--rd-accent)] hover:border-[var(--rd-accent)]"
            >
              <Mail className="h-3.5 w-3.5" />
              {profileData.socials.email}
            </a>
            <span className="text-[var(--rd-text-4)] select-none">|</span>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--rd-accent)] border-b border-[var(--rd-accent)] pb-0.5 hover:opacity-80 transition-opacity"
            >
              <FileText className="h-3.5 w-3.5" />
              CV (PDF)
            </a>
          </nav>
        </div>

        {/* Right Column: Architectural Monogram Icon */}
        <div className="justify-self-start md:justify-self-end">
          <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 items-center justify-center rounded-2xl border border-[var(--rd-border)] bg-[var(--rd-surface)] p-6 shadow-sm">
            {/* Geometric "T" Monogram SVG */}
            <svg
              viewBox="0 0 64 64"
              className="h-full w-full object-contain text-[var(--rd-text)] transition-transform hover:scale-105 duration-300"
              fill="currentColor"
              role="img"
              aria-label="Thien Monogram"
            >
              {/* Horizontal top bar of T */}
              <rect x="8" y="10" width="48" height="12" rx="3" />
              {/* Vertical stem of T */}
              <rect x="26" y="24" width="12" height="30" rx="3" />
              {/* Accent dot/geometry */}
              <rect x="42" y="38" width="12" height="16" rx="2" className="text-[var(--rd-accent)]" />
              <rect x="10" y="38" width="12" height="16" rx="2" opacity="0.3" />
            </svg>
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1 rounded-full border border-[var(--rd-border)] bg-[var(--rd-bg-sub)] px-2.5 py-0.5 text-[0.65rem] font-mono text-[var(--rd-text-3)] shadow-2xs">
              <span className="font-semibold text-emerald-500">PTIT</span>
              <span>• D23</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
