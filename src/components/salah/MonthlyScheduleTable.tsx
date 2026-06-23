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

function MonthNav({
  monthLabel,
  onPrevMonth,
  onNextMonth,
}: {
  monthLabel: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-center">
      <button
        type="button"
        onClick={onPrevMonth}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-border bg-white text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Previous month"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <span className="flex-1 text-center text-sm font-bold text-foreground sm:min-w-[10rem] sm:text-base">
        {monthLabel}
      </span>
      <button
        type="button"
        onClick={onNextMonth}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-border bg-white text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Next month"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
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
        <div className="flex flex-col gap-4 border-b border-border bg-muted/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground sm:text-2xl">
              Monthly Schedule
            </h3>
            <p className="text-xs font-medium text-muted-foreground sm:text-sm">
              Adhan &amp; Iqamah — {monthLabel}
            </p>
          </div>
          <MonthNav
            monthLabel={monthLabel}
            onPrevMonth={onPrevMonth}
            onNextMonth={onNextMonth}
          />
        </div>

        {loading ? (
          <div className="space-y-2 p-4 sm:p-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton h-12 rounded-lg" />
            ))}
          </div>
        ) : (
          <>
            {/* Mobile: card list */}
            <ul className="divide-y divide-border md:hidden">
              {days.map((day) => {
                const isToday = day.day === today;
                return (
                  <li
                    key={day.gregorianDate}
                    className={`px-4 py-3 ${isToday ? "bg-primary/5" : ""}`}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-bold text-foreground">{day.day}</span>
                      <span className="text-xs text-muted-foreground">
                        {day.hijriDate} {day.hijriMonth}
                      </span>
                      {isToday && (
                        <span className="rounded bg-primary px-1.5 py-0.5 text-xs font-bold text-white">
                          Today
                        </span>
                      )}
                    </div>
                    <dl className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
                      {day.prayers.map((p) => (
                        <div key={p.name} className="flex justify-between gap-1">
                          <dt className="font-semibold text-foreground">{p.name}</dt>
                          <dd className="text-right tabular-nums">
                            <span className="text-foreground">{p.adhan12}</span>
                            <span className="mx-0.5 text-muted-foreground">/</span>
                            <span className="font-bold text-primary">{p.iqamah12}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                );
              })}
            </ul>

            {/* Desktop: table */}
            <div className="hidden overflow-x-auto md:block">
              <p className="sr-only">Swipe horizontally on small screens is not needed; use the list view on mobile.</p>
              <table className="w-full min-w-[640px] text-left text-sm lg:min-w-[720px]">
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
                    {Array.from({ length: 5 }).map((_, i) => (
                      <th key={i} className="px-3 py-2 font-medium" scope="col">
                        Adhan / Iqamah
                      </th>
                    ))}
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
                        <td className="px-4 py-3">
                          <span className="font-bold text-foreground">{day.day}</span>
                          <span className="ml-2 hidden text-xs text-muted-foreground lg:inline">
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
            </div>
          </>
        )}
      </div>
    </FadeIn>
  );
}
