"use client";

import { useEffect, useRef } from "react";
import { designTokens } from "@/config/design-tokens";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer || !cursorRef.current) {
      return;
    }

    const cursor = cursorRef.current;
    const body = document.body;
    body.classList.add("custom-cursor-enabled");

    const onMove = (event: MouseEvent) => {
      cursor.style.left = `${event.pageX}px`;
      cursor.style.top = `${event.pageY}px`;

      const trail = document.createElement("div");
      trail.className = "vector-point";

      const palette = designTokens.colors.cursorTrailPalette;
      const color = palette[Math.floor(Math.random() * palette.length)];
      const min = designTokens.cursor.minTrailSizePx;
      const max = designTokens.cursor.maxTrailSizePx;
      const size = Math.random() * (max - min) + min;

      trail.style.left = `${event.pageX}px`;
      trail.style.top = `${event.pageY}px`;
      trail.style.width = `${size}px`;
      trail.style.height = `${size}px`;
      trail.style.backgroundColor = color;

      body.appendChild(trail);

      window.setTimeout(() => {
        trail.style.opacity = "0";
        trail.addEventListener(
          "transitionend",
          () => {
            trail.remove();
          },
          { once: true }
        );
      }, designTokens.motion.cursorTrailDelayMs);
    };

    document.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      body.classList.remove("custom-cursor-enabled");
      document.querySelectorAll(".vector-point").forEach((node) => node.remove());
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
