import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { PROGRAMS_LIST } from "@/lib/site-content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Islamic education programs at Masjid Al-Athar: Qaidah An-Nuraniyyah, Hifz, Islamic Studies, and Sirah An-Nabawiyyah.",
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title="Programs"
        subtitle="Islamic Education"
        description="Quality Islamic education for all ages — from foundational Quran reading to memorization and the biography of the Prophet ﷺ."
        image={IMAGES.programs.qaida.src}
        imageAlt={IMAGES.programs.qaida.alt}
        primaryCta={{ label: "Saturday School", href: "/saturday-school" }}
        secondaryCta={{ label: "Masjid", href: "/masjid" }}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Current Programs"
          subtitle="Educational programs rooted in the Quran and authentic Sunnah."
        />
        <div className="grid gap-10">
          {PROGRAMS_LIST.map((program, index) => (
            <FadeIn key={program.title} delay={index * 0.08}>
              <article
                className={`grid gap-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div
                  className={`relative h-64 lg:h-full lg:min-h-[280px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={`p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {program.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Don&apos;t see the class you&apos;re looking for?
            </h3>
            <p className="mt-4 text-muted-foreground">
              Subscribe for the latest class updates from Masjid Al-Athar.
            </p>
            <Button
              href={`mailto:${CONTACT.email}?subject=Program Updates Subscription`}
              variant="primary"
              className="mt-6"
            >
              Join Mailing List
            </Button>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Enroll Today"
        description="Give yourself and your children a strong foundation in Islamic knowledge."
        primaryCta={{ label: "Contact Masjid", href: "/contact" }}
        secondaryCta={{ label: "About Us", href: "/about-us" }}
      />
    </>
  );
}
