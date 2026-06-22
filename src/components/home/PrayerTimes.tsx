"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTodayPrayerTimes } from "@/hooks/usePrayerSchedule";
import { JUMMAH_TIMES } from "@/lib/constants";

export function PrayerTimes() {
  const { times, loading } = useTodayPrayerTimes();

  return (
    <FadeIn>
      <div className="overflow-hidden rounded-2xl border border-border bg-white card-elevated">
        <div className="bg-primary px-6 py-5">
          <h3 className="font-display text-2xl font-bold text-white">
            Prayer Times
          </h3>
          <p className="text-sm font-medium text-white/90">Marietta, GA</p>
        </div>
        <div className="p-4" role="table" aria-label="Daily prayer times">
          {loading ? (
            <div className="space-y-3" aria-busy="true" aria-label="Loading prayer times">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="skeleton h-10 rounded-lg" />
              ))}
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {times?.map((prayer) => (
                <li
                  key={prayer.name}
                  className="flex items-center justify-between py-3"
                  role="row"
                >
                  <span className="font-bold text-foreground" role="cell">
                    {prayer.name}
                  </span>
                  <span className="text-right" role="cell">
                    <span className="block text-base font-semibold text-foreground">
                      {prayer.adhan12}
                    </span>
                    <span className="text-xs font-medium text-primary">
                      Iq: {prayer.iqamah12}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-4 border-t border-border pt-4 text-center text-sm text-muted-foreground">
            Jumu&apos;ah: {JUMMAH_TIMES.map((j) => j.time).join(" & ")}
          </p>
          <Link
            href="/salah-schedule"
            className="mt-4 flex items-center justify-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Full monthly schedule
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
