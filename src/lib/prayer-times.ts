export const PRAYER_NAMES = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;
export type PrayerName = (typeof PRAYER_NAMES)[number];

/** Minutes after adhan for congregational iqamah at Masjid Al-Athar */
export const IQAMAH_OFFSET_MINUTES: Record<PrayerName, number> = {
  Fajr: 30,
  Dhuhr: 30,
  Asr: 30,
  Maghrib: 2,
  Isha: 30,
};

export const PRAYER_LOCATION = "Marietta, GA, USA";
export const CALCULATION_METHOD = 2; // ISNA

export interface PrayerSlot {
  name: PrayerName;
  adhan: string;
  iqamah: string;
  adhan12: string;
  iqamah12: string;
}

export interface DaySchedule {
  day: number;
  gregorianDate: string;
  hijriDate: string;
  hijriMonth: string;
  prayers: PrayerSlot[];
  sunrise: string;
}

export function cleanApiTime(raw: string): string {
  return raw.split(" ")[0].trim().slice(0, 5);
}

export function to12Hour(time24: string): string {
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const m = mStr ?? "00";
  const period = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${m} ${period}`;
}

export function addMinutes(time24: string, minutes: number): string {
  const [hStr, mStr] = time24.split(":");
  const total = parseInt(hStr, 10) * 60 + parseInt(mStr, 10) + minutes;
  const h = Math.floor((total / 60) % 24);
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function buildPrayerSlots(timings: Record<string, string>): PrayerSlot[] {
  return PRAYER_NAMES.map((name) => {
    const adhan = cleanApiTime(timings[name]);
    const iqamah = addMinutes(adhan, IQAMAH_OFFSET_MINUTES[name]);
    return {
      name,
      adhan,
      iqamah,
      adhan12: to12Hour(adhan),
      iqamah12: to12Hour(iqamah),
    };
  });
}

export function parseDaySchedule(entry: {
  date: {
    gregorian: { date: string; day: string };
    hijri: { date: string; month: { en: string }; day: string };
  };
  timings: Record<string, string>;
}): DaySchedule {
  const prayers = buildPrayerSlots(entry.timings);
  return {
    day: parseInt(entry.date.gregorian.day, 10),
    gregorianDate: entry.date.gregorian.date,
    hijriDate: entry.date.hijri.date,
    hijriMonth: entry.date.hijri.month.en,
    prayers,
    sunrise: to12Hour(cleanApiTime(entry.timings.Sunrise)),
  };
}

export function getNextPrayer(
  prayers: PrayerSlot[],
  now = new Date()
): { current: PrayerName | null; next: PrayerName; label: string } {
  const nowMins = now.getHours() * 60 + now.getMinutes();

  for (let i = 0; i < prayers.length; i++) {
    const [h, m] = prayers[i].adhan.split(":").map(Number);
    const adhanMins = h * 60 + m;
    if (nowMins < adhanMins) {
      return {
        current: i > 0 ? prayers[i - 1].name : null,
        next: prayers[i].name,
        label: `Next: ${prayers[i].name}`,
      };
    }
  }

  return {
    current: prayers[prayers.length - 1].name,
    next: "Fajr",
    label: "Next: Fajr (tomorrow)",
  };
}

export function getNextIqamah(
  prayers: PrayerSlot[],
  now = new Date()
): { prayer: PrayerName; iqamah24: string; isTomorrow: boolean } {
  for (const prayer of prayers) {
    const [h, m] = prayer.iqamah.split(":").map(Number);
    const target = new Date(now);
    target.setHours(h, m, 0, 0);
    if (target.getTime() > now.getTime()) {
      return { prayer: prayer.name, iqamah24: prayer.iqamah, isTomorrow: false };
    }
  }

  return {
    prayer: "Fajr",
    iqamah24: prayers[0].iqamah,
    isTomorrow: true,
  };
}

export function msUntilIqamah(iqamah24: string, isTomorrow: boolean, now = new Date()): number {
  const [h, m] = iqamah24.split(":").map(Number);
  const target = new Date(now);
  target.setHours(h, m, 0, 0);
  if (isTomorrow || target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1);
  }
  return Math.max(0, target.getTime() - now.getTime());
}

export function formatCountdown(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const hrs = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function formatCompactTime(time24: string): string {
  return to12Hour(time24);
}

export const FALLBACK_TODAY: PrayerSlot[] = buildPrayerSlots({
  Fajr: "05:15",
  Dhuhr: "13:30",
  Asr: "17:30",
  Maghrib: "20:30",
  Isha: "21:45",
});
