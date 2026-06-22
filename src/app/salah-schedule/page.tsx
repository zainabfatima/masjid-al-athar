import { SalahScheduleContent } from "@/components/salah/SalahScheduleContent";
import { Hero } from "@/components/ui/Hero";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salah Schedule",
  description:
    "Daily and monthly prayer times for Masjid Al-Athar in Marietta, GA — adhan, iqamah, and Jumu'ah schedules.",
};

export default function SalahSchedulePage() {
  return (
    <>
      <Hero
        title="Salah Schedule"
        subtitle="Plan your prayers with up-to-date adhan and iqamah times at Masjid Al-Athar."
        image={IMAGES.masjid.interior.src}
        imageAlt={IMAGES.masjid.interior.alt}
      />
      <SalahScheduleContent />
    </>
  );
}
