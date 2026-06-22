"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

interface PrayerTime {
  name: string;
  adhan: string;
  iqamah: string;
}

const FALLBACK_TIMES: PrayerTime[] = [
  { name: "Fajr", adhan: "5:15", iqamah: "5:45" },
  { name: "Dhuhr", adhan: "1:30", iqamah: "2:00" },
  { name: "Asr", adhan: "5:30", iqamah: "6:00" },
  { name: "Maghrib", adhan: "8:30", iqamah: "8:32" },
  { name: "Isha", adhan: "9:45", iqamah: "10:15" },
];

export function PrayerTimes() {
  const [times, setTimes] = useState<PrayerTime[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const res = await fetch(
          "https://api.aladhan.com/v1/timingsByAddress?address=Marietta,GA,USA&method=2"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const t = data.data.timings;
        setTimes([
          { name: "Fajr", adhan: t.Fajr, iqamah: t.Fajr },
          { name: "Dhuhr", adhan: t.Dhuhr, iqamah: t.Dhuhr },
          { name: "Asr", adhan: t.Asr, iqamah: t.Asr },
          { name: "Maghrib", adhan: t.Maghrib, iqamah: t.Maghrib },
          { name: "Isha", adhan: t.Isha, iqamah: t.Isha },
        ]);
      } catch {
        setTimes(FALLBACK_TIMES);
      } finally {
        setLoading(false);
      }
    };

    fetchTimes();
  }, []);

  return (
    <FadeIn>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <div className="bg-primary px-6 py-4">
          <h3 className="font-display text-xl font-bold text-primary-foreground">
            Prayer Times
          </h3>
          <p className="text-sm text-primary-foreground/80">Marietta, GA</p>
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
                  <span className="font-semibold text-foreground" role="cell">
                    {prayer.name}
                  </span>
                  <span className="text-sm text-muted-foreground" role="cell">
                    {prayer.adhan}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-4 border-t border-border pt-4 text-center text-sm text-muted-foreground">
            Jumu&apos;ah: 1:15 PM &amp; 2:10 PM
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
