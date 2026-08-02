import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div className={`bg-surface border border-border rounded-lg transition-all duration-normal ease-out-quart hover:border-border-hover hover:-translate-y-0.5 ${className}`}>
      {children}
    </div>
  );
}
