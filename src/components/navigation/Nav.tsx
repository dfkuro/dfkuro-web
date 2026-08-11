"use client";

import React, { useEffect, useRef, useState } from "react";
import { t } from "@i18n";
import { siteConfig } from "@config/site";
import LangSwitcher from "./LangSwitcher";
import ThemeToggle from "@components/theme/ThemeToggle";
import Icon from "@components/ui/Icon";

interface NavProps {
  lang: string;
}

export default function Nav({ lang }: NavProps) {
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    setIsApple(/Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent));
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const progressBar = progressRef.current;
    if (!nav || !progressBar) return;

    const update = () => {
      const scrolled = window.scrollY > 50;
      nav.classList.toggle("is-scrolled", scrolled);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
      progressBar.style.transform = `scaleX(${p})`;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    update();

    const links = nav.querySelectorAll<HTMLElement>(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("data-section") === id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { label: t(lang as any, "nav.about"), href: "#about" },
    { label: t(lang as any, "nav.experience"), href: "#experience" },
    { label: t(lang as any, "nav.stack"), href: "#stack" },
    { label: t(lang as any, "nav.values"), href: "#values" },
    { label: t(lang as any, "nav.currently"), href: "#currently" },
    { label: t(lang as any, "nav.contact"), href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      id="main-nav"
      className="nav-glass fixed top-0 left-0 right-0 z-[1000] py-3 transition-all duration-normal ease-out-quart"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 font-mono font-medium text-base text-text no-underline tracking-tight" aria-label="Home">
          <img src="/favicon.svg" alt="" aria-hidden="true" className="w-6 h-6 rounded-md shrink-0" />
          <span>izmir</span>
          <span className="w-1.5 h-1.5 rounded-full bg-magic animate-pulse-dot" aria-hidden="true" />
          <span className="text-xs text-magic ml-1 opacity-85 hover:opacity-100 transition-opacity duration-fast" aria-hidden="true">(dfkuro)</span>
        </a>

        <ul className="hidden md:flex list-none gap-6 items-center" role="menubar">
          {navItems.map((item) => (
            <li role="none" key={item.href}>
              <a
                href={item.href}
                className="nav-link link-underline text-sm font-medium text-text-secondary transition-colors duration-fast ease-out-quart py-1"
                role="menuitem"
                data-section={item.href.replace("#", "")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1" role="group" aria-label="Social profiles">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex items-center justify-center w-8 h-8 rounded-sm text-text-secondary transition-all duration-fast ease-out-quart hover:text-magic hover:bg-magic-soft"
            >
              <Icon name="github" size={17} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex items-center justify-center w-8 h-8 rounded-sm text-text-secondary transition-all duration-fast ease-out-quart hover:text-magic hover:bg-magic-soft"
            >
              <Icon name="linkedin" size={17} />
            </a>
          </div>
          <ThemeToggle />
          <LangSwitcher lang={lang} />
          <button
            id="cmd-palette-trigger"
            className="hidden md:inline-flex items-center gap-1 px-3 py-2 border border-border rounded-sm bg-surface cursor-pointer transition-all duration-fast ease-out-quart hover:border-magic hover:shadow-glow-sm"
            type="button"
            aria-label="Open command palette"
            title={`${isApple ? "Cmd" : "Ctrl"}+K`}
            onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
          >
            <kbd className="font-mono text-xs text-text-muted bg-transparent">{isApple ? "⌘" : "Ctrl"}</kbd>
            <kbd className="font-mono text-xs text-text-muted bg-transparent">K</kbd>
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-0.5 pointer-events-none">
        <div
          ref={progressRef}
          className="h-full w-full bg-magic origin-left will-change-transform shadow-glow-sm"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </nav>
  );
}
