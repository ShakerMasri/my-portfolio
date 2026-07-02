"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Locale } from "@/types/portfolio";

type Theme = "light" | "dark";

const themeStorageKey = "portfolio-theme";
const themeChangeEventName = "portfolio-theme-change";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  if (isTheme(storedTheme)) {
    return storedTheme;
  }

  return getSystemTheme();
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function handleStorage(event: StorageEvent) {
    if (event.key === themeStorageKey) {
      callback();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(themeChangeEventName, callback);
  mediaQuery.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(themeChangeEventName, callback);
    mediaQuery.removeEventListener("change", callback);
  };
}

function saveTheme(theme: Theme) {
  window.localStorage.setItem(themeStorageKey, theme);
  window.dispatchEvent(new Event(themeChangeEventName));
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

type ThemeToggleProps = Readonly<{
  locale: Locale;
}>;

export function ThemeToggle({ locale }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isDark = theme === "dark";

  function handleToggle() {
    const nextTheme: Theme = isDark ? "light" : "dark";

    saveTheme(nextTheme);
    applyTheme(nextTheme);
  }

  const label =
    locale === "en"
      ? isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
      : isDark
        ? "التبديل إلى الوضع الفاتح"
        : "التبديل إلى الوضع الداكن";

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isDark}
      className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300"
      onClick={handleToggle}
    >
      <svg
        aria-hidden="true"
        className={isDark ? "hidden size-5" : "size-5"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 4.75v-2" />
        <path d="M12 21.25v-2" />
        <path d="m4.75 4.75 1.4 1.4" />
        <path d="m17.85 17.85 1.4 1.4" />
        <path d="M2.75 12h2" />
        <path d="M19.25 12h2" />
        <path d="m4.75 19.25 1.4-1.4" />
        <path d="m17.85 6.15 1.4-1.4" />
        <path d="M12 16.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z" />
      </svg>

      <svg
        aria-hidden="true"
        className={isDark ? "size-5" : "hidden size-5"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M20.25 14.3A7.75 7.75 0 0 1 9.7 3.75 8.5 8.5 0 1 0 20.25 14.3Z" />
      </svg>
    </button>
  );
}
