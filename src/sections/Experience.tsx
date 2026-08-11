import React from "react";
import { t } from "@i18n";

interface ExperienceProps {
  lang: string;
}

const achievements = [
  { key: "12years" },
  { key: "users" },
  { key: "delivery" },
];

const chapters = [
  { id: "traxion", hash: "8f4e2a1" },
  { id: "freelance", hash: "a7c3d91" },
  { id: "saeko", hash: "b2e9f55" },
  { id: "cotemar", hash: "d1a6c88" },
];

const publishedApps = [
  {
    id: "mecanix",
    name: "Mecanix-e",
    publisher: "Grupo Traxion",
    packageId: "mx.mecanixtrax",
    iosClosed: true,
  },
  {
    id: "saeko",
    name: "Saeko App",
    publisher: "Saeko",
    packageId: "com.kioru.app.saeko",
    appStoreUrl: "https://apps.apple.com/mx/app/saeko/id1477257337",
  },
  {
    id: "mindone",
    name: "Mi Copiloto",
    publisher: "Grupo Traxion",
    packageId: "com.mindone",
    iosClosed: true,
  },
  {
    id: "cotemar",
    name: "COTEMAR",
    publisher: "COTEMAR SA DE CV",
    packageId: "com.cotemar.cotemar",
    appStoreUrl: "https://apps.apple.com/mx/app/cotemar/id1378653080",
  },
];

export default function Experience({ lang }: ExperienceProps) {
  return (
    <section id="experience" className="py-12" aria-label="Experience">
      <div className="container">
        <div className="max-w-[900px] mx-auto">
          <span className="caption block mb-10 text-center">
            {t(lang as any, "experience.label")}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16 max-w-[900px] mx-auto">
            {achievements.map((a) => (
              <div
                key={a.key}
                className="flex flex-col gap-1 p-5 px-4 text-center bg-surface border border-border rounded-lg transition-all duration-normal ease-out-quart hover:border-magic hover:shadow-glow-sm"
              >
                <span className="font-mono text-xl sm:text-2xl font-medium text-text tracking-tight">
                  {t(
                    lang as any,
                    `experience.achievements.${a.key}.value` as any,
                  )}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {t(
                    lang as any,
                    `experience.achievements.${a.key}.label` as any,
                  )}
                </span>
                <span className="text-label text-text-secondary leading-snug mt-1">
                  {t(
                    lang as any,
                    `experience.achievements.${a.key}.context` as any,
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-16">
          {chapters.map((chapter) => (
            <article
              key={chapter.id}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-8 relative"
            >
              <div
                className="flex flex-col items-center gap-2 pt-2"
                aria-hidden="true"
              >
                <span className="font-mono text-overline text-text-muted opacity-60">
                  {chapter.hash}
                </span>
                <div
                  className="w-px flex-1 min-h-[40px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #D9047A 0%, #E4E4E7 100%)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-6 pb-8 border-b border-border">
                <header className="mb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-overline uppercase tracking-wider text-magic font-medium">
                      {/*{t(
                        lang as any,
                        `experience.chapter.${chapter.id}.chapter` as any,
                      )}*/}
                      {t(
                        lang as any,
                        `experience.chapter.${chapter.id}.date` as any,
                      )}
                    </span>
                    {/*<span className="font-mono text-xs text-text-muted">
                      {t(
                        lang as any,
                        `experience.chapter.${chapter.id}.date` as any,
                      )}
                    </span>*/}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-text mb-1">
                    {t(
                      lang as any,
                      `experience.chapter.${chapter.id}.company` as any,
                    )}
                  </h3>
                  <p className="text-body-sm text-text-secondary">
                    {t(
                      lang as any,
                      `experience.chapter.${chapter.id}.role` as any,
                    )}
                  </p>
                </header>

                <div className="flex flex-col gap-2">
                  <span className="self-start font-mono text-overline uppercase tracking-wider text-text-muted font-medium px-2 py-1 bg-background border border-border rounded-sm">
                    Context
                  </span>
                  <p className="text-body-sm leading-relaxed text-text-secondary max-w-[640px]">
                    {t(
                      lang as any,
                      `experience.chapter.${chapter.id}.context` as any,
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="self-start font-mono text-overline uppercase tracking-wider text-red-500 font-medium px-2 py-1 bg-red-500/[0.06] border border-red-500/20 rounded-sm">
                    Problem
                  </span>
                  <p className="text-body-sm leading-relaxed text-text-secondary max-w-[640px]">
                    {t(
                      lang as any,
                      `experience.chapter.${chapter.id}.problem` as any,
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="self-start font-mono text-overline uppercase tracking-wider text-magic font-medium px-2 py-1 bg-magic-soft border border-magic-soft rounded-sm">
                    Solution
                  </span>
                  <p className="text-body-sm leading-relaxed text-text-secondary max-w-[640px]">
                    {t(
                      lang as any,
                      `experience.chapter.${chapter.id}.solution` as any,
                    )}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="self-start font-mono text-overline uppercase tracking-wider text-green-500 font-medium px-2 py-1 bg-green-500/[0.06] border border-green-500/20 rounded-sm">
                    Impact
                  </span>
                  <p className="text-body-sm leading-relaxed text-text-secondary max-w-[640px]">
                    {t(
                      lang as any,
                      `experience.chapter.${chapter.id}.impact` as any,
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 p-5 bg-surface border border-border rounded-lg">
                  <div>
                    <span className="block font-mono text-overline uppercase tracking-wider text-text-muted mb-2">
                      Tech
                    </span>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {t(
                        lang as any,
                        `experience.chapter.${chapter.id}.tech` as any,
                      )}
                    </p>
                  </div>
                  <div>
                    <span className="block font-mono text-overline uppercase tracking-wider text-text-muted mb-2">
                      Result
                    </span>
                    <p className="text-sm leading-relaxed text-text font-medium">
                      {t(
                        lang as any,
                        `experience.chapter.${chapter.id}.result` as any,
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>

        <div className="mt-24">
          <span className="caption block mb-4">
            {t(lang as any, "experience.apps.label")}
          </span>
          <h2 className="h2 text-text mb-2 max-w-[560px]">
            {t(lang as any, "experience.apps.title")}
          </h2>
          <p className="text-body-sm text-text-secondary mb-8 max-w-[600px]">
            {t(lang as any, "experience.apps.subtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {publishedApps.map((app) => (
              <article
                key={app.id}
                className="flex flex-col gap-4 p-5 bg-surface border border-border rounded-lg transition-all duration-normal ease-out-quart hover:border-magic hover:shadow-glow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-text">
                      {app.name}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mt-1">
                      {app.publisher}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-magic" aria-hidden="true">
                    Android/iOS
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary flex-1">
                  {t(lang as any, `experience.apps.${app.id}.description` as any)}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <a
                    href={`https://play.google.com/store/apps/details?id=${app.packageId}&hl=en`}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline self-start text-sm font-medium text-text"
                  >
                    {t(lang as any, "experience.apps.playStore")} <span aria-hidden="true">↗</span>
                  </a>
                  {app.appStoreUrl ? (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline self-start text-sm font-medium text-text"
                    >
                      {t(lang as any, "experience.apps.appStore")} <span aria-hidden="true">↗</span>
                    </a>
                  ) : app.iosClosed ? (
                    <span className="text-xs text-text-muted">
                      {t(lang as any, "experience.apps.iosClosed")}
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
