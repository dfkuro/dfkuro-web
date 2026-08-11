"use client";

import React, { useEffect, useRef, useState } from "react";
import { t } from "@i18n";
import Icon from "@components/ui/Icon";

interface Command {
  icon: string;
  label: string;
  shortcut: string;
  action: string;
}

interface CommandPaletteProps {
  lang: string;
}

export default function CommandPalette({ lang }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const commands: Command[] = [
    { icon: "arrow", label: t(lang as any, "nav.about"), shortcut: "A", action: "#about" },
    { icon: "arrow", label: t(lang as any, "nav.experience"), shortcut: "E", action: "#experience" },
    { icon: "arrow", label: t(lang as any, "nav.stack"), shortcut: "S", action: "#stack" },
    { icon: "arrow", label: t(lang as any, "nav.values"), shortcut: "V", action: "#values" },
    { icon: "arrow", label: t(lang as any, "nav.currently"), shortcut: "U", action: "#currently" },
    { icon: "arrow", label: t(lang as any, "nav.contact"), shortcut: "C", action: "#contact" },
    { icon: "copy", label: "Copy email", shortcut: "M", action: "copy-email" },
    { icon: "terminal", label: "Open terminal", shortcut: "T", action: "open-terminal" },
    { icon: "sparkles", label: "Run: sudo hire dfkuro", shortcut: "H", action: "sudo-hire" },
  ];

  const visible = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const open = () => setIsOpen(true);
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      } else if (e.key === "/") {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("open-command-palette", open);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("open-command-palette", open);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const execute = (action: string) => {
    setIsOpen(false);

    if (action.startsWith("#")) {
      document.querySelector(action)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (action === "copy-email") {
      navigator.clipboard.writeText("izmirreffi@gmail.com");
      showToast("Email copied to clipboard");
      return;
    }

    if (action === "open-terminal") {
      document.dispatchEvent(new CustomEvent("open-terminal"));
      return;
    }

    if (action === "sudo-hire") {
      document.dispatchEvent(new CustomEvent("sudo-hire"));
      return;
    }
  };

  const showToast = (message: string) => {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      padding: 10px 20px; background: #18181B; color: #FAFAFA;
      border-radius: 8px; font-size: 0.875rem; font-weight: 500; z-index: 10001;
      animation: toast-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = "toast-out 0.2s ease forwards";
      setTimeout(() => toast.remove(), 200);
    }, 2000);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, visible.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = visible[selectedIndex];
      if (cmd) execute(cmd.action);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] bg-black/20 backdrop-blur-sm transition-opacity duration-normal ease-out-quart ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="w-[min(640px,calc(100vw-2rem))] bg-surface border border-border rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Icon name="search" size={18} className="text-text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 border-none bg-transparent text-base text-text outline-none py-1 placeholder:text-text-muted"
            placeholder={t(lang as any, "palette.placeholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-autocomplete="list"
            aria-controls="cmd-list"
          />
          <kbd className="font-mono text-micro px-2 py-1 border border-border rounded-sm text-text-muted bg-background">{t(lang as any, "palette.esc")}</kbd>
        </div>
        <ul ref={listRef} id="cmd-list" role="listbox" className="list-none max-h-[400px] overflow-y-auto p-2">
          {visible.map((cmd, i) => (
            <li
              key={cmd.action}
              role="option"
              className={`flex items-center justify-between px-4 py-3 rounded-sm cursor-pointer transition-colors duration-fast ease-out-quart ${
                i === selectedIndex ? "bg-magic-soft" : ""
              }`}
              onClick={() => execute(cmd.action)}
              onMouseEnter={() => setSelectedIndex(i)}
            >
              <div className={`flex items-center gap-3 ${i === selectedIndex ? "text-magic" : "text-text-secondary"}`}>
                <Icon name={cmd.icon} size={16} />
                <span className="text-sm font-medium">{cmd.label}</span>
              </div>
              <kbd className="font-mono text-micro px-2 py-1 border border-border rounded-sm text-text-muted bg-background">{cmd.shortcut}</kbd>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
