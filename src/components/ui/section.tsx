import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/container";

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
    <section className={`py-16 sm:py-24 ${className}`} {...props}>
      <Container className={contentClassName}>
        {(eyebrow || title || description) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}
