"use client";

import { useCallback, useEffect, useState } from "react";
import {
  CALCULATION_METHOD,
  FALLBACK_TODAY,
  PRAYER_LOCATION,
  type DaySchedule,
  type PrayerSlot,
  buildPrayerSlots,
  parseDaySchedule,
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

/** Compact fetch for homepage widget */
export function useTodayPrayerTimes() {
  const [times, setTimes] = useState<PrayerSlot[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(PRAYER_LOCATION)}&method=${CALCULATION_METHOD}`
    )
      .then((r) => r.json())
      .then((json) => setTimes(buildPrayerSlots(json.data.timings)))
      .catch(() => setTimes(FALLBACK_TODAY))
      .finally(() => setLoading(false));
  }, []);

  return { times, loading };
}
