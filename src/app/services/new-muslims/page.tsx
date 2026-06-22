import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Muslims",
  description:
    "Congratulations and guidance for new Muslims at Masjid Al-Athar, East Cobb Islamic Center.",
};

export default function NewMuslimsPage() {
  return (
    <>
      <Hero
        title="Congratulations to the New Muslim"
        subtitle="Welcome to Islam"
        description="Especially in these times, it is a great blessing from Allah that He gives specific individuals the ability to see the truth and light of Islam."
        image={IMAGES.programs.sirah.src}
        imageAlt={IMAGES.programs.sirah.alt}
        compact
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Welcome to the Ummah" align="left" />
          <p className="leading-relaxed text-muted-foreground">
            A new Muslim—and, in fact, every Muslim—should always be thankful to Allah
            that Allah has blessed him with this ever-important knowledge and
            understanding of His religion.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            By converting to Islam, the new Muslim has entered into a new realm that
            is most likely very different from his previous outlook on life. Via Islam
            the individual has found the means by which the Lord will be pleased with
            him and he becomes pleased with his Lord.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            As one grows more in Islam and as one&apos;s knowledge and faith increases,
            the individual is able to appreciate more and more of its beauty. The
            result is a spiritual life on a very special plane that only those who know
            this faith are able to experience and enjoy.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            There is a lot to look forward to. The embracing of Islam is the
            significant first step and the rest, Allah willing, shall come by
            increasing one&apos;s knowledge, faith and attachment to Islam.
          </p>

          <div className="mt-10 space-y-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">
              Resources for New Muslims
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Guide for the New Muslim</li>
              <li>• A Brief Illustrated Guide to Understanding Islam</li>
              <li>• Free Quran for a New Muslim (Spanish, English, French)</li>
            </ul>
            <a
              href={`mailto:${CONTACT.email}?subject=New Muslim Resources Request`}
              className="mt-4 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-light"
            >
              Request Resources
            </a>
          </div>
        </FadeIn>
      </section>

      <CTASection
        title="We Are Here to Support You"
        description="Visit the masjid, attend programs, and connect with our community."
        primaryCta={{ label: "Contact Masjid", href: "/contact" }}
        secondaryCta={{ label: "Programs", href: "/programs" }}
      />
    </>
  );
}
