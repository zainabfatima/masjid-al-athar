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
      className={`relative flex items-center overflow-hidden ${
        compact ? "min-h-[40vh]" : "min-h-[70vh] sm:min-h-[80vh]"
      }`}
      aria-label="Hero section"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          {subtitle && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent sm:text-base">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  variant="secondary"
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
                  className="border-white text-white hover:bg-white hover:text-primary"
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
