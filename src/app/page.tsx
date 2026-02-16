"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import HeroSection from "@/components/sections/hero";

// Lazy load heavy sections
const SkillsSection = dynamic(() => import("@/components/sections/skills"), { ssr: false });
const ExperienceSection = dynamic(() => import("@/components/sections/experience"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/sections/projects"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/contact"), { ssr: false });

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
