"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { JumuahSection } from "@/components/salah/JumuahSection";
import { MonthlyScheduleTable } from "@/components/salah/MonthlyScheduleTable";
import { TodayPrayerCards } from "@/components/salah/TodayPrayerCards";
import { FadeIn } from "@/components/ui/FadeIn";
import { usePrayerSchedule } from "@/hooks/usePrayerSchedule";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function SalahScheduleContent() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());

  const { today, todayMeta, month: monthDays, loading, monthLoading } =
    usePrayerSchedule(month, year);

  const monthLabel = `${MONTH_NAMES[month - 1]} ${year}`;

  const shiftMonth = (delta: number) => {
    const d = new Date(year, month - 1 + delta, 1);
    setMonth(d.getMonth() + 1);
    setYear(d.getFullYear());
  };

  const highlights = useMemo(
    () => [
      {
        icon: CalendarDays,
        title: "Plan Ahead",
        text: "Browse the full monthly salah schedule and mark important dates.",
      },
      {
        icon: Clock,
        title: "Adhan & Iqamah",
        text: "Daily congregational iqamah times alongside calculated adhan.",
      },
      {
        icon: MapPin,
        title: "Marietta, GA",
        text: CONTACT.addressShort,
      },
    ],
    []
  );

  return (
    <>
      <section className="section-white border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-muted border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Today&apos;s Salah
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
                Prayer Times for Today
              </h2>
            </div>
          </FadeIn>
          <TodayPrayerCards
            prayers={today}
            loading={loading}
            gregorian={todayMeta?.gregorian}
            hijri={todayMeta?.hijri}
          />
        </div>
      </section>

      <section className="section-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <MonthlyScheduleTable
              days={monthDays}
              loading={monthLoading}
              monthLabel={monthLabel}
              onPrevMonth={() => shiftMonth(-1)}
              onNextMonth={() => shiftMonth(1)}
            />
            <aside className="hidden space-y-4 lg:block">
              <FadeIn delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
                  <Image
                    src={IMAGES.masjid.interior.src}
                    alt={IMAGES.masjid.interior.alt}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
                  <Image
                    src={IMAGES.masjid.exterior2021.src}
                    alt={IMAGES.masjid.exterior2021.alt}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-border bg-primary/5 p-6">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Visit us
                  </p>
                  <p className="mt-2 font-bold text-foreground">{CONTACT.address}</p>
                  <Link
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
                  >
                    Get directions →
                  </Link>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-muted border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <JumuahSection />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[IMAGES.masjid.mosque, IMAGES.masjid.eid, IMAGES.slider.mosque].map(
              (img) => (
                <FadeIn key={img.src}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                </FadeIn>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
