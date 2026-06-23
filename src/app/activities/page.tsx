import { CTASection } from "@/components/ui/CTASection";
import { ContentImage } from "@/components/ui/ContentImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Community activities and volunteer opportunities at Masjid Al-Athar in Marietta, GA.",
};

export default function ActivitiesPage() {
  return (
    <>
      <Hero
        title="Activities"
        subtitle="Our Mosque, Our Future"
        description="Join us at Masjid Al-Athar and become part of the positive impact we create together through activities and volunteer opportunities."
        image={IMAGES.activities.one.src}
        imageAlt={IMAGES.activities.one.alt}
        imageFit="contain"
        primaryCta={{ label: "Volunteer", href: "/volunteer" }}
        secondaryCta={{ label: "Donate", href: "/donations" }}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-foreground">
              &ldquo;Our Mosque Our Future&rdquo;
            </h2>
            <h3 className="mt-4 text-xl font-semibold text-primary">
              A Call for Help: Building Our Future, Together
            </h3>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Sadly, many masajid today are facing the harsh reality of relying on
              rented spaces, with no permanent home to call their own. Every month,
              these masajid make great sacrifices, praying that they can meet the
              rent, cover essential expenses, and continue to serve their
              communities.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our mosque is no different. We are in urgent need of a permanent space
              to continue fulfilling our mission. We are reaching out to those who
              can help us break this cycle and offer us the opportunity to own our
              future.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Your contribution will not just be a donation—it will be an investment
              in the future of our mosque, our children, and the generations who
              will benefit from the legacy we build today.
            </p>
            <Button href="/building-project" variant="primary" className="mt-8">
              Support Building Project
            </Button>
          </FadeIn>
          <ContentImage
            src={IMAGES.activities.two.src}
            alt={IMAGES.activities.two.alt}
            aspect="intrinsic"
          />
        </div>
      </section>

      <section className="bg-muted/50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Community Volunteerism"
            subtitle="We are dedicated to building a vibrant community through a range of activities and volunteer opportunities."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <ContentImage
              src={IMAGES.masjid.potluck.src}
              alt={IMAGES.masjid.potluck.alt}
              aspect="intrinsic"
            />
            <ContentImage
              src={IMAGES.masjid.eid.src}
              alt={IMAGES.masjid.eid.alt}
              aspect="intrinsic"
            />
          </div>
          <div className="mt-10 text-center">
            <Button href="/volunteer" variant="primary" size="lg">
              Get Involved
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Please Join Us"
        description="Together, we can end the cycle of uncertainty and create a lasting, vibrant space where our faith and community can flourish."
        primaryCta={{ label: "Donate", href: "/donations" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
