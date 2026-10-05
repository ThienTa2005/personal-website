"use client";

import React from "react";
import { alsoShippingProjects } from "../data/portfolioData";
import { ArrowRight } from "lucide-react";

export default function AlsoShipping() {
  return (
    <section className="mx-auto max-w-[var(--rd-maxw)] px-[var(--rd-pad)] pb-16">
      <div className="rounded-2xl border border-[var(--rd-border)] bg-[var(--rd-surface)]/50 p-6 sm:p-8 backdrop-blur-xs">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[0.72rem] font-bold tracking-[0.1em] text-[var(--rd-text-3)] uppercase font-mono">
            Also shipping
          </p>
          <a
            href="https://github.com/ThienTa2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-[var(--rd-text-2)] hover:text-[var(--rd-text)] transition-colors"
          >
            Explore all open source
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <ul className="m-0 flex list-none flex-wrap items-center gap-2 p-0">
          {alsoShippingProjects.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.description || item.name}
                className="group inline-flex items-center gap-2 rounded-lg border border-[var(--rd-border)] bg-[var(--rd-surface)] px-3 py-1.5 text-[0.8125rem] font-medium text-[var(--rd-text-2)] hover:text-[var(--rd-text)] hover:border-[var(--rd-text-3)] hover:shadow-xs transition-all duration-150"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[0.65rem] font-bold font-mono text-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.initials}
                </span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
