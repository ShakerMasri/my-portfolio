"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/config/navigation";
import { getLocalizedText } from "@/i18n/locales";
import type { Locale, NavigationItem } from "@/types/portfolio";

function getLocalizedHref(item: NavigationItem, locale: Locale) {
  return `/${locale}${item.href}`;
}

type MobileNavigationProps = Readonly<{
  locale: Locale;
}>;

export function MobileNavigation({ locale }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const menuLabel = locale === "en" ? "Main navigation" : "التنقل الرئيسي";
  const buttonLabel =
    locale === "en"
      ? isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
      : isOpen
        ? "إغلاق قائمة التنقل"
        : "فتح قائمة التنقل";

  return (
    <div className="relative lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-controls="mobile-primary-navigation"
        aria-expanded={isOpen}
        aria-label={buttonLabel}
        className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300 motion-reduce:transition-none"
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg
          aria-hidden="true"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <>
              <path d="m6 6 12 12" />
              <path d="m18 6-12 12" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <nav
          id="mobile-primary-navigation"
          aria-label={menuLabel}
          className="absolute end-0 top-[calc(100%+0.75rem)] z-50 w-64 max-w-[calc(100vw-2rem)] rounded-2xl border border-purple-200/80 bg-white p-2 shadow-xl shadow-purple-950/15 ring-1 ring-white/80 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/30 dark:ring-transparent"
        >
          <ul className="space-y-1">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={getLocalizedHref(item, locale)}
                  className="flex min-h-11 items-center rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-purple-50 hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-purple-600 dark:text-zinc-200 dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:focus-visible:outline-purple-300 motion-reduce:transition-none"
                  onClick={() => setIsOpen(false)}
                >
                  {getLocalizedText(item.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
