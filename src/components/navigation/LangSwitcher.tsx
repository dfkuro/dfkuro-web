import React from "react";
import { locales, localeLabels } from "@i18n";

interface LangSwitcherProps {
  lang: string;
}

export default function LangSwitcher({ lang }: LangSwitcherProps) {
  const otherLang = locales.find((l) => l !== lang) || "en";
  const otherLabel = localeLabels[otherLang as import("@i18n").Locale];
  const otherPath = `/${otherLang}/`;

  return (
    <a
      href={otherPath}
      className="inline-flex items-center gap-1 font-mono text-xs text-text-muted no-underline px-2 py-1 rounded-sm transition-colors duration-fast hover:text-text hover:bg-magic-soft"
      aria-label={`Switch to ${otherLabel}`}
    >
      <span className="text-text font-medium">{localeLabels[lang as import("@i18n").Locale]}</span>
      <span aria-hidden="true">/</span>
      <span className="text-text-muted">{otherLabel}</span>
    </a>
  );
}
