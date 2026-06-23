import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Will (Wasiyyah)",
  description:
    "Islamic will and wasiyyah guidance from Masjid Al-Athar. Contact the masjid for support with Islamic estate planning.",
};

const WASIYYAH_TOPICS = [
  "Appointing a trustworthy executor for your estate",
  "Guardianship for minor children",
  "Islamic burial and funeral wishes",
  "Distribution of wealth according to Sharia",
  "Sadaqah Jariyah (ongoing charity) from your estate",
  "Debts and obligations to be settled",
  "Bequests within the one-third limit",
];

export default function IslamicWillPage() {
  return (
    <>
      <Hero
        title="Islamic Will (Wasiyyah)"
        subtitle="Resources"
        description="Plan your estate according to Islamic principles with guidance from Masjid Al-Athar."
        image={IMAGES.decor.pattern.src}
        imageAlt={IMAGES.decor.pattern.alt}
        compact
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Wasiyyah Guidance" align="left" />
          <p className="leading-relaxed text-muted-foreground">
            An Islamic will (wasiyyah) ensures your affairs are handled according to
            the teachings of Islam. Masjid Al-Athar provides guidance on preparing a
            will that honors your faith and protects your family.
          </p>
          <ul className="mt-8 space-y-3">
            {WASIYYAH_TOPICS.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                {topic}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              For Islamic will guidance, please contact the masjid. Consult Imam
              Abdul Shadeed or reach out through our contact page for assistance.
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=Islamic Will (Wasiyyah) Inquiry`}
              className="mt-4 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-light"
            >
              Contact Masjid
            </a>
          </div>
        </FadeIn>
      </section>

      <CTASection
        title="Plan With Purpose"
        description="Preparing a wasiyyah is an act of responsibility toward your family and your faith."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "About Us", href: "/about-us" }}
      />
    </>
  );
}
