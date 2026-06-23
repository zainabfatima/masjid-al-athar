import { CTASection } from "@/components/ui/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer opportunities at Masjid Al-Athar. Serve the community through programs, events, and masjid operations.",
};

const OPPORTUNITIES = [
  "Community events and gatherings",
  "Saturday school and youth programs",
  "Ramadan iftar and tarawih support",
  "Masjid operations and maintenance",
  "Outreach and dawah activities",
  "Administrative and technical support",
];

export default function VolunteerPage() {
  return (
    <>
      <Hero
        title="Community Volunteerism"
        subtitle="Get Involved"
        description="Join us at Masjid Al-Athar and become part of the positive impact we create together."
        image={IMAGES.activities.two.src}
        imageAlt={IMAGES.activities.two.alt}
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Volunteer Opportunities"
          subtitle="Our diverse programs cater to various interests and age groups."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {OPPORTUNITIES.map((item, index) => (
            <FadeIn key={item} delay={index * 0.05}>
              <li className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-12">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground">
              Sign Up to Volunteer
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Email us with your name, contact information, and areas where you would
              like to help. We will connect you with the right team, in sha Allah.
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=Volunteer Sign Up&body=First Name:%0D%0ALast Name:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0AHow I would like to help:`}
              className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary-light"
            >
              Volunteer Sign Up
            </a>
          </div>
        </FadeIn>
      </section>

      <CTASection
        title="Our Mosque, Our Future"
        description="Volunteering is sadaqah — help us build a thriving community."
        primaryCta={{ label: "Activities", href: "/activities" }}
        secondaryCta={{ label: "Donate", href: "/donations" }}
      />
    </>
  );
}
