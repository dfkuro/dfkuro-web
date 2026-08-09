"use client";

import React, { useEffect, useRef } from "react";
import { t } from "@i18n";

interface StackProps {
  lang: string;
}

const maxYears = 12;

const shelves = [
  {
    key: "frontend",
    techs: [
      { name: "TypeScript", years: 4 },
      { name: "React", years: 8 },
      { name: "React Native", years: 6 },
      { name: "Next.js", years: 2 },
      { name: "Astro", years: 2 },
    ],
  },
  {
    key: "backend",
    techs: [
      { name: "Node.js", years: 10 },
      { name: "NestJS", years: 2 },
      { name: "Fastify", years: 2 },
      { name: "PHP", years: 4 },
    ],
  },
  {
    key: "database",
    techs: [
      { name: "PostgreSQL", years: 8 },
      { name: "MySQL", years: 10 },
    ],
  },
  {
    key: "devops",
    techs: [
      { name: "Docker", years: 2 },
      { name: "GitHub Actions", years: 3 },
      { name: "Linux", years: 12 },
    ],
  },
  {
    key: "mobile",
    techs: [
      { name: "Expo", years: 4 },
      { name: "Electron", years: 3 },
    ],
  },
  {
    key: "architecture",
    techs: [
      { name: "Clean Architecture", years: 6 },
      { name: "SOLID", years: 3 },
      { name: "CI/CD", years: 4 },
    ],
  },
];

export default function Stack({ lang }: StackProps) {
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const target = bar.dataset.width || "0%";
            bar.style.width = "0%";
            requestAnimationFrame(() => {
              bar.style.width = target;
            });
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );

    barsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" className="py-24" aria-label="Stack">
      <div className="container">
        <span className="caption block mb-4">{t(lang as any, "stack.label")}</span>
        <h2 className="h2 text-text mb-2 max-w-[480px]">{t(lang as any, "stack.title")}</h2>
        <p className="text-body-sm text-text-secondary mb-12 max-w-[560px]">{t(lang as any, "stack.subtitle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {shelves.map((shelf) => (
            <div
              key={shelf.key}
              className="flex flex-col gap-4 p-6 bg-surface border border-border rounded-lg transition-all duration-normal ease-out-quart hover:border-border-hover hover:shadow-glow-sm"
            >
              <div className="flex flex-col gap-2 pb-4 border-b border-border">
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {t(lang as any, `stack.domains.${shelf.key}.name` as any)}
                </h3>
                <p className="text-sm leading-snug text-text-secondary">
                  {t(lang as any, `stack.domains.${shelf.key}.description` as any)}
                </p>
              </div>

              <ul className="list-none flex flex-col gap-3" role="list">
                {shelf.techs.map((tech) => {
                  const barWidth = `${(tech.years / maxYears) * 100}%`;
                  const isSenior = tech.years >= 6;
                  return (
                    <li key={tech.name} className="grid grid-cols-[1fr_60px_auto] md:grid-cols-[1fr_80px_auto] gap-3 items-center py-2" role="listitem">
                      <span className="text-body-sm font-medium text-text truncate">{tech.name}</span>
                      <div className="flex items-center">
                        <div className="w-full h-[3px] bg-border rounded-full overflow-hidden">
                          <div
                            ref={(el) => {
                              if (el) barsRef.current.push(el);
                            }}
                            data-width={barWidth}
                            className="h-full bg-magic rounded-full transition-all duration-slow ease-out-expo min-w-[2px]"
                            style={{ width: barWidth }}
                          />
                        </div>
                      </div>
                      <span className={`font-mono text-label text-right min-w-[32px] ${isSenior ? "text-magic font-medium" : "text-text-muted"}`}>
                        {tech.years}{lang === "en" ? "y" : "a"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-[640px] p-6 bg-surface border border-border rounded-lg border-l-2 border-l-magic">
          <p className="text-body-sm leading-relaxed text-text-secondary">
            {lang === "en"
              ? "Every technology listed above has been used in production. No \"played with it once\" entries. No tutorial projects. Only tools that have shipped real software to real users."
              : 'Cada tecnología listada arriba ha sido usada en producción. No hay entradas de "lo probé una vez". No hay proyectos de tutorial. Solo herramientas que han desplegado software real a usuarios reales.'}
          </p>
        </div>
      </div>
    </section>
  );
}
