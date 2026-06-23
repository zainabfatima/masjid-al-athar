import { DonationCard } from "@/components/donations/DonationCard";
import { CTASection } from "@/components/ui/CTASection";
import { ContentImage } from "@/components/ui/ContentImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUILDING_PROJECT, CONTACT } from "@/lib/constants";
import { DONATION_CARDS } from "@/lib/donations";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Building Project",
  description:
    "Support Masjid Al-Athar's new building project at 1611 Sands Place SE, Marietta GA. Help us raise $200,000 for the down payment.",
};

export default function BuildingProjectPage() {
  const downPaymentPercent = Math.round(
    (BUILDING_PROJECT.downPaymentGoal / BUILDING_PROJECT.totalCost) * 100
  );

  return (
    <>
      <Hero
        title="New Masjid Building Project"
        subtitle="بارك الله فيك"
        description="Help us purchase our own building to better serve the local Muslim community and achieve financial stability."
        image={IMAGES.slider.mosque.src}
        imageAlt={IMAGES.slider.mosque.alt}
        primaryCta={{ label: "Donate Now", href: "/donations" }}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading title="Masjid Al-Athar Story" align="left" />
            <p className="leading-relaxed text-muted-foreground">
              Masjid Al-Athar in Marietta, GA is looking forward to purchasing a
              new building. The masjid&apos;s rent contract with a difficult
              landlord will be ending this year and we are looking to buy our own
              building to better serve the local community and for financial
              stability.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Masjid Al-Athar has served the growing local Muslim community with
              daily and Jumu&apos;ah prayers, nightly iftars and tarawih in
              Ramadan, Saturday school, Quran lessons for children, monthly
              community potluck dinners, brothers and sisters halaqah, and more.
            </p>
          </FadeIn>

          <ContentImage
            src={IMAGES.masjid.exterior2021.src}
            alt={IMAGES.masjid.exterior2021.alt}
            aspect="square"
          />
        </div>
      </section>

      <section className="bg-muted/50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Property Details"
            subtitle={`${BUILDING_PROJECT.address}`}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Square Feet", value: BUILDING_PROJECT.squareFeet.toLocaleString() },
              { label: "Total Cost", value: `$${BUILDING_PROJECT.totalCost.toLocaleString()}` },
              { label: "Down Payment Goal", value: `$${BUILDING_PROJECT.downPaymentGoal.toLocaleString()}` },
              { label: "Location", value: "< 1 mile from current masjid" },
            ].map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-display text-xl font-bold text-primary">
                    {stat.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-semibold text-foreground">Down Payment Progress</span>
                <span className="text-muted-foreground">{downPaymentPercent}% of total</span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${downPaymentPercent}%` }}
                  role="progressbar"
                  aria-valuenow={downPaymentPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Building project down payment goal"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We need to raise ${BUILDING_PROJECT.downPaymentGoal.toLocaleString()} for the down
                payment in sha Allah. If one person donates or raises a share of
                $1,000, we need only 140 people to meet the target.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ContentImage
          src={IMAGES.slider.mosque.src}
          alt={IMAGES.slider.mosque.alt}
          aspect="wide"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl italic leading-relaxed text-foreground">
              &ldquo;Whoever builds a mosque for the sake of Allah, Allah will
              build a house for him in Paradise.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              The Prophet (ﷺ) also said: &ldquo;When a man dies, his deeds come
              to an end except for three things: Sadaqah Jariyah (continuing
              charity), knowledge which is beneficial, or a virtuous descendant
              who prays for him.&rdquo; [Muslim]
            </footer>
          </blockquote>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative h-48">
                <Image
                  src={IMAGES.masjid.exterior2021.src}
                  alt={IMAGES.masjid.exterior2021.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Importance of the Masjid
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Masjid is called the house of Allah Almighty. In the Quran,
                  Allah Almighty says &ldquo;وَأَنَّ الْمَسَاجِدَ لِلَّهِ&rdquo; and
                  it is stated in a blessed hadith of Sahih Muslim that masjids are
                  the most beloved places to Allah Almighty. The one whose heart is
                  attached to the masjid will be under the shade of the throne of
                  Allah Almighty on the Day of Judgment.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Masjid plays a basic role to establish a good environment in a
                  Muslim society. It is not only a place of worship — it is also a
                  place where people meet and greet, and a social system prevails
                  everywhere.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground">
                How to Donate
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Check:</strong> Payable to
                  Masjid Al-Athar, {CONTACT.mailingAddress}
                </li>
                <li>
                  <strong className="text-foreground">Zelle:</strong>{" "}
                  {CONTACT.zelleEmail} or {CONTACT.phone}
                </li>
                <li>
                  <strong className="text-foreground">Phone:</strong> Call or
                  text {CONTACT.phone}
                </li>
              </ul>
              <p className="mt-4 text-sm italic text-muted-foreground">
                Your donations are tax deductible. Barakallahu feekum wa
                jazakallahu khair.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Donate via Zelle"
            subtitle="Use any of the options below to support the building project and masjid operations."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {DONATION_CARDS.map((card, index) => (
              <FadeIn key={card.id} delay={index * 0.1}>
                <DonationCard data={card} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Please Donate and Share"
        description="No donation is too small. Charity does not decrease one in wealth. Please forward this message — it will be Sadaqah Jariyah."
        primaryCta={{ label: "Donate Now", href: "/donations" }}
        secondaryCta={{
          label: "Contact Us",
          href: `mailto:${CONTACT.email}`,
          external: true,
        }}
      />
    </>
  );
}
