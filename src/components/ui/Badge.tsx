import React from "react";

interface BadgeProps {
  variant?: "default" | "magic" | "muted";
  className?: string;
  children: React.ReactNode;
}

export default function Badge({ variant = "default", className = "", children }: BadgeProps) {
  const base = "inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs whitespace-nowrap";

  const variants = {
    default: "border border-border text-text-secondary bg-surface",
    magic: "border border-magic text-magic bg-magic-soft",
    muted: "border border-transparent text-text-muted bg-transparent",
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}
