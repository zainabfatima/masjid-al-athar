"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { HeroPrayerCard } from "@/components/home/HeroPrayerCard";
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
      className="relative min-h-[520px] overflow-hidden bg-slate-900 sm:min-h-[580px] lg:min-h-[78vh]"
      aria-roledescription="carousel"
      aria-label="Masjid Al-Athar highlights"
    >
      {/* Full-bleed slider image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.03 }}
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
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-gradient absolute inset-0" aria-hidden="true" />
          <div className="hero-gradient-bottom absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/20 to-transparent lg:from-slate-900/60" aria-hidden="true" />
        </motion.div>
      </AnimatePresence>

      {/* ECIC-style layout: slide left, prayer card floating right on the image */}
      <div className="relative z-10 flex min-h-[520px] items-center sm:min-h-[580px] lg:min-h-[78vh]">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
            {/* Slide copy — left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-content"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="hero-content-panel max-w-xl rounded-2xl p-5 sm:p-8 lg:max-w-2xl"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                  {slide.subtitle}
                </p>
                <h1 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                  {slide.description}
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                  <Button
                    href={slide.primaryCta.href}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {slide.primaryCta.label}
                  </Button>
                  {slide.secondaryCta && (
                    <Button
                      href={slide.secondaryCta.href}
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {slide.secondaryCta.label}
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prayer timings card — right, on top of slider like ECIC */}
            <div className="mx-auto w-full justify-self-center lg:mx-0 lg:justify-self-end">
              <HeroPrayerCard />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 hidden min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/95 p-2.5 text-foreground shadow-lg hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-4 lg:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 hidden min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/95 p-2.5 text-foreground shadow-lg hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-4 lg:flex xl:right-6"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Mobile carousel controls */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-md lg:hidden">
        <button
          type="button"
          onClick={prev}
          className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full hover:bg-muted"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide navigation">
          {HOME_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="touch-dot"
            >
              <span
                className={`block rounded-full transition-all ${
                  i === index ? "h-2 w-7 bg-primary" : "h-2 w-2 bg-muted-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full hover:bg-muted"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
