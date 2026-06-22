"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { HOME_FEATURES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function FeatureCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {HOME_FEATURES.map((feature, index) => (
        <FadeIn key={feature.title} delay={index * 0.08}>
          <Link
            href={feature.href}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={feature.image}
                alt={`${feature.title} at Masjid Al-Athar`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                {feature.cta} →
              </span>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
