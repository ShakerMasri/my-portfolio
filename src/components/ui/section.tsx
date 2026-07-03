import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  contentClassName?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  contentClassName = "",
  ...props
}: SectionProps) {
  return (
    <section className={`relative overflow-hidden py-16 sm:py-24 ${className}`} {...props}>
      <Container className={contentClassName}>
        {(eyebrow || title || description) && (
          <Reveal className="max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-purple-700 dark:text-purple-300">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                {description}
              </p>
            )}

            <div
              className="mt-6 h-px w-28 bg-gradient-to-r from-purple-600/80 via-purple-400/50 to-transparent dark:from-purple-300/50 dark:via-purple-300/20"
              aria-hidden="true"
            />
          </Reveal>
        )}

        {children && <div className="mt-10 sm:mt-12">{children}</div>}
      </Container>
    </section>
  );
}
