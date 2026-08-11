import React from "react";
import { t } from "@i18n";
import { profile } from "@data/profile";
import Card from "@components/ui/Card";
import Badge from "@components/ui/Badge";

interface AboutProps {
  lang: string;
}

export default function About({ lang }: AboutProps) {
  return (
    <section id="about" className="py-32 pb-12" aria-label="About">
      <div className="container">
        <span className="caption block mb-6">
          {t(lang as any, "about.label")}
        </span>

        <Card className="overflow-hidden mb-12 transition-all duration-normal ease-out-quart hover:-translate-y-0.5 hover:shadow-glow-md">
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr]">
            <div className="flex items-center justify-center min-h-[260px] relative bg-gradient-to-br from-background to-border">
              <div className="w-[190px] h-[190px] rounded-md bg-gradient-to-br from-border to-border-hover flex items-center justify-center relative overflow-hidden">
                {profile.avatar ? (
                  <>
                    <img
                      src={profile.avatar.light}
                      alt={profile.name}
                      width={190}
                      height={190}
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <img
                      src={profile.avatar.dark}
                      alt={profile.name}
                      width={190}
                      height={190}
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </>
                ) : (
                  <span className="font-mono text-micro text-text-muted animate-pulse">
                    rendering avatar...
                  </span>
                )}
              </div>
            </div>

            <div className="p-6 md:px-8">
              <dl className="grid gap-4">
                <div className="flex items-baseline gap-4 pb-3 border-b border-border">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    {lang === "en" ? "Name" : "Nombre"}
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    {profile.name}
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 pb-3 border-b border-border">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    {lang === "en" ? "Role" : "Rol"}
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    {profile.role}
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 pb-3 border-b border-border">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    {lang === "en" ? "Location" : "Ubicación"}
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    {profile.location}
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 pb-3 border-b border-border">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    {lang === "en" ? "Status" : "Estado"}
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    <Badge variant="magic" className="text-overline">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-magic animate-pulse-dot shadow-glow-sm"
                        aria-hidden="true"
                      />
                      {lang === "en" ? "Available" : "Disponible"}
                    </Badge>
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 pb-3 border-b border-border">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    {lang === "en" ? "Uptime" : "Actividad"}
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    {profile.uptime}
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 pb-3 border-b border-border">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    Shell
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    {profile.shell}
                  </dd>
                </div>
                <div className="flex items-baseline gap-4 pb-3 border-b border-border">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    Editor
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    {profile.editor}
                  </dd>
                </div>
                <div className="flex items-baseline gap-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-text-muted min-w-[80px] shrink-0">
                    OS
                  </dt>
                  <dd className="text-body-sm font-medium text-text">
                    Debian / Ubuntu
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="px-4 md:px-8 py-4 border-t border-border cursor-help relative overflow-hidden group">
            <div
              className="h-6 opacity-60"
              style={{
                background:
                  "repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 4px, currentColor 4px, currentColor 5px, transparent 5px, transparent 8px, currentColor 8px, currentColor 10px, transparent 10px, transparent 12px, currentColor 12px, currentColor 14px, transparent 14px, transparent 16px, currentColor 16px, currentColor 17px, transparent 17px, transparent 20px)",
              }}
              aria-hidden="true"
            />
            <span className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 translate-y-1 px-3 py-2 bg-accent text-background font-mono text-overline rounded-sm whitespace-nowrap opacity-0 pointer-events-none transition-all duration-fast group-hover:opacity-100 group-hover:translate-y-0">
              S/N: 1337-DEVELOPER
            </span>
          </div>
        </Card>

        <div className="max-w-auto mb-12">
          <p className="text-xl leading-relaxed text-text-secondary whitespace-pre-line font-bold text-center">
            {t(lang as any, "about.title")}
          </p>
        </div>

        <div className="max-w-auto mb-12">
          <p className="text-lead leading-relaxed text-text-secondary whitespace-pre-line">
            {t(lang as any, "about.bio")}
          </p>
        </div>

        {/* <div className="max-w-[600px]">
          <span className="caption block mb-3">
            {t(lang as any, "about.education.label")}
          </span>
          <p className="text-body-sm text-text-secondary leading-relaxed">
            {t(lang as any, "about.education.school")}
          </p>
        </div> */}
      </div>
    </section>
  );
}
