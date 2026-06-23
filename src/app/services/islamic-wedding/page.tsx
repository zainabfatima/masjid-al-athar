import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Wedding (Nikah)",
  description:
    "Masjid Al-Athar provides Nikah services for residents of the local community in the masjid.",
};

export default function IslamicWeddingPage() {
  return (
    <>
      <Hero
        title="Islamic Wedding (Nikah)"
        subtitle="Masjid Services"
        description="Masjid Al-Athar provides Nikah services for residents of the local community in the masjid."
        image={IMAGES.decor.islamic.src}
        imageAlt={IMAGES.decor.islamic.alt}
        compact
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Nikah Services" align="left" />
          <p className="leading-relaxed text-muted-foreground">
            Nikah is a traditional Islamic marriage contract that signifies the union
            between a man and a woman. It involves consent from both parties,
            witnesses, and a dowry. Nikah establishes rights and responsibilities,
            encouraging a lifelong commitment based on mutual respect and love within
            the bounds of Islam.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The Quran emphasizes the divine wisdom behind the creation of spouses,
            highlighting their role in bringing tranquility and compassion to one
            another&apos;s lives.
          </p>
          <blockquote className="mt-8 border-l-4 border-primary pl-6 italic text-foreground">
            &ldquo;And among His Signs is this, that He created for you wives from
            among yourselves, that you may find repose in them, and He has put
            between you affection and mercy. Verily, in that are indeed signs for a
            people who reflect.&rdquo; — Surah Ar-Rum: 21
          </blockquote>
          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold text-foreground">
              Request Nikah Services
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Please email us with your name, phone number, and message. For sisters,
              include your wakeel/guardian&apos;s name.
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=Nikah Service Request&body=First Name:%0D%0ALast Name:%0D%0AEmail:%0D%0APhone:%0D%0AWakeel/Guardian (if applicable):%0D%0A%0D%0AMessage:`}
              className="mt-4 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-light"
            >
              Submit Request via Email
            </a>
          </div>
        </FadeIn>
      </section>

      <CTASection
        title="Family Counseling Available"
        description="Pre-marital Islamic counseling is available to help couples build a strong foundation."
        primaryCta={{ label: "Family Counseling", href: "/services/family-counseling" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />
    </>
  );
}
