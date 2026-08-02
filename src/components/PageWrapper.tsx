"use client";

import React, { useEffect } from "react";
import { isDarkMode } from "@components/theme/ThemeProvider";

interface PageWrapperProps {
  lang: string;
  children: React.ReactNode;
}

export default function PageWrapper({ lang, children }: PageWrapperProps) {
  useEffect(() => {
    // Footer year triple-click → duck
    const yearEl = document.querySelector(".footer-year");
    const onYearClick = (e: Event) => {
      if ((e as MouseEvent).detail === 3) {
        spawnDuck();
      }
    };
    yearEl?.addEventListener("click", onYearClick);

    // Footer vim hint → line numbers
    const vimHint = document.querySelector(".footer-vim-hint");
    const onVimClick = () => {
      toggleLineNumbers();
    };
    vimHint?.addEventListener("click", onVimClick);

    // Reload tracker
    const reloads = Number(sessionStorage.getItem("dfkuro-reloads") || "0");
    sessionStorage.setItem("dfkuro-reloads", String(reloads + 1));
    if (reloads >= 3) {
      const statusBadge = document.querySelector(".status-badge");
      const statusDot = document.querySelector(".status-dot");
      if (statusBadge) {
        statusBadge.classList.remove("badge-magic");
        statusBadge.classList.add("badge-default");
        statusBadge.innerHTML = '<span class="status-dot status-dot--fast" aria-hidden="true"></span> Critical';
      }
      if (statusDot) {
        statusDot.classList.add("status-dot--fast");
      }
    }

    return () => {
      yearEl?.removeEventListener("click", onYearClick);
      vimHint?.removeEventListener("click", onVimClick);
    };
  }, []);

  return <>{children}</>;
}

function spawnDuck() {
  const duck = document.createElement("div");
  duck.innerHTML = `
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.5 14.5c-.5 1.5-1.5 2.5-3 2.5s-2.5-1-2.5-2.5c0-1.5 1.5-2.5 3-2.5.5 0 1 .1 1.5.3.5-.6 1-1.3 1.5-2 .5.5 1 1 1.5 1.5 1.5-2 3-3 5-3 2 0 3.5 1 3.5 3 0 2-1.5 3.5-3 4.5-1.5 1-3 1.5-4.5 1.5-1.5 0-2.5-.5-3-1.5-.5 1-1.5 1.5-2.5 1.5s-1.5-.5-1.5-1.5c0-1 1-1.5 2-1.5.5 0 1 .2 1.5.5z"/>
    </svg>
  `;
  duck.style.cssText = `
    position: fixed; bottom: 60px; left: -40px; z-index: 9999;
    color: ${isDarkMode() ? "#F04BA0" : "#D9047A"}; pointer-events: none;
    animation: duck-swim 10s linear forwards;
  `;
  document.body.appendChild(duck);
  document.dispatchEvent(new CustomEvent("duck-found"));
  setTimeout(() => duck.remove(), 10500);
}

function toggleLineNumbers() {
  const sections = document.querySelectorAll("section[id]");
  const hasNumbers = document.querySelector(".line-number") !== null;

  if (hasNumbers) {
    document.querySelectorAll(".line-number").forEach((el) => el.remove());
    return;
  }

  sections.forEach((section, i) => {
    const num = document.createElement("span");
    num.className = "line-number";
    num.textContent = String(i + 1).padStart(2, "0");
    num.style.cssText = `
      position: absolute; left: -40px; top: 0;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;
      color: ${isDarkMode() ? "#F04BA0" : "#D9047A"}; opacity: 0.5;
    `;
    (section as HTMLElement).style.position = "relative";
    section.appendChild(num);
  });

  document.dispatchEvent(new CustomEvent("line-numbers-toggled"));

  setTimeout(() => {
    document.querySelectorAll(".line-number").forEach((el) => el.remove());
  }, 5000);
}
