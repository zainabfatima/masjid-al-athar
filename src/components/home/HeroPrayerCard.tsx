"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTodayPrayerTimes } from "@/hooks/usePrayerSchedule";
import { JUMMAH_TIMES } from "@/lib/constants";
import {
  FALLBACK_TODAY,
  formatCountdown,
  getNextIqamah,
  msUntilIqamah,
} from "@/lib/prayer-times";

export function HeroPrayerCard() {
  const { times, sunrise, dateShort, hijriShort, loading } = useTodayPrayerTimes();
  const prayers = times ?? FALLBACK_TODAY;
  const nextIqamah = getNextIqamah(prayers);
  const [countdown, setCountdown] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      const ms = msUntilIqamah(nextIqamah.iqamah24, nextIqamah.isTomorrow);
      setCountdown(formatCountdown(ms));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [nextIqamah.iqamah24, nextIqamah.isTomorrow]);

  return (
    <aside
      className="w-full max-w-md lg:max-w-[20rem] xl:max-w-[22rem]"
      aria-label="Today's prayer timings"
    >
      <div className="overflow-hidden rounded-lg border border-primary/20 bg-white shadow-[0_12px_48px_rgba(15,23,42,0.28)]">
        {/* Header — ECIC style */}
        <div className="bg-primary px-4 py-3 text-center text-white">
          <h2 className="font-display text-lg font-bold tracking-wide sm:text-xl">
            Prayer Timings
          </h2>
          {!loading && dateShort && (
            <p className="mt-1 text-sm font-medium text-white/95">{dateShort}</p>
          )}
        </div>

        {/* Next Iqamah countdown */}
        <div className="border-b border-border bg-[#f0fdfa] px-4 py-3 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Next Iqamah In
          </p>
          <p
            className="mt-1 font-mono text-3xl font-bold leading-none tabular-nums text-foreground sm:text-4xl"
            aria-live="polite"
          >
            {loading ? "—" : countdown}
          </p>
          {!loading && dateShort && (
            <p className="mt-2 text-sm font-semibold text-foreground">{dateShort}</p>
          )}
          {!loading && hijriShort && (
            <p className="mt-0.5 text-xs font-medium text-muted-foreground">
              {hijriShort}
            </p>
          )}
        </div>

        {/* Prayer list */}
        <div className="px-3 py-2 sm:px-4">
          {loading ? (
            <div className="space-y-2 py-3" aria-busy="true">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="skeleton h-9 rounded" />
              ))}
            </div>
          ) : (
            <>
              <div className="mb-1 flex justify-end gap-6 px-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground sm:text-xs">
                <span>Adhan</span>
                <span>Iqamah</span>
              </div>
              <ul>
                {prayers.map((prayer) => {
                  const isNext =
                    nextIqamah.prayer === prayer.name && !nextIqamah.isTomorrow;
                  return (
                    <li
                      key={prayer.name}
                      className={`flex items-center justify-between border-b border-border/50 py-2 last:border-0 ${
                        isNext ? "bg-primary/8 -mx-1 rounded px-1" : ""
                      }`}
                    >
                      <span className="text-sm font-bold text-foreground sm:text-base">
                        {prayer.name}
                      </span>
                      <span className="font-mono text-sm font-semibold tabular-nums sm:text-base">
                        <span className="text-foreground">
                          {prayer.adhan12}
                        </span>
                        <span className="mx-1.5 text-muted-foreground">|</span>
                        <span className="font-bold text-primary">
                          {prayer.iqamah12}
                        </span>
                      </span>
                    </li>
                  );
                })}
                <li className="flex items-center justify-between border-t border-border/80 py-2">
                  <span className="text-sm font-bold text-muted-foreground sm:text-base">
                    Sunrise
                  </span>
                  <span className="text-sm font-semibold text-foreground sm:text-base">
                    {sunrise}
                  </span>
                </li>
              </ul>
            </>
          )}
        </div>

        {/* Jumu'ah */}
        <div className="border-t-2 border-primary/20 bg-muted/30 px-4 py-3">
          <p className="text-center text-sm font-bold uppercase tracking-wide text-primary">
            Jumu&apos;ah
          </p>
          {JUMMAH_TIMES.map((j, i) => (
            <p
              key={j.label}
              className="mt-1 text-center text-sm font-semibold text-foreground"
            >
              {i + 1}
              {i === 0 ? "st" : "nd"} Jumu&apos;ah — {j.time}
            </p>
          ))}
          <Link
            href="/salah-schedule"
            className="mt-3 flex min-h-[44px] items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary hover:bg-primary/15"
          >
            View Full Schedule
          </Link>
        </div>
      </div>
    </aside>
  );
}
