"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  DONATION_SLIDER_ITEMS,
  type DonationSliderItem,
} from "@/lib/donation-hadith";

function SlideContent({ item }: { item: DonationSliderItem }) {
  if (item.type === "quran") {
    const { verse } = item;
    return (
      <>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          Noble Quran
        </p>
        <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl lg:text-2xl">
          &ldquo;{verse.text}&rdquo;
        </p>
        <footer className="mt-5 text-sm font-bold text-primary">
          {verse.surah}, Ayah {verse.ayah}
        </footer>
      </>
    );
  }

  const { hadith } = item;
  return (
    <>
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        Hadith
      </p>
      <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl lg:text-2xl">
        &ldquo;{hadith.text}&rdquo;
      </p>
      <footer className="mt-5 space-y-1">
        {hadith.narrator && (
          <p className="text-xs text-muted-foreground sm:text-sm">
            Narrated by {hadith.narrator}
          </p>
        )}
        <p className="text-sm font-bold text-primary">
          {hadith.book}, {hadith.reference}
          {hadith.grade ? ` · ${hadith.grade}` : ""}
        </p>
      </footer>
    </>
  );
}

export function HadithSlider() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const items = DONATION_SLIDER_ITEMS;

  const goTo = useCallback(
    (i: number) => setIndex((i + items.length) % items.length),
    [items.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next, prefersReducedMotion]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]"
      aria-roledescription="carousel"
      aria-label="Quran and hadith on charity"
    >
      <div className="min-h-[220px] px-6 py-8 sm:min-h-[200px] sm:px-12 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="mx-auto max-w-3xl text-center"
          >
            <SlideContent item={items[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-3">
        <button
          type="button"
          onClick={prev}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Previous quote"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Quote navigation">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Quote ${i + 1} of ${items.length}`}
              onClick={() => goTo(i)}
              className="touch-dot"
            >
              <span
                className={`block rounded-full transition-all ${
                  i === index ? "h-2 w-7 bg-primary" : "h-2 w-2 bg-muted-foreground/40"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Next quote"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
