"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { HOME_FEATURES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function FeatureCards() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {HOME_FEATURES.map((feature, index) => (
        <FadeIn key={feature.title} delay={index * 0.08}>
          <Link
            href={feature.href}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white card-elevated hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative h-52 overflow-hidden sm:h-60">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="mt-5 text-base font-bold text-primary group-hover:underline">
                {feature.cta} →
              </span>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
