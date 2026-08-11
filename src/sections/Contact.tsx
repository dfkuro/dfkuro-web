"use client";

import React, { useState } from "react";
import { t } from "@i18n";
import { siteConfig } from "@config/site";
import Icon from "@components/ui/Icon";

interface ContactProps {
  lang: string;
}

export default function Contact({ lang }: ContactProps) {
  const [copyLabel, setCopyLabel] = useState(t(lang as any, "contact.copy"));

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyLabel(t(lang as any, "contact.copied"));
      setTimeout(() => setCopyLabel(t(lang as any, "contact.copy")), 2000);
    } catch {
      setCopyLabel(t(lang as any, "contact.failed"));
      setTimeout(() => setCopyLabel(t(lang as any, "contact.copy")), 2000);
    }
  };

  return (
    <section id="contact" className="py-32 pb-40 relative" aria-label="Contact">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16"
        style={{ background: "linear-gradient(180deg, transparent, #D9047A)", opacity: 0.4 }}
      />

      <div className="container">
        <span className="caption block mb-10">{t(lang as any, "contact.label")}</span>

        <div className="max-w-narrow">
          <h2 className="display-secondary text-text mb-6">{t(lang as any, "contact.title")}</h2>
          <p className="text-lead leading-relaxed text-text-secondary mb-12 max-w-[560px]">
            {t(lang as any, "contact.body")}
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-16">
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline inline-flex items-center gap-3 font-mono text-lg sm:text-xl md:text-2xl font-medium text-text"
            >
              <span className="text-magic font-normal">~</span>
              {t(lang as any, "contact.cta")}
            </a>
            <button
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm bg-surface text-text-secondary text-label font-medium cursor-pointer transition-all duration-fast ease-out-quart hover:border-magic hover:text-magic hover:shadow-glow-sm magnetic"
              type="button"
              aria-label="Copy email to clipboard"
              onClick={handleCopy}
            >
              <Icon name="copy" size={18} className="shrink-0" />
              <span className="min-w-[44px] text-left">{copyLabel}</span>
            </button>
            <nav className="flex items-center gap-2" aria-label="Social profiles">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm text-text-secondary transition-all duration-fast ease-out-quart hover:border-magic hover:text-magic hover:shadow-glow-sm"
              >
                <Icon name="github" size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm text-text-secondary transition-all duration-fast ease-out-quart hover:border-magic hover:text-magic hover:shadow-glow-sm"
              >
                <Icon name="linkedin" size={20} />
              </a>
            </nav>
          </div>

          <div className="pt-8 border-t border-border max-w-[480px]">
            <p className="font-mono text-sm text-text-muted leading-relaxed opacity-80">
              {lang === "en"
                ? "If the inbox is full, try the terminal. Type sudo hire dfkuro."
                : "Si la bandeja está llena, prueba el terminal. Escribe sudo hire dfkuro."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
