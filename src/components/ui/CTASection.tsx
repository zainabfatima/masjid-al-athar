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
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={primaryCta.href} variant="secondary" size="lg" external={primaryCta.external}>
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
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
