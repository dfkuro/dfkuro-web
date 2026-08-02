"use client";

import React from "react";
import { useTheme, type Theme } from "@components/theme/ThemeProvider";
import Icon from "@components/ui/Icon";

const icons: Record<Theme, string> = {
  light: "sun",
  dark: "moon",
  system: "system",
};

const labels: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycle = () => {
    const order: Theme[] = ["light", "dark", "system"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={cycle}
      className="inline-flex items-center justify-center w-9 h-9 border border-border rounded-sm bg-surface text-text-secondary cursor-pointer transition-all duration-fast ease-out-quart hover:border-magic hover:text-magic hover:shadow-glow-sm"
      aria-label={`Theme: ${labels[theme]}`}
      title={`Theme: ${labels[theme]}`}
    >
      <Icon name={icons[theme]} size={24} />
    </button>
  );
}
