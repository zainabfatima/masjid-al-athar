import { FeatureCards } from "@/components/home/FeatureCards";
import { PrayerTimes } from "@/components/home/PrayerTimes";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Masjid Al-Athar, East Cobb Islamic Center — a 501(c)(3) non-profit in Marietta, GA serving our diverse multicultural community.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Welcome to Masjid Al-Athar"
        subtitle={CONTACT.address.split(",")[0]}
        description="Masjid Al-Athar, East Cobb Islamic Center is a 501(c)(3) non-profit organization located in Marietta, GA. We are a diverse multicultural community and we invite all to come learn about the Islamic faith."
        image="https://images.unsplash.com/photo-1591604129939-f1efa4cfdf08?w=1920&q=80"
        imageAlt="Mosque exterior with beautiful Islamic architecture"
        primaryCta={{ label: "Get Directions", href: CONTACT.mapsUrl, external: true }}
        secondaryCta={{ label: "About Us", href: "/about-us" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FadeIn>
              <SectionHeading
                title="Assalamu Alaikum wa Rahmatullah"
                subtitle="East Cobb Islamic Center"
                align="left"
              />
              <p className="text-lg leading-relaxed text-muted-foreground">
                We welcome you to our masjid — a place of worship, learning, and
                community for Muslims and visitors of all backgrounds in Marietta,
                Georgia.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-10">
              <blockquote className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <p className="font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;Successful indeed are the believers, those who offer
                  their Salât with all solemnity and full submissiveness.&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-primary">
                  — Noble Quran, Surah Al-Mu&apos;minun: 1-2
                </footer>
              </blockquote>
            </FadeIn>
          </div>

          <PrayerTimes />
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Community"
            subtitle="Explore programs, services, and ways to connect with Masjid Al-Athar."
          />
          <FeatureCards />
        </div>
      </section>

      <CTASection
        title="Support Our Masjid"
        description="Your generous contributions help sustain daily operations, educational programs, and community outreach."
        primaryCta={{ label: "Donate Now", href: "/donations" }}
        secondaryCta={{ label: "Building Project", href: "/building-project" }}
      />
    </>
  );
}
