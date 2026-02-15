"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Only keep essential particle background effect
const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
  loading: () => null,
});

export default function AppOverlays() {
  return (
    <Suspense fallback={null}>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={30}
      />
    </Suspense>
  );
}
