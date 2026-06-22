"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import type { DaySchedule } from "@/lib/prayer-times";

interface MonthlyScheduleTableProps {
  days: DaySchedule[];
  loading: boolean;
  monthLabel: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function MonthlyScheduleTable({
  days,
  loading,
  monthLabel,
  onPrevMonth,
  onNextMonth,
}: MonthlyScheduleTableProps) {
  const today = new Date().getDate();

  return (
    <FadeIn>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-muted/50 px-4 py-4 sm:px-6">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Monthly Schedule
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              Adhan &amp; Iqamah — {monthLabel}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrevMonth}
              className="rounded-lg border border-border bg-white p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="min-w-[10rem] text-center text-base font-bold text-foreground">
              {monthLabel}
            </span>
            <button
              type="button"
              onClick={onNextMonth}
              className="rounded-lg border border-border bg-white p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="space-y-2 p-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="skeleton h-12 rounded-lg" />
              ))}
            </div>
          ) : (
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-primary text-white">
                  <th className="px-4 py-3 font-semibold" scope="col">
                    Date
                  </th>
                  <th className="px-3 py-3 font-semibold" scope="col">
                    Fajr
                  </th>
                  <th className="px-3 py-3 font-semibold" scope="col">
                    Dhuhr
                  </th>
                  <th className="px-3 py-3 font-semibold" scope="col">
                    Asr
                  </th>
                  <th className="px-3 py-3 font-semibold" scope="col">
                    Maghrib
                  </th>
                  <th className="px-3 py-3 font-semibold" scope="col">
                    Isha
                  </th>
                </tr>
                <tr className="border-b border-border bg-primary/90 text-xs text-white/90">
                  <th className="px-4 py-2" scope="col" />
                  <th className="px-3 py-2 font-medium" scope="col">
                    Adhan / Iqamah
                  </th>
                  <th className="px-3 py-2 font-medium" scope="col">
                    Adhan / Iqamah
                  </th>
                  <th className="px-3 py-2 font-medium" scope="col">
                    Adhan / Iqamah
                  </th>
                  <th className="px-3 py-2 font-medium" scope="col">
                    Adhan / Iqamah
                  </th>
                  <th className="px-3 py-2 font-medium" scope="col">
                    Adhan / Iqamah
                  </th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => {
                  const isToday = day.day === today;
                  return (
                    <tr
                      key={day.gregorianDate}
                      className={`border-b border-border/60 ${
                        isToday ? "bg-primary/8 font-medium" : "hover:bg-muted/40"
                      }`}
                    >
                      <td className="whitespace-nowrap px-4 py-3">
                        <span className="font-bold text-foreground">{day.day}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          {day.hijriDate} {day.hijriMonth}
                        </span>
                        {isToday && (
                          <span className="ml-2 rounded bg-primary px-1.5 py-0.5 text-xs font-bold text-white">
                            Today
                          </span>
                        )}
                      </td>
                      {day.prayers.map((p) => (
                        <td key={p.name} className="px-3 py-3">
                          <span className="block font-semibold text-foreground">
                            {p.adhan12}
                          </span>
                          <span className="block text-xs font-bold text-primary">
                            {p.iqamah12}
                          </span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </FadeIn>
  );
}
