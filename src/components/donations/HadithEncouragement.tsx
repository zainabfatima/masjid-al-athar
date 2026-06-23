import { HadithSlider } from "@/components/donations/HadithSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HadithEncouragement() {
  return (
    <section className="border-y border-border bg-muted/40 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Encouragement from the Quran & Sunnah"
          subtitle="The Prophet ﷺ and the Book of Allah guide us to give generously for His sake."
        />
        <HadithSlider />
      </div>
    </section>
  );
}
