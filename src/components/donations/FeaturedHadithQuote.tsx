import { FadeIn } from "@/components/ui/FadeIn";
import {
  FEATURED_HADITHS_BEFORE_DONATE,
  type DonationHadith,
} from "@/lib/donation-hadith";

interface FeaturedHadithQuoteProps {
  variant?: "default" | "prominent";
  hadith?: DonationHadith;
}

function formatHadithCitation(hadith: DonationHadith): string {
  const reference = `${hadith.book}, ${hadith.reference}${hadith.grade ? ` · ${hadith.grade}` : ""}`;
  if (hadith.narrator) {
    return `Narrated by ${hadith.narrator} — ${reference}`;
  }
  return reference;
}

function HadithLine({
  hadith,
  isProminent,
  showDivider,
}: {
  hadith: DonationHadith;
  isProminent: boolean;
  showDivider?: boolean;
}) {
  return (
    <p
      className={
        showDivider
          ? isProminent
            ? "border-t border-primary/20 pt-2 sm:pt-2.5"
            : "border-t border-primary/20 pt-4"
          : undefined
      }
    >
      <span
        className={
          isProminent
            ? "font-display text-sm font-bold italic text-teal-900 dark:text-teal-100 sm:text-base"
            : "font-display text-lg italic text-foreground sm:text-xl"
        }
      >
        &ldquo;{hadith.text}&rdquo;
      </span>
      <span
        className={
          isProminent
            ? "text-xs font-semibold text-amber-800 dark:text-amber-300 sm:text-sm"
            : "text-sm font-bold text-primary"
        }
      >
        {" "}
        — {formatHadithCitation(hadith)}
      </span>
    </p>
  );
}

export function FeaturedHadithQuote({
  variant = "default",
  hadith,
}: FeaturedHadithQuoteProps) {
  const isProminent = variant === "prominent";
  const hadiths = hadith ? [hadith] : FEATURED_HADITHS_BEFORE_DONATE;

  return (
    <FadeIn>
      <blockquote
        className={
          isProminent
            ? "w-full space-y-2 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-amber-50 via-white to-teal-50 px-4 py-3 text-center leading-snug shadow-md dark:border-primary/50 dark:from-amber-950/30 dark:via-slate-900 dark:to-teal-950/40 sm:space-y-2.5 sm:px-6 sm:py-3.5"
            : "mb-8 w-full space-y-6 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-6 text-center sm:mb-10 sm:px-8 sm:py-8"
        }
      >
        {hadiths.map((item, index) => (
          <HadithLine
            key={item.id}
            hadith={item}
            isProminent={isProminent}
            showDivider={index > 0}
          />
        ))}
      </blockquote>
    </FadeIn>
  );
}
