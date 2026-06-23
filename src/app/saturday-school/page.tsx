import { CTASection } from "@/components/ui/CTASection";
import { ContentImage } from "@/components/ui/ContentImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saturday School",
  description:
    "Islamic Saturday School at Masjid Al-Athar for children 4 years and older. Saturdays 11 AM to 2 PM in Marietta, GA.",
};

export default function SaturdaySchoolPage() {
  return (
    <>
      <Hero
        title="Saturday School"
        subtitle="Islamic Education"
        description="Saturdays 11 AM to 2 PM for boys and girls 4 years and older. Registrations still open."
        image={IMAGES.school.saturdaySchool.src}
        imageAlt={IMAGES.school.saturdaySchool.alt}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading title="Saturday School 2022" align="left" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Assalamu alaikum wa rahmatullahi wa barakatuhu.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We would like to extend a warm welcome to all our new and returning
              students of Islamic School. We hope the children have rested and
              enjoyed their summer holidays and are happy to be back.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              All the teachers are looking forward to a wonderful and successful
              school year full of learning, in sha Allah.
            </p>
          </FadeIn>

          <ContentImage
            src={IMAGES.school.saturdaySchool.src}
            alt={IMAGES.school.saturdaySchool.alt}
            aspect="square"
          />
        </div>
      </section>

      <section className="bg-muted/50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Program Details"
            subtitle="Quality Islamic education in a nurturing environment."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Schedule",
                detail: "Saturdays, 11:00 AM – 2:00 PM",
              },
              {
                title: "Ages",
                detail: "Boys & Girls, 4 years and older",
              },
              {
                title: "Registration",
                detail: "Registrations still open — contact the masjid",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                  <h3 className="font-display text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <ContentImage
            src={IMAGES.programs.qaida.src}
            alt={IMAGES.programs.qaida.alt}
            aspect="video"
          />
          <ContentImage
            src={IMAGES.school.assalamuAlikum.src}
            alt={IMAGES.school.assalamuAlikum.alt}
            aspect="video"
          />
        </div>
      </section>

      <CTASection
        title="Enroll Your Child"
        description="Give your children a strong foundation in Islamic knowledge and character."
        primaryCta={{ label: "Contact Masjid", href: "/masjid" }}
        secondaryCta={{ label: "About Us", href: "/about-us" }}
      />
    </>
  );
}
