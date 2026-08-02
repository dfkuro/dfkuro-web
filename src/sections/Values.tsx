import React from "react";
import { t } from "@i18n";

interface ValuesProps {
  lang: string;
}

const values = [
  { id: "clean", index: 0 },
  { id: "business", index: 1 },
  { id: "maintainability", index: 2 },
  { id: "performance", index: 3 },
  { id: "learning", index: 4 },
];

export default function Values({ lang }: ValuesProps) {
  return (
    <section id="values" className="py-6" aria-label="Values">
      <div className="container container-editorial">
        <span className="caption block mb-8">{t(lang as any, "values.label")}</span>

        <div className="flex flex-col gap-2">
          {values.map((value, i) => {
            const isFirst = i === 0;
            const isLast = i === values.length - 1;
            return (
              <article key={value.id} className="relative">
                {!isFirst && (
                  <div className="section-divider mb-8 max-w-[200px]" aria-hidden="true">
                    <div className="w-10" />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 md:gap-8 max-w-[800px]">
                  <span className="font-mono text-3xl text-magic opacity-60 block mt-2" aria-hidden="true">
                    0{i + 1}
                  </span>

                  <div className="flex flex-col gap-6">
                    <blockquote className="pull-quote m-0">
                      {t(lang as any, `values.${value.id}.quote` as any)}
                    </blockquote>

                    <p className="text-base leading-relaxed text-text-secondary max-w-[560px]">
                      {t(lang as any, `values.${value.id}.body` as any)}
                    </p>
                  </div>
                </div>

                {isLast && (
                  <div className="mt-12 pt-8 border-t border-border max-w-[560px]">
                    <p className="font-mono text-sm leading-relaxed text-text-muted italic">
                      {lang === "en"
                        ? "These are not slogans. They are constraints I use to make decisions under pressure."
                        : "No son slogans. Son restricciones que uso para tomar decisiones bajo presión."}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
