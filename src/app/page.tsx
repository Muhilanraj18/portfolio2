"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

// Lazy load the heavy 3D component
const AnimatedBackground = dynamic(
  () => import("@/components/animated-background"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full fixed bg-gradient-to-b from-transparent to-background/10" />
    ),
  }
);

function MainPage() {
  const [showBackground, setShowBackground] = useState(false);

  // Load 3D background after initial content is visible
  useEffect(() => {
    const timer = setTimeout(() => setShowBackground(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      {showBackground && <AnimatedBackground />}
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
