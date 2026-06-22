import { CTASection } from "@/components/ui/CTASection";
import { ContentImage } from "@/components/ui/ContentImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OUR_CALL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Masjid Al-Athar's mission to inspire, educate, and serve the people through authentic Islamic teachings.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Our Mission & Vision"
        description="Islam to Inspire, Educate and Serve the People"
        image={IMAGES.slider.welcome.src}
        imageAlt={IMAGES.slider.welcome.alt}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading title="Our Mission" align="left" />
            <p className="font-display text-2xl font-bold text-primary">
              &ldquo;Islam to Inspire, Educate and Serve the People&rdquo;
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The mission of Masjid Al-Athar is to cultivate harmony and understanding
              among our members, neighbors and local communities. Rooted in the
              principles of Islam, we strive to exemplify the noble morals commanded by
              our faith, steadfastly opposing all forms of extremism and partisanship.
            </p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                We aim to inspire people to faith and to increase in faith through
                talks, social media, and various social activities.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                We aim to educate Muslims and non-Muslims, both young and old, about the
                true Islamic teachings.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                We aim to encourage the worship of Allah (Glory be to Him) and to serve
                the community.
              </li>
            </ul>
          </FadeIn>
          <ContentImage
            src={IMAGES.masjid.interior.src}
            alt={IMAGES.masjid.interior.alt}
            aspect="square"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <ContentImage
            src={IMAGES.masjid.exterior2021.src}
            alt={IMAGES.masjid.exterior2021.alt}
            aspect="square"
            className="order-2 lg:order-1"
          />
          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <SectionHeading title="Our Vision" align="left" />
            <p className="font-display text-xl font-bold text-foreground">
              &ldquo;Islamic Faith in the Hearts of the People&rdquo;
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our vision highlights our wish for everyone among mankind to worship our
              Lord Allah alone (Glory be to Him) according to the teachings of His
              Messenger Muhammad (Peace be upon him).
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Masjid Al-Athar is dedicated to promoting an inclusive environment that
              encourages brotherhood and a strong sense of community.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Call"
            subtitle="Our guiding principles rooted in the Quran and authentic Sunnah."
          />
          <ol className="grid gap-4 sm:grid-cols-2">
            {OUR_CALL.map((item, index) => (
              <FadeIn key={index} delay={index * 0.03}>
                <li className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Join Our Community"
        description="Visit us for prayers, programs, and community events."
        primaryCta={{ label: "Visit Masjid", href: "/masjid" }}
        secondaryCta={{ label: "Donate", href: "/donations" }}
      />
    </>
  );
}
