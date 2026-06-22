import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { JUMMAH_TIMES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function JumuahSection() {
  return (
    <FadeIn>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[220px] lg:min-h-full">
            <Image
              src={IMAGES.activities.one.src}
              alt={IMAGES.activities.one.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Jumu&apos;ah Prayer
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Salat Al-Jumu&apos;ah at Masjid Al-Athar
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              Please try to make wudu at home. Jazakallahu Khair.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {JUMMAH_TIMES.map((j) => (
                <div
                  key={j.label}
                  className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-center"
                >
                  <p className="text-sm font-semibold text-muted-foreground">
                    {j.label}
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold text-primary">
                    {j.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
