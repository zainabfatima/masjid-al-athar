import { FeatureCards } from "@/components/home/FeatureCards";
import { HeroSlider } from "@/components/home/HeroSlider";
import { YouTubeBanner } from "@/components/home/YouTubeBanner";
import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Masjid Al-Athar, East Cobb Islamic Center — a 501(c)(3) non-profit in Marietta, GA.",
};

export default function HomePage() {
  return (
    <>
      <YouTubeBanner />
      <HeroSlider />

      <section className="section-white mx-auto max-w-7xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Assalamu Alaikum wa Rahmatullah"
            subtitle="East Cobb Islamic Center"
            align="left"
          />
          <p className="prose-body max-w-3xl text-foreground/90">
            Masjid Al-Athar, East Cobb Islamic Center is a{" "}
            <strong className="font-semibold text-foreground">501(c)(3) non-profit</strong>{" "}
            organization located in Marietta, GA. We are a diverse multicultural
            community and we invite all to come learn about the Islamic faith.
          </p>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-12">
          <blockquote className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            <p className="font-display text-xl font-semibold italic leading-relaxed text-foreground sm:text-2xl lg:text-3xl">
              &ldquo;Successful indeed are the believers, those who offer their
              Salât with all solemnity and full submissiveness.&rdquo;
            </p>
            <footer className="mt-5 text-base font-bold text-primary">
              — Noble Quran, Surah Al-Mu&apos;minun: 1-2
            </footer>
          </blockquote>
        </FadeIn>
      </section>

      <section className="section-muted border-y border-border py-12 sm:py-20">
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
