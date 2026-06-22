"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { HOME_SLIDES } from "@/lib/site-content";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback((i: number) => {
    setIndex((i + HOME_SLIDES.length) % HOME_SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, prefersReducedMotion]);

  const slide = HOME_SLIDES[index];

  return (
    <section
      className="relative min-h-[78vh] overflow-hidden bg-white sm:min-h-[88vh]"
      aria-roledescription="carousel"
      aria-label="Masjid Al-Athar highlights"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={index === 0}
            className="object-cover object-center brightness-[1.02] contrast-[1.05]"
            sizes="100vw"
          />
          <div className="hero-gradient absolute inset-0" aria-hidden="true" />
          <div className="hero-gradient-bottom absolute inset-0" aria-hidden="true" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex min-h-[78vh] items-end pb-10 sm:min-h-[88vh] sm:items-center sm:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-content"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="hero-content-panel max-w-2xl rounded-2xl p-6 sm:p-10"
            >
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary sm:text-base">
                {slide.subtitle}
              </p>
              <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                {slide.title}
              </h1>
              <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground sm:mt-5 sm:text-xl">
                {slide.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <Button href={slide.primaryCta.href} variant="primary" size="lg">
                  {slide.primaryCta.label}
                </Button>
                {slide.secondaryCta && (
                  <Button href={slide.secondaryCta.href} variant="outline" size="lg">
                    {slide.secondaryCta.label}
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-foreground shadow-lg transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-foreground shadow-lg transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8"
        role="tablist"
        aria-label="Slide navigation"
      >
        {HOME_SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-10 bg-primary"
                : "w-2.5 bg-white/80 shadow-sm hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
