"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { createTerminalEngine } from "@composables/terminalEngine";
import { profile } from "@data/profile";
import { t } from "@i18n";

interface TerminalProps {
  lang: string;
}

export default function Terminal({ lang }: TerminalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lines, setLines] = useState<{ html: string; isIntro?: boolean }[]>([
    { html: `<span class="text-text-muted">${t(lang as any, "terminal.welcome")}</span>`, isIntro: true },
    { html: `<span class="text-magic font-medium" style="text-shadow:0 0 8px rgba(217,4,122,0.25)">${t(lang as any, "terminal.prompt")}</span> <span class="animate-cursor-blink text-magic">_</span>` },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const engineRef = useRef<ReturnType<typeof createTerminalEngine> | null>(null);

  const sections = [
    t(lang as any, "nav.about"),
    t(lang as any, "nav.experience"),
    t(lang as any, "nav.stack"),
    t(lang as any, "nav.values"),
    t(lang as any, "nav.contact"),
  ];

  useEffect(() => {
    engineRef.current = createTerminalEngine({
      profile,
      sections,
      lang,
      onSudoHire: () => {
        document.dispatchEvent(new CustomEvent("achievement-unlocked", { detail: "sudo-hire" }));
        spawnConfetti();
      },
    });
  }, [lang, sections]);

  useEffect(() => {
    const open = () => setIsVisible(true);
    const sudo = () => {
      setIsVisible(true);
      setInputValue("sudo hire dfkuro");
      setTimeout(() => {
        runCommand("sudo hire dfkuro");
      }, 300);
    };

    document.addEventListener("open-terminal", open);
    document.addEventListener("sudo-hire", sudo);
    return () => {
      document.removeEventListener("open-terminal", open);
      document.removeEventListener("sudo-hire", sudo);
    };
  }, []);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [isVisible, lines]);

  const runCommand = useCallback(
    (cmd: string) => {
      if (!engineRef.current) return;

      const trimmed = cmd.trim();
      if (!trimmed) return;

      setHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      const promptText = t(lang as any, "terminal.prompt");
      const echoLine = `<span class="text-magic font-medium" style="text-shadow:0 0 8px rgba(217,4,122,0.25)">${promptText}</span> ${escapeHtml(trimmed)}`;
      setLines((prev) => [...prev, { html: echoLine }]);

      const result = engineRef.current.execute(trimmed);

      if (result.type === "exit") {
        setIsVisible(false);
        return;
      }

      if (result.type === "clear") {
        setLines((prev) => prev.filter((l) => l.isIntro));
        return;
      }

      const outLines = Array.isArray(result.output) ? result.output : [result.output];
      setLines((prev) => [...prev, ...outLines.filter(Boolean).map((l) => ({ html: l }))]);
    },
    [lang]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      runCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((idx) => {
        const next = idx < history.length - 1 ? idx + 1 : idx;
        setInputValue(history[history.length - 1 - next] || "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((idx) => {
        if (idx > 0) {
          const next = idx - 1;
          setInputValue(history[history.length - 1 - next] || "");
          return next;
        }
        setInputValue("");
        return -1;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (!engineRef.current) return;
      const val = inputValue.trim().toLowerCase();
      if (!val) return;
      const match = engineRef.current.commands.find((c) => c.startsWith(val));
      if (match) {
        setInputValue(match + " ");
      }
    }
  };

  const close = () => {
    setIsVisible(false);
    setInputValue("");
  };

  if (!isVisible) return null;

  return (
    <div
      ref={terminalRef}
      className="fixed bottom-6 right-6 w-[min(480px,calc(100vw-2rem))] h-80 bg-[#09090B] border border-border rounded-lg flex flex-col overflow-hidden z-[9998] shadow-2xl transition-all duration-normal ease-out-quart"
      style={{ boxShadow: "0 24px 80px -12px rgba(0,0,0,0.4)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06] shrink-0">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" aria-hidden="true" />
        </div>
        <span className="flex-1 text-center font-mono text-xs text-text-muted select-none">dfkuro@izmir.dev</span>
        <button
          className="w-6 h-6 flex items-center justify-center bg-transparent border-none text-text-muted text-xl cursor-pointer rounded-sm transition-colors duration-fast hover:text-text hover:bg-white/[0.06]"
          type="button"
          aria-label="Close terminal"
          onClick={close}
        >
          &times;
        </button>
      </div>

      <div ref={bodyRef} className="flex-1 p-4 overflow-y-auto font-mono text-[0.8125rem] leading-relaxed text-[#E4E4E7]" role="log" aria-live="polite" aria-atomic="false">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 whitespace-pre-wrap break-words" dangerouslySetInnerHTML={{ __html: line.html }} />
        ))}
      </div>

      <div className="flex items-center px-4 py-3 border-t border-white/[0.06] shrink-0 bg-[#09090B]">
        <span className="text-magic font-medium mr-2" style={{ textShadow: "0 0 8px rgba(217,4,122,0.25)" }}>
          {t(lang as any, "terminal.prompt")}
        </span>
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-transparent border-none outline-none font-mono text-[0.8125rem] text-[#FAFAFA] caret-magic ml-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal command"
          placeholder=""
        />
      </div>
    </div>
  );
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function spawnConfetti() {
  const colors = ["#D9047A", "#F04BA0", "#FF6B9D", "#C4156C", "#EF4444"];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.style.cssText = `
      position: fixed; left: ${Math.random() * 100}vw; top: -4px;
      width: ${2 + Math.random() * 4}px; height: ${2 + Math.random() * 4}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      animation: confetti-fall ${1.5 + Math.random() * 2}s linear forwards;
      z-index: 10002; pointer-events: none;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }
}
