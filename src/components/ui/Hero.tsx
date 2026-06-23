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
  imageFit?: "cover" | "contain";
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
  imageFit = "cover",
}: HeroProps) {
  const imageClass =
    imageFit === "contain"
      ? "object-contain object-center p-4 sm:p-8"
      : "object-cover object-center brightness-[1.02] contrast-[1.05]";

  return (
    <section
      className={`relative flex items-center overflow-hidden ${
        imageFit === "contain" ? "bg-muted/40" : "bg-white"
      } ${
        compact
          ? "min-h-[42vh] sm:min-h-[48vh]"
          : "min-h-[52vh] sm:min-h-[75vh] lg:min-h-[82vh]"
      }`}
      aria-label="Hero section"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className={imageClass}
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
      />
      <div
        className={`absolute inset-0 ${imageFit === "contain" ? "hero-gradient opacity-60" : "hero-gradient"}`}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 ${imageFit === "contain" ? "hero-gradient-bottom opacity-70" : "hero-gradient-bottom"}`}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeIn className="hero-content-panel max-w-3xl rounded-2xl p-5 sm:p-10">
          {subtitle && (
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary sm:text-base">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
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
