import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-fast ease-out-quart rounded-sm";

  const variants = {
    primary: "bg-accent text-background border border-accent hover:opacity-85",
    secondary: "bg-surface text-text border border-border hover:border-border-hover",
    ghost: "bg-transparent text-text-secondary border-none hover:text-text hover:bg-magic-soft",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} active:scale-[0.98] ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} role="button">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
