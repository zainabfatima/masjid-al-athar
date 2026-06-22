import type { ReactNode } from "react";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  children?: ReactNode;
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: CTASectionProps) {
  return (
    <section className="cta-gradient relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href={primaryCta.href}
              variant="secondary"
              size="lg"
              external={primaryCta.external}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-primary-dark"
                external={secondaryCta.external}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
