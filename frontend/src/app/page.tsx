import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import AlsoShipping from "../components/AlsoShipping";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--rd-bg)] text-[var(--rd-text)] transition-colors duration-200">
      <Header />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <AlsoShipping />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
