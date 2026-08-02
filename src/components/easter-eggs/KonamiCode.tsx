"use client";

import React, { useEffect, useState } from "react";
import { useKonamiCode } from "@composables/konamiCode";

export default function KonamiCode() {
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    const cleanup = useKonamiCode(() => {
      setDevMode((prev) => {
        const next = !prev;
        showToast(next ? "DevTools Enabled" : "DevTools Disabled");

        if (next) {
          document.dispatchEvent(new CustomEvent("achievement-unlocked", { detail: "dev-mode" }));
          addFpsCounter();
        } else {
          removeFpsCounter();
        }

        return next;
      });
    });
    return cleanup;
  }, []);

  return (
    <style jsx global>{`
      .dev-mode * {
        outline: 1px solid #D9047A !important;
        box-shadow: 0 0 4px rgba(217, 4, 122, 0.10) !important;
      }
      .dev-mode *:hover {
        outline: 2px solid #D9047A !important;
        box-shadow: 0 0 8px rgba(217, 4, 122, 0.10) !important;
      }
      .dark .dev-mode * {
        outline: 1px solid #F04BA0 !important;
        box-shadow: 0 0 4px rgba(240, 75, 160, 0.15) !important;
      }
      .dark .dev-mode *:hover {
        outline: 2px solid #F04BA0 !important;
        box-shadow: 0 0 8px rgba(240, 75, 160, 0.15) !important;
      }
    `}</style>
  );
}

function showToast(message: string) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; top: 20px; right: 20px;
    padding: 10px 16px; background: #18181B; color: #FAFAFA;
    border-radius: 8px; font-size: 0.875rem; font-weight: 500; z-index: 10001;
    font-family: 'JetBrains Mono', monospace;
    animation: toast-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "toast-out 0.2s ease forwards";
    setTimeout(() => toast.remove(), 200);
  }, 2000);
}

function addFpsCounter() {
  if (document.getElementById("fps-counter")) return;
  const fps = document.createElement("div");
  fps.id = "fps-counter";
  fps.style.cssText = `
    position: fixed; top: 20px; left: 20px;
    padding: 6px 10px; background: #18181B; color: #FAFAFA;
    border-radius: 6px; font-size: 0.75rem; font-family: 'JetBrains Mono', monospace;
    z-index: 10001; pointer-events: none;
  `;
  document.body.appendChild(fps);

  let lastTime = performance.now();
  let frames = 0;
  const loop = () => {
    frames++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
      fps.textContent = `${frames} FPS`;
      frames = 0;
      lastTime = now;
    }
    if (document.body.classList.contains("dev-mode")) {
      requestAnimationFrame(loop);
    } else {
      fps.remove();
    }
  };
  requestAnimationFrame(loop);
}

function removeFpsCounter() {
  const fps = document.getElementById("fps-counter");
  if (fps) fps.remove();
}
