import React from "react";
import { t } from "@i18n";

interface CurrentlyProps {
  lang: string;
}

const items = [
  { id: "building" },
  { id: "learning" },
  { id: "exploring" },
  // { id: "reading" },
  // { id: "experimenting" },
];

export default function Currently({ lang }: CurrentlyProps) {
  return (
    <section id="currently" className="py-24" aria-label="Currently">
      <div className="container container-editorial">
        <span className="caption block mb-4">{t(lang as any, "currently.label")}</span>
        <h2 className="h2 text-text mb-12 max-w-[560px]">{t(lang as any, "currently.title")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[900px]">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col gap-3 p-6 bg-surface border border-border rounded-lg transition-all duration-normal ease-out-quart hover:border-magic hover:-translate-y-0.5 hover:shadow-glow-sm ${i === items.length - 1 && items.length % 2 !== 0 ? "sm:col-span-2" : ""}`}
              style={{ animation: `fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`, animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-magic animate-pulse-dot" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-wider text-magic font-bold">
                  {t(lang as any, `currently.${item.id}.label` as any)}
                </span>
              </div>
              <p className="text-base leading-relaxed text-text-secondary">
                {t(lang as any, `currently.${item.id}.value` as any)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-[560px]">
          <p className="font-mono text-xs text-text-muted opacity-70">
            {lang === "en"
              ? "This section updates as my focus shifts. Last modified: 2026-07-29."
              : "Esta sección se actualiza cuando mi enfoque cambia. Última modificación: 2026-07-29."}
          </p>
        </div>
      </div>
    </section>
  );
}
