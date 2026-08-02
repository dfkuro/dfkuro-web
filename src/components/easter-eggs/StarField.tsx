"use client";

import React, { useEffect, useRef } from "react";
import { isDarkMode } from "@components/theme/ThemeProvider";

export default function StarField() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasShot = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    timerRef.current = setTimeout(() => {
      if (hasShot.current) return;
      hasShot.current = true;

      const star = document.createElement("div");
      star.style.cssText = `
        position: fixed; top: 10vh; left: -10vw;
        width: 120px; height: 2px;
        background: linear-gradient(90deg, transparent, #fff, ${isDarkMode() ? "#F04BA0" : "#D9047A"}, transparent);
        transform: rotate(-45deg);
        animation: star-shoot 0.8s linear forwards;
        z-index: 9997; pointer-events: none; opacity: 0;
      `;
      document.body.appendChild(star);

      setTimeout(() => {
        document.dispatchEvent(new CustomEvent("star-seen"));
        star.remove();
      }, 1000);
    }, 9000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return null;
}
