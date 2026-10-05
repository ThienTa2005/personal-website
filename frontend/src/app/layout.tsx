import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiên — Java Backend & Full-Stack Developer | PTIT",
  description:
    "Portfolio of Tạ Thanh Thiên (Thiên) — Four-year IT student at Posts and Telecommunications Institute of Technology (PTIT) specializing in Java Spring Boot, React, and Full-Stack Development.",
  keywords: [
    "Thiên",
    "Tạ Thanh Thiên",
    "Java Developer",
    "Spring Boot",
    "Backend Developer",
    "PTIT",
    "ReactJS",
    "Portfolio",
  ],
  authors: [{ name: "Tạ Thanh Thiên", url: "https://github.com/ThienTa2005" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/ThienTa2005",
    title: "Thiên — Java Backend & Full-Stack Developer",
    description:
      "Four-year Information Technology student at PTIT. Java Spring Boot, React, MySQL, RESTful APIs, and AI models.",
    siteName: "thien.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Thiên Portfolio",
        url: "https://github.com/ThienTa2005",
        inLanguage: "vi",
      },
      {
        "@type": "Person",
        name: "Tạ Thanh Thiên",
        alternateName: "Thiên",
        url: "https://github.com/ThienTa2005",
        jobTitle: "Java Backend & Full-Stack Developer",
        alumniOf: "Posts and Telecommunications Institute of Technology",
        email: "thien24112005@gmail.com",
        sameAs: [
          "https://github.com/ThienTa2005",
          "https://www.linkedin.com/in/t%E1%BA%A1-thi%C3%AAn-a14a82390/",
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <head>
        {/* Anti-flash script for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--rd-bg)] text-[var(--rd-text)] selection:bg-blue-500/20">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
