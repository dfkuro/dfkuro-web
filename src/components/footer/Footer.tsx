"use client";

import React from "react";
import { t } from "@i18n";

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="site-footer py-12 pb-32 md:pb-8 border-t border-border">
      <div className="container flex items-center justify-between">
        <p className="footer-copy font-mono text-xs text-text-muted flex items-center gap-2 flex-wrap">
          <span className="footer-year cursor-default select-none">2026</span>
          <span aria-hidden="true">·</span>
          <span dangerouslySetInnerHTML={{ __html: t(lang as any, "footer.copyright") }} />
          <span aria-hidden="true">·</span>
          <span className="footer-hint opacity-50 transition-opacity duration-fast hover:opacity-100 hover:text-magic">{t(lang as any, "footer.hint")}</span>
        </p>

        <button
          className="footer-terminal-btn glow-hover inline-flex items-center justify-center w-9 h-9 border border-border rounded-sm bg-surface text-text-secondary font-mono text-sm cursor-pointer transition-all duration-fast ease-out-quart hover:border-magic hover:text-magic hover:shadow-glow-sm"
          type="button"
          aria-label="Open terminal"
          title=">_"
          onClick={() => document.dispatchEvent(new CustomEvent("open-terminal"))}
        >
          <span aria-hidden="true">&gt;_</span>
        </button>
      </div>

      <span
        className="footer-vim-hint absolute bottom-2 left-4 font-mono text-micro text-border-hover cursor-pointer select-none opacity-40 transition-all duration-fast hover:opacity-100 hover:text-magic"
        aria-hidden="true"
      >
        :set nu
      </span>
    </footer>
  );
}
