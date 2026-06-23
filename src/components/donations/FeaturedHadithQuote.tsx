import { FadeIn } from "@/components/ui/FadeIn";
import { FEATURED_HADITH_BEFORE_DONATE } from "@/lib/donation-hadith";

export function FeaturedHadithQuote() {
  const hadith = FEATURED_HADITH_BEFORE_DONATE;

  return (
    <FadeIn>
      <blockquote className="mb-8 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-6 text-center sm:mb-10 sm:px-8 sm:py-8">
        <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
          &ldquo;{hadith.text}&rdquo;
        </p>
        <footer className="mt-4 space-y-1">
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
      </blockquote>
    </FadeIn>
  );
}
