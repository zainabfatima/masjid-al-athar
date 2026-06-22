import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CONTACT, JUMMAH_TIMES } from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Masjid",
  description:
    "Daily prayers, Jumu'ah, Ramadan activities, Hifz program, Saturday School, and community programs at Masjid Al-Athar in Marietta, GA.",
};

const PROGRAMS = [
  {
    title: "Surat Al-Baqarah Hifz Program",
    description:
      "One ayat daily memorization with revision every other week in the masjid with the instructor on Sundays after Maghrib Salat. For sisters only. Contact sister Maryam at 678-851-6300.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80",
  },
  {
    title: "Saturday School",
    description:
      "Saturdays 11 AM to 2 PM for boys and girls 4 years and older. Registrations still open.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    href: "/saturday-school",
  },
  {
    title: "Noorani Qaida",
    description:
      "Your first step toward learning Arabic and the Holy Quran with Tajweed. Sisters only.",
    image: "https://images.unsplash.com/photo-1585036156171-3841649478f4?w=800&q=80",
  },
  {
    title: "Brazilian Jiu-Jitsu",
    description:
      "Self-defense martial arts for boys (Friday 5-7 PM) and men (Saturday 5-7 PM). Promotes discipline and physical fitness.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
  },
];

export default function MasjidPage() {
  return (
    <>
      <Hero
        title="Masjid Al-Athar"
        subtitle="Prayers & Programs"
        description="Open for all five daily prayers and Jumu'ah. Join us for Ramadan activities, educational programs, and community gatherings."
        image="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=80"
        imageAlt="Community prayer gathering at the masjid"
        primaryCta={{ label: "Prayer Times", href: "/" }}
        secondaryCta={{ label: "Donate", href: "/donations" }}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading title="Salat Al-Jumu'ah" align="left" />
            <p className="mb-6 text-muted-foreground">
              Please try to make wudu at home. Jazakallahu Khair.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {JUMMAH_TIMES.map((jummah) => (
                <div
                  key={jummah.label}
                  className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {jummah.label}
                  </p>
                  <p className="mt-2 font-display text-3xl font-bold text-primary">
                    {jummah.time}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <SectionHeading title="Daily Prayers" align="left" />
            <p className="text-muted-foreground">
              Masjid Al-Athar is open for all five daily prayers. Join our
              community for congregational salah throughout the week.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-muted/50 p-6">
              <h3 className="font-display text-lg font-bold text-foreground">
                Ramadan Activities
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Iftar and dinners</li>
                <li>• Isha and Taraweeh prayer</li>
                <li>• Family night & lecture</li>
                <li>• Nightly iftars and tarawih prayers</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Masjid Al-Athar Activities"
            subtitle="Educational programs and community initiatives for all ages."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {PROGRAMS.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.1}>
                <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                    {program.href && (
                      <Link
                        href={program.href}
                        className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Contact Us
                </h3>
                <address className="mt-4 not-italic text-muted-foreground">
                  <p className="font-semibold text-foreground">{CONTACT.address}</p>
                  <p className="mt-2">
                    <a href={`tel:${CONTACT.phone}`} className="text-primary hover:underline">
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p className="mt-1">
                    <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
                      {CONTACT.email}
                    </a>
                  </p>
                </address>
                <p className="mt-4 text-sm text-muted-foreground">
                  Family counseling available.
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Join Our Mailing List
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Never miss an update from Masjid Al-Athar.
                </p>
                <Button
                  href={`mailto:${CONTACT.email}?subject=Mailing List Subscription`}
                  variant="primary"
                  className="mt-4"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <CTASection
        title="Masjid Building Project"
        description="Help us purchase our own building to better serve the local Muslim community."
        primaryCta={{ label: "Support Building Project", href: "/building-project" }}
        secondaryCta={{ label: "Donate", href: "/donations" }}
      />
    </>
  );
}
