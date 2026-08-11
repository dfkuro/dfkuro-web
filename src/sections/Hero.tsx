"use client";

import React, { useEffect, useRef } from "react";
import { t } from "@i18n";

interface HeroProps {
  lang: string;
}

export default function Hero({ lang }: HeroProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const target = parseInt(el.dataset.target || "0", 10);
    let current = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(target / (duration / 16)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              if (el) el.textContent = String(current);
            }, 16);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden" aria-label="Hero">
      <div className="container max-w-narrow relative z-10">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-magic animate-pulse-dot" aria-hidden="true" />
          <span className="caption text-text-muted">{t(lang as any, "hero.meta")}</span>
          <span className="text-text-muted opacity-50" aria-hidden="true">·</span>
          <span className="caption text-magic font-medium" aria-hidden="true">(dfkuro)</span>
        </div>

        <h1 className="display text-text mb-6">
          <span className="inline-flex items-center gap-[0.18em]">
            {t(lang as any, "hero.headline")}
          </span>
          <br />
          <span className="display-secondary text-magic font-normal">{t(lang as any, "hero.headlineAccent")}</span>
        </h1>

        <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-[560px]">
          {t(lang as any, "hero.subtitle")}
          <br className="hidden sm:inline" />
          {t(lang as any, "hero.subtitleLine2")}
        </p>

        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }} aria-hidden="true">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xl sm:text-2xl font-medium text-text tracking-tight leading-none">
              <span ref={counterRef} className="counter-target" data-target="12">0</span>
            </span>
            <span className="font-mono text-overline uppercase tracking-wider text-text-muted">{lang === "en" ? "Years" : "Años"}</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xl sm:text-2xl font-medium text-text tracking-tight leading-none">
              40<span className="text-magic text-sm">+</span>
            </span>
            <span className="font-mono text-overline uppercase tracking-wider text-text-muted">{lang === "en" ? "Projects" : "Proyectos"}</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xl sm:text-2xl font-medium text-text tracking-tight leading-none">
              30k<span className="text-magic text-sm">+</span>
            </span>
            <span className="font-mono text-overline uppercase tracking-wider text-text-muted">{lang === "en" ? "Daily Users" : "Usuarios"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
