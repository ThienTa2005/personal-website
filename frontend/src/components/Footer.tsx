"use client";

import React from "react";
import { footerColumns, profileData } from "../data/portfolioData";
import { Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--rd-border)] bg-[var(--rd-bg-sub)] transition-colors duration-200">
      <div className="mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pt-14 pb-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-16">
          {/* Brand Info & Socials */}
          <div className="max-w-xs flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[var(--rd-text-3)]">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[var(--rd-text)] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[var(--rd-text)] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                aria-label="Email"
                className="hover:text-[var(--rd-text)] transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CV PDF"
                className="hover:text-[var(--rd-text)] transition-colors"
              >
                <FileText className="h-4 w-4" />
              </a>
            </div>

            <div className="text-xl font-bold tracking-tight text-[var(--rd-text)]">
              thien<span className="text-[var(--rd-accent)]">.dev</span>
            </div>

            <p className="text-xs text-[var(--rd-text-3)] leading-relaxed">
              Tạ Thanh Thiên — Four-year Information Technology student at Posts and Telecommunications Institute of Technology (PTIT).
            </p>

            <p className="text-xs font-mono text-[var(--rd-text-4)]">
              © {new Date().getFullYear()} Tạ Thanh Thiên. All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-3 text-[0.7rem] font-bold tracking-[0.14em] uppercase text-[var(--rd-accent-ink)] font-mono">
                  {col.title}
                </h4>
                <ul className="m-0 list-none p-0 flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[0.85rem] text-[var(--rd-text-2)] hover:text-[var(--rd-text)] transition-colors no-underline block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
