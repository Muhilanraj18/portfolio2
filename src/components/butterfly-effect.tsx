"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Butterfly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  wingAngle: number;
  wingSpeed: number;
  color: string;
  opacity: number;
}

const ButterflyEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const butterfliesRef = useRef<Butterfly[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Colors based on theme
    const colors = theme === "dark" 
      ? ["#60A5FA", "#A78BFA", "#F472B6", "#FBBF24", "#34D399"]
      : ["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981"];

    // Initialize butterflies
    const initButterflies = () => {
      butterfliesRef.current = [];
      const count = Math.min(Math.floor(window.innerWidth / 50), 15); // Max 15 butterflies
      
      for (let i = 0; i < count; i++) {
        butterfliesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 8 + 4,
          wingAngle: 0,
          wingSpeed: Math.random() * 0.15 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.4 + 0.3,
        });
      }
    };
    initButterflies();

    // Mouse tracking with smooth interpolation
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Draw butterfly shape
    const drawButterfly = (butterfly: Butterfly) => {
      const { x, y, size, wingAngle, color, opacity } = butterfly;

      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;

      // Body
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.2, size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Wings
      const wingOpen = Math.sin(wingAngle) * 0.5 + 0.5;
      const wingWidth = size * (0.8 + wingOpen * 0.4);
      const wingHeight = size * 0.6;

      // Left wing
      ctx.beginPath();
      ctx.ellipse(-size * 0.3, -size * 0.2, wingWidth, wingHeight, -Math.PI / 6, 0, Math.PI * 2);
      const gradientL = ctx.createRadialGradient(-size * 0.3, -size * 0.2, 0, -size * 0.3, -size * 0.2, wingWidth);
      gradientL.addColorStop(0, color);
      gradientL.addColorStop(0.7, color + "CC");
      gradientL.addColorStop(1, color + "00");
      ctx.fillStyle = gradientL;
      ctx.fill();

      // Right wing
      ctx.beginPath();
      ctx.ellipse(size * 0.3, -size * 0.2, wingWidth, wingHeight, Math.PI / 6, 0, Math.PI * 2);
      const gradientR = ctx.createRadialGradient(size * 0.3, -size * 0.2, 0, size * 0.3, -size * 0.2, wingWidth);
      gradientR.addColorStop(0, color);
      gradientR.addColorStop(0.7, color + "CC");
      gradientR.addColorStop(1, color + "00");
      ctx.fillStyle = gradientR;
      ctx.fill();

      // Antennae
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-size * 0.1, -size * 0.5);
      ctx.lineTo(-size * 0.2, -size * 0.7);
      ctx.moveTo(size * 0.1, -size * 0.5);
      ctx.lineTo(size * 0.2, -size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    // Update butterfly physics with smooth 120 FPS interpolation
    const updateButterfly = (butterfly: Butterfly, delta: number) => {
      // Update wing animation
      butterfly.wingAngle += butterfly.wingSpeed * delta;

      // Attraction to mouse (gentle)
      const dx = mouseRef.current.x - butterfly.x;
      const dy = mouseRef.current.y - butterfly.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 200 && dist > 0) {
        const force = 0.0003 * delta;
        butterfly.vx += (dx / dist) * force;
        butterfly.vy += (dy / dist) * force;
      }

      // Random wandering
      butterfly.vx += (Math.random() - 0.5) * 0.02 * delta;
      butterfly.vy += (Math.random() - 0.5) * 0.02 * delta;

      // Gentle upward drift
      butterfly.vy -= 0.001 * delta;

      // Friction for smooth motion
      butterfly.vx *= 0.99;
      butterfly.vy *= 0.99;

      // Speed limit
      const speed = Math.sqrt(butterfly.vx * butterfly.vx + butterfly.vy * butterfly.vy);
      if (speed > 2) {
        butterfly.vx = (butterfly.vx / speed) * 2;
        butterfly.vy = (butterfly.vy / speed) * 2;
      }

      // Update position
      butterfly.x += butterfly.vx * delta;
      butterfly.y += butterfly.vy * delta;

      // Wrap around edges
      if (butterfly.x < -50) butterfly.x = canvas.width + 50;
      if (butterfly.x > canvas.width + 50) butterfly.x = -50;
      if (butterfly.y < -50) butterfly.y = canvas.height + 50;
      if (butterfly.y > canvas.height + 50) butterfly.y = -50;
    };

    // Animation loop optimized for 120 FPS
    let lastTime = performance.now();
    let animationId: number;

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);

      // Delta time for smooth 120 FPS
      const delta = Math.min((currentTime - lastTime) / (1000 / 120), 2);
      lastTime = currentTime;

      // Clear canvas with trailing effect for smoothness
      ctx.fillStyle = theme === "dark" ? "rgba(15, 23, 42, 0.1)" : "rgba(241, 245, 249, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw butterflies
      butterfliesRef.current.forEach((butterfly) => {
        updateButterfly(butterfly, delta);
        drawButterfly(butterfly);
      });

      frameRef.current++;
    };

    animate(performance.now());

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        mixBlendMode: theme === "dark" ? "screen" : "multiply",
        opacity: 0.6,
      }}
    />
  );
};

export default ButterflyEffect;
