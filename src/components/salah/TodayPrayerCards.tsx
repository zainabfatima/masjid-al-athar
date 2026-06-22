"use client";

import { Clock, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { getNextPrayer, type PrayerName, type PrayerSlot } from "@/lib/prayer-times";

const ICONS: Record<PrayerName, typeof Sun> = {
  Fajr: Sunrise,
  Dhuhr: Sun,
  Asr: Sun,
  Maghrib: Sunset,
  Isha: Moon,
};

interface TodayPrayerCardsProps {
  prayers: PrayerSlot[];
  loading: boolean;
  gregorian?: string;
  hijri?: string;
}

export function TodayPrayerCards({
  prayers,
  loading,
  gregorian,
  hijri,
}: TodayPrayerCardsProps) {
  const nextInfo = !loading ? getNextPrayer(prayers) : null;

  return (
    <div>
      {(gregorian || hijri) && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          {gregorian && (
            <p className="text-lg font-bold text-foreground">{gregorian}</p>
          )}
          {hijri && (
            <p className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              {hijri}
            </p>
          )}
        </div>
      )}

      {nextInfo && (
        <FadeIn>
          <div className="mb-8 flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
              <Clock className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {nextInfo.label}
              </p>
              <p className="font-display text-2xl font-bold text-foreground">
                {prayers.find((p) => p.name === nextInfo.next)?.adhan12}
                <span className="ml-2 text-base font-medium text-muted-foreground">
                  Adhan
                </span>
              </p>
            </div>
          </div>
        </FadeIn>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="skeleton h-36 rounded-2xl" />
            ))
          : prayers.map((prayer, index) => {
              const Icon = ICONS[prayer.name];
              const isNext = nextInfo?.next === prayer.name;
              return (
                <FadeIn key={prayer.name} delay={index * 0.06}>
                  <div
                    className={`rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] transition-shadow ${
                      isNext
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        className={`h-6 w-6 ${isNext ? "text-primary" : "text-muted-foreground"}`}
                        aria-hidden="true"
                      />
                      {isNext && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">
                          Next
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                      {prayer.name}
                    </h3>
                    <dl className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <dt className="font-medium text-muted-foreground">Adhan</dt>
                        <dd className="font-bold text-foreground">{prayer.adhan12}</dd>
                      </div>
                      <div className="flex justify-between text-sm">
                        <dt className="font-medium text-muted-foreground">Iqamah</dt>
                        <dd className="font-bold text-primary">{prayer.iqamah12}</dd>
                      </div>
                    </dl>
                  </div>
                </FadeIn>
              );
            })}
      </div>
    </div>
  );
}
