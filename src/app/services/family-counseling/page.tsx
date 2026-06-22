import { CTASection } from "@/components/ui/CTASection";
import { ContentImage } from "@/components/ui/ContentImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { FAMILY_COUNSELING_PHONES } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Counseling",
  description:
    "Family counseling rooted in Islamic teachings at Masjid Al-Athar. Pre-marital and marital guidance available.",
};

const SERVICES = [
  {
    title: "Pre-Marital",
    description:
      "Before embarking on marriage, couples must understand the rights, responsibilities, and obligations enjoined by Allah. Premarital Islamic counseling helps couples communicate effectively and establish shared values.",
  },
  {
    title: "Marital",
    description:
      "Guidance for couples facing challenges, rooted in compassion and the teachings of the Quran and Sunnah.",
  },
  {
    title: "Family",
    description:
      "Support for families seeking to strengthen bonds and resolve conflicts within an Islamic framework.",
  },
];

const HELP_TOPICS = [
  "Understanding Rights and Responsibilities",
  "Effective Communication",
  "Establishing Shared Values",
  "Addressing Potential Challenges",
  "Practical Islamic Advice and Guidance",
];

export default function FamilyCounselingPage() {
  return (
    <>
      <Hero
        title="Family Counseling"
        subtitle="Compassionate Islamic Guidance"
        description="Masjid Al-Athar's Family Counseling provides compassionate guidance rooted in the Quran and Sunnah."
        image={IMAGES.masjid.interior.src}
        imageAlt={IMAGES.masjid.interior.alt}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground">
              Jabir reported: The Messenger of Allah, peace and blessings be upon
              him, said, &ldquo;If your brother requests your consultation, let him
              give counsel.&rdquo; — Sunan Ibn Majah 3747
            </blockquote>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At the heart of every family lies the invaluable bond of mutual support
              and guidance. We provide a nurturing environment where families can
              address challenges, overcome conflicts, and promote stronger
              connections.
            </p>
          </FadeIn>
          <ContentImage
            src={IMAGES.masjid.exterior2021.src}
            alt={IMAGES.masjid.exterior2021.alt}
            aspect="square"
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((s) => (
            <FadeIn key={s.title}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <h3 className="font-display text-xl font-bold text-foreground">
            What We Can Help With
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {HELP_TOPICS.map((t) => (
              <li key={t} className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm text-muted-foreground">
            Please note that our family counselors at Masjid Al-Athar are not licensed
            mental health professionals and do not offer professional medical or
            mental health advice, diagnosis, or treatment. While we provide family
            counseling grounded in Islamic teachings, it is not intended to substitute
            professional medical or mental health services.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h3 className="font-display text-xl font-bold text-foreground">
            Schedule Your Appointment
          </h3>
          <p className="mt-4 text-muted-foreground">
            Email{" "}
            <a href="mailto:contact@masjidalathar.org" className="text-primary hover:underline">
              contact@masjidalathar.org
            </a>
          </p>
          <p className="mt-2 text-muted-foreground">
            Text{" "}
            {FAMILY_COUNSELING_PHONES.map((p, i) => (
              <span key={p}>
                {i > 0 && " or "}
                <a href={`tel:${p}`} className="text-primary hover:underline">
                  {p.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
                </a>
              </span>
            ))}
          </p>
        </div>
      </section>

      <CTASection
        title="Islamic Wedding Services"
        description="Masjid Al-Athar also provides Nikah services for the local community."
        primaryCta={{ label: "Islamic Wedding", href: "/services/islamic-wedding" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />
    </>
  );
}
