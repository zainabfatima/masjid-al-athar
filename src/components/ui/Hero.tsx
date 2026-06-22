import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  children?: ReactNode;
  compact?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  children,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-white ${
        compact ? "min-h-[48vh] sm:min-h-[52vh]" : "min-h-[75vh] sm:min-h-[82vh]"
      }`}
      aria-label="Hero section"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center brightness-[1.02] contrast-[1.05]"
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />
      <div className="hero-gradient-bottom absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FadeIn className="hero-content-panel max-w-3xl rounded-2xl p-6 sm:p-10">
          {subtitle && (
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary sm:text-base">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  variant="primary"
                  size="lg"
                  external={primaryCta.external}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  external={secondaryCta.external}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
