"use client";

import React, { useState } from "react";
import { ChevronsUpDown, Moon, Sun, Menu, X, ExternalLink, FileText } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { navLinks, profileData } from "../data/portfolioData";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [appsMenuOpen, setAppsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const quickLinks = [
    { title: "Curriculum Vitae", desc: "View & download PDF resume", href: "/cv.pdf" },
    { title: "GitHub Profile", desc: "Source code & repositories", href: profileData.socials.github },
    { title: "LinkedIn", desc: "Professional network profile", href: profileData.socials.linkedin },
    { title: "FreshLink (Live)", desc: "Production deployed web app", href: "https://fresh-link-eight.vercel.app" },
    { title: "Send Email", desc: profileData.socials.email, href: `mailto:${profileData.socials.email}` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full min-h-16 backdrop-blur-md bg-[var(--rd-bg)]/90 border-b border-[var(--rd-border)] transition-colors duration-200">
      <div className="relative mx-auto flex h-16 max-w-[var(--rd-maxw)] items-center justify-between gap-4 px-[var(--rd-pad)]">
        {/* Left: Brand / Monogram with quick links dropdown */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setAppsMenuOpen(!appsMenuOpen)}
            className="inline-flex h-9 items-center gap-1.5 rounded-md px-2 text-sm font-medium transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--rd-accent)]"
            aria-label="Toggle quick navigation"
          >
            <span className="text-[1.1rem] font-semibold lowercase tracking-[-0.03em] text-[var(--rd-text)]">
              thien
            </span>
            <ChevronsUpDown className="h-3.5 w-3.5 text-[var(--rd-text-3)]" />
          </button>

          {/* Quick Dropdown */}
          {appsMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setAppsMenuOpen(false)}
              />
              <div className="absolute left-0 mt-2 z-50 w-64 rounded-xl border border-[var(--rd-border)] bg-[var(--rd-surface)] p-2 shadow-xl animate-in fade-in zoom-in-95 duration-150">
                <div className="px-2 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-[var(--rd-text-3)] font-mono">
                  Quick Navigation
                </div>
                <div className="grid gap-1">
                  {quickLinks.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={() => setAppsMenuOpen(false)}
                      className="group flex flex-col rounded-lg px-2.5 py-1.5 transition-colors hover:bg-[var(--rd-surface-2)]"
                    >
                      <div className="flex items-center justify-between text-[0.875rem] font-medium text-[var(--rd-text)]">
                        <span>{item.title}</span>
                        <ExternalLink className="h-3 w-3 opacity-40 group-hover:opacity-100" />
                      </div>
                      <span className="text-[0.75rem] text-[var(--rd-text-3)]">
                        {item.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[var(--rd-border)] bg-[var(--rd-surface)]/60 px-2 py-1 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`inline-flex h-7 items-center rounded-full px-3 text-[0.8125rem] font-medium tracking-[-0.01em] transition-all ${
                link.active
                  ? "bg-[var(--rd-surface-2)] text-[var(--rd-text)] font-semibold shadow-xs"
                  : "text-[var(--rd-text-3)] hover:text-[var(--rd-text)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* CV Button */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--rd-border)] bg-[var(--rd-surface)] px-3 text-[0.8125rem] font-medium text-[var(--rd-text)] hover:bg-[var(--rd-surface-2)] transition-colors shadow-2xs"
          >
            <FileText className="h-3.5 w-3.5 text-[var(--rd-accent)]" />
            Resume (PDF)
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--rd-border)] text-[var(--rd-text-2)] hover:text-[var(--rd-text)] hover:bg-[var(--rd-surface-2)] transition-colors focus-visible:outline-none"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          {/* Direct CTA Button */}
          <a
            href="#projects"
            className="hidden sm:inline-flex h-8 items-center justify-center rounded-full bg-[var(--rd-text)] px-3.5 text-[0.8125rem] font-medium tracking-[-0.01em] text-[var(--rd-bg)] transition-opacity hover:opacity-90 shadow-sm"
          >
            Projects
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden h-8 w-8 items-center justify-center rounded-md border border-[var(--rd-border)] text-[var(--rd-text-2)] hover:bg-[var(--rd-surface-2)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--rd-border)] bg-[var(--rd-surface)] px-[var(--rd-pad)] py-4">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[var(--rd-text)] hover:bg-[var(--rd-surface-2)]"
              >
                <span>{link.label}</span>
                {link.external && <ExternalLink className="h-3.5 w-3.5 text-[var(--rd-text-3)]" />}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-[var(--rd-accent)] bg-[var(--rd-surface-2)]"
            >
              <span>Download CV (PDF)</span>
              <FileText className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
