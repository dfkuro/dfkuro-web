"use client";

import React, { useEffect } from "react";
import { t } from "@i18n";

interface MobileNavProps {
  lang: string;
}

export default function MobileNav({ lang }: MobileNavProps) {
  useEffect(() => {
    const nav = document.querySelector(".mobile-nav");
    if (!nav) return;
    const links = nav.querySelectorAll<HTMLElement>(".mobile-nav-link");
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
    return () => observer.disconnect();
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
      className="mobile-nav fixed bottom-4 left-1/2 -translate-x-1/2 z-[1000] w-[min(90%,420px)] p-2 bg-surface/85 backdrop-blur-md border border-border rounded-full shadow-sm md:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="flex list-none gap-1 justify-center overflow-x-auto scrollbar-none" role="menubar">
        {navItems.map((item) => (
          <li role="none" key={item.href}>
            <a
              href={item.href}
              className="mobile-nav-link flex items-center px-3 py-2 rounded-full text-sm font-medium text-text-secondary transition-colors duration-fast ease-out-quart whitespace-nowrap"
              role="menuitem"
              data-section={item.href.replace("#", "")}
            >
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
