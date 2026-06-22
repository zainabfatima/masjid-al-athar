import { CTASection } from "@/components/ui/CTASection";
import { ContentImage } from "@/components/ui/ContentImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Masjid Al-Athar at 1180 Franklin Gateway Suite 200, Marietta GA 30067. Phone 678-903-3121.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Visit Masjid Al-Athar"
        description="We welcome your questions, feedback, and visits. Connect with our community in Marietta, Georgia."
        image={IMAGES.masjid.exterior2021.src}
        imageAlt={IMAGES.masjid.exterior2021.alt}
        primaryCta={{ label: "Get Directions", href: CONTACT.mapsUrl, external: true }}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading title="Contact" align="left" />
            <address className="not-italic">
              <p className="text-lg font-semibold text-foreground">
                {CONTACT.addressShort}
              </p>
              <p className="mt-4">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-lg text-primary hover:underline"
                >
                  {CONTACT.phoneFormatted}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-lg text-primary hover:underline"
                >
                  {CONTACT.email}
                </a>
              </p>
            </address>

            <div className="mt-8 rounded-2xl border border-border bg-muted/50 p-6">
              <h3 className="font-semibold text-foreground">Handicap Parking</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Handicap parking is available for those with permits. Thank you for
                respecting these designated spaces.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-foreground">Mailing Address (Checks)</h3>
              <p className="mt-2 text-muted-foreground">{CONTACT.mailingAddress}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Email us with your name, contact information, and message. We will
                respond as soon as possible, in sha Allah.
              </p>
              <a
                href={`mailto:${CONTACT.email}?subject=Website Contact&body=Name:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0AMessage:`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary-light"
              >
                Email Masjid Al-Athar
              </a>
            </div>
            <ContentImage
              src={IMAGES.masjid.mosque.src}
              alt={IMAGES.masjid.mosque.alt}
              aspect="video"
              className="mt-8"
            />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Visit Us for Prayer"
        description="Open for all five daily prayers and Jumu'ah. We look forward to welcoming you."
        primaryCta={{ label: "Masjid Programs", href: "/masjid" }}
        secondaryCta={{ label: "Donate", href: "/donations" }}
      />
    </>
  );
}
