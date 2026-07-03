"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  delayMs?: number;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  style,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const elementBox = element.getBoundingClientRect();
    const isAlreadyVisible =
      elementBox.top < window.innerHeight * 0.92 && elementBox.bottom > 0;

    if (isAlreadyVisible) {
      return;
    }

    element.dataset.revealState = "hidden";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        element.dataset.revealState = "visible";
        observer.unobserve(entry.target);
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const revealStyle: CSSProperties | undefined =
    delayMs > 0 ? { ...style, transitionDelay: `${delayMs}ms` } : style;

  return (
    <div
      {...props}
      ref={elementRef}
      className={className}
      data-reveal="true"
      data-reveal-state="visible"
      style={revealStyle}
    >
      {children}
    </div>
  );
}
