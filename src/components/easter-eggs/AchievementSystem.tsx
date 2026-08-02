"use client";

import React, { useEffect } from "react";
import { isDarkMode } from "@components/theme/ThemeProvider";

type EggId = "dev-mode" | "sudo-hire" | "duck" | "line-numbers" | "star" | "caffeine" | "curious" | "root";

const ACHIEVEMENTS: Record<string, { title: string; message: string; hint: string }> = {
  "dev-mode": { title: "Achievement Unlocked", message: "Curious", hint: "Try the terminal next. Type help." },
  "sudo-hire": { title: "Achievement Unlocked", message: "Hacker", hint: "You are getting close to root access." },
  "duck": { title: "Achievement Unlocked", message: "Duck Hunter", hint: "Vim users know :set nu." },
  "line-numbers": { title: "Achievement Unlocked", message: "Vim User", hint: "Reload the page three times." },
  "star": { title: "Achievement Unlocked", message: "Stargazer", hint: "Wait for a shooting star at night." },
  "caffeine": { title: "Achievement Unlocked", message: "Caffeinated", hint: "You have been here a while. Try the Konami code." },
  "curious": { title: "Achievement Unlocked", message: "Curious", hint: "Keep exploring. There are more secrets." },
  "root": { title: "Achievement Unlocked", message: "Root Access", hint: "You have discovered everything. Welcome to the system." },
};

export default function AchievementSystem() {
  useEffect(() => {
    const found = new Set<EggId>();

    try {
      const saved = localStorage.getItem("dfkuro-eggs");
      if (saved) {
        const parsed = JSON.parse(saved) as EggId[];
        parsed.forEach((id) => found.add(id));
      }
    } catch { /* ignore */ }

    const unlock = (id: EggId) => {
      if (found.has(id)) return;
      found.add(id);

      try {
        localStorage.setItem("dfkuro-eggs", JSON.stringify(Array.from(found)));
      } catch { /* ignore */ }

      const achievement = ACHIEVEMENTS[id];
      if (!achievement) return;

      showToast(achievement.title, achievement.message, achievement.hint);
      spawnParticles();

      if (found.size >= 5 && !found.has("root")) {
        setTimeout(() => unlock("root"), 1500);
      }
      if (found.size === 1 && !found.has("curious")) {
        setTimeout(() => unlock("curious"), 800);
      }
    };

    const onAchievement = ((e: CustomEvent) => {
      unlock(e.detail as EggId);
    }) as EventListener;

    const onStar = () => unlock("star");
    const onDuck = () => unlock("duck");
    const onLineNumbers = () => unlock("line-numbers");
    const onCaffeine = () => unlock("caffeine");

    document.addEventListener("achievement-unlocked", onAchievement);
    document.addEventListener("star-seen", onStar);
    document.addEventListener("duck-found", onDuck);
    document.addEventListener("line-numbers-toggled", onLineNumbers);
    document.addEventListener("caffeine-triggered", onCaffeine);

    if (found.size >= 5) {
      unlock("root");
    }

    const reloads = Number(sessionStorage.getItem("dfkuro-reloads") || "0");
    sessionStorage.setItem("dfkuro-reloads", String(reloads + 1));
    if (reloads >= 2) {
      document.dispatchEvent(new CustomEvent("caffeine-triggered"));
    }

    return () => {
      document.removeEventListener("achievement-unlocked", onAchievement);
      document.removeEventListener("star-seen", onStar);
      document.removeEventListener("duck-found", onDuck);
      document.removeEventListener("line-numbers-toggled", onLineNumbers);
      document.removeEventListener("caffeine-triggered", onCaffeine);
    };
  }, []);

  return null;
}

function showToast(title: string, message: string, hint: string) {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed; bottom: 24px; right: 24px;
    padding: 16px 20px;
    background: #FFFFFF;
    color: #09090B;
    border: 1px solid #D9047A;
    border-radius: 12px;
    z-index: 10001;
    animation: toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-shadow: 0 0 24px rgba(217, 4, 122, 0.15);
    max-width: 280px;
  `;

  if (isDarkMode()) {
    toast.style.background = "#18181B";
    toast.style.color = "#FAFAFA";
    toast.style.borderColor = "#F04BA0";
    toast.style.boxShadow = "0 0 24px rgba(240, 75, 160, 0.18)";
  }

  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.gap = "10px";

  const icon = document.createElement("span");
  icon.textContent = "◆";
  icon.style.fontSize = "1rem";
  icon.style.color = isDarkMode() ? "#F04BA0" : "#D9047A";

  const text = document.createElement("div");
  text.innerHTML = `<div style="font-size:0.75rem;opacity:0.6;font-family:'JetBrains Mono',monospace;color:${isDarkMode() ? "#F04BA0" : "#D9047A"};">${title}</div><div style="font-size:0.9375rem;font-weight:500;">${message}</div>`;

  header.appendChild(icon);
  header.appendChild(text);

  const hintEl = document.createElement("div");
  hintEl.textContent = hint;
  hintEl.style.fontSize = "0.75rem";
  hintEl.style.color = "#71717A";
  hintEl.style.fontFamily = "'JetBrains Mono', monospace";
  hintEl.style.lineHeight = "1.4";
  hintEl.style.marginTop = "2px";
  hintEl.style.paddingTop = "6px";
  hintEl.style.borderTop = "1px solid #E4E4E7";

  toast.appendChild(header);
  toast.appendChild(hintEl);
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toast-out 0.3s ease forwards";
    setTimeout(() => toast.remove(), 350);
  }, 4500);
}

function spawnParticles() {
  const count = 20;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    const angle = (Math.PI * 2 * i) / count;
    const distance = 40 + Math.random() * 60;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    p.style.cssText = `
      position: fixed;
      bottom: 40px;
      right: 40px;
      width: ${3 + Math.random() * 3}px;
      height: ${3 + Math.random() * 3}px;
      background: ${isDarkMode() ? "#F04BA0" : "#D9047A"};
      border-radius: 50%;
      pointer-events: none;
      z-index: 10002;
      animation: particle-burst ${0.6 + Math.random() * 0.4}s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      transform: translate(0, 0);
    `;
    p.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${tx}px, ${ty}px)` },
      ],
      { duration: 600 + Math.random() * 400, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" }
    );
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}
