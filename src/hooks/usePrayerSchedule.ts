"use client";

import { useCallback, useEffect, useState } from "react";
import {
  CALCULATION_METHOD,
  FALLBACK_TODAY,
  PRAYER_LOCATION,
  type DaySchedule,
  type PrayerSlot,
  buildPrayerSlots,
  cleanApiTime,
  parseDaySchedule,
  to12Hour,
} from "@/lib/prayer-times";

interface TodayMeta {
  gregorian: string;
  hijri: string;
  hijriMonth: string;
}

interface PrayerScheduleState {
  today: PrayerSlot[];
  todayMeta: TodayMeta | null;
  month: DaySchedule[];
  loading: boolean;
  monthLoading: boolean;
  error: string | null;
}

export function usePrayerSchedule(month: number, year: number) {
  const [state, setState] = useState<PrayerScheduleState>({
    today: FALLBACK_TODAY,
    todayMeta: null,
    month: [],
    loading: true,
    monthLoading: true,
    error: null,
  });

  const fetchToday = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(PRAYER_LOCATION)}&method=${CALCULATION_METHOD}`
      );
      if (!res.ok) throw new Error("Failed to load today's times");
      const json = await res.json();
      const d = json.data;
      const timings = d.timings;
      setState((s) => ({
        ...s,
        today: buildPrayerSlots(timings),
        todayMeta: {
          gregorian: d.date.readable,
          hijri: `${d.date.hijri.day} ${d.date.hijri.month.en} ${d.date.hijri.year}`,
          hijriMonth: d.date.hijri.month.en,
        },
        loading: false,
      }));
    } catch {
      setState((s) => ({ ...s, loading: false, error: "Using estimated prayer times." }));
    }
  }, []);

  const fetchMonth = useCallback(async () => {
    setState((s) => ({ ...s, monthLoading: true }));
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/calendarByAddress?address=${encodeURIComponent(PRAYER_LOCATION)}&method=${CALCULATION_METHOD}&month=${month}&year=${year}`
      );
      if (!res.ok) throw new Error("Failed to load monthly schedule");
      const json = await res.json();
      const monthData: DaySchedule[] = json.data.map(parseDaySchedule);
      setState((s) => ({ ...s, month: monthData, monthLoading: false }));
    } catch {
      setState((s) => ({ ...s, monthLoading: false }));
    }
  }, [month, year]);

  useEffect(() => {
    fetchToday();
  }, [fetchToday]);

  useEffect(() => {
    fetchMonth();
  }, [fetchMonth]);

  return state;
}

/** Compact fetch for homepage / hero widgets */
export function useTodayPrayerTimes() {
  const [times, setTimes] = useState<PrayerSlot[] | null>(null);
  const [sunrise, setSunrise] = useState<string>("—");
  const [dateShort, setDateShort] = useState<string>("");
  const [hijriShort, setHijriShort] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(PRAYER_LOCATION)}&method=${CALCULATION_METHOD}`
    )
      .then((r) => r.json())
      .then((json) => {
        const d = json.data;
        setTimes(buildPrayerSlots(d.timings));
        const readable = d.date.readable as string;
        const parts = readable.split(" ");
        const dayMonth =
          parts.length >= 2 ? `${parts[0]} ${parts[1]}` : readable;
        const hijriDay = d.date.hijri.day;
        const hijriMonth = d.date.hijri.month.en;
        setDateShort(`${dayMonth} (${hijriDay} ${hijriMonth})`);
        setHijriShort(`${hijriDay} ${hijriMonth} ${d.date.hijri.year}`);
        setSunrise(to12Hour(cleanApiTime(d.timings.Sunrise)));
      })
      .catch(() => {
        setTimes(FALLBACK_TODAY);
        const now = new Date();
        setDateShort(
          now.toLocaleDateString("en-US", { day: "numeric", month: "short" })
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return { times, sunrise, dateShort, hijriShort, loading };
}
