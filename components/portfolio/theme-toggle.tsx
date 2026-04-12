"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  if (typeof window.matchMedia !== "function") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());
  const isLight = theme === "light";

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <span className="inline-flex items-center">
      <button
        type="button"
        role="switch"
        aria-checked={isLight}
        aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
        onClick={toggleTheme}
        className="relative inline-flex h-7 w-13 items-center rounded-full border border-[var(--border)] bg-[var(--panel)] p-1 transition-colors duration-300 hover:border-[var(--foreground)]"
      >
        <span
          className={`absolute left-2 text-[12px] leading-none transition-opacity duration-300 ${
            isLight
              ? "opacity-100 text-[var(--accent)]"
              : "opacity-40 text-[var(--muted)]"
          }`}
          aria-hidden="true"
        >
          ☀
        </span>
        <span
          className={`absolute right-2 text-[12px] leading-none transition-opacity duration-300 ${
            isLight
              ? "opacity-40 text-[var(--muted)]"
              : "opacity-100 text-[var(--accent)]"
          }`}
          aria-hidden="true"
        >
          ☾
        </span>
        <span
          className={`inline-block h-5 w-5 rounded-full bg-[var(--foreground)] transition-transform duration-300 ${
            isLight ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </span>
  );
}
