import { DonationCard } from "@/components/donations/DonationCard";
import { ContentImage } from "@/components/ui/ContentImage";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/ui/CTASection";
import {
  DONATION_BENEFITS,
  DONATION_CARDS,
  SADAQAH_RECIPIENTS,
  ZAKAT_FITR_AMOUNT,
} from "@/lib/donations";
import { CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { MONTHLY_DONATION } from "@/lib/site-content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Donations",
  description:
    "Support Masjid Al-Athar through Zelle donations for masjid operations, sadaqah, and zakat-ul-maal. All donations are tax deductible.",
};

export default function DonationsPage() {
  return (
    <>
      <Hero
        title="Support Masjid Al-Athar"
        subtitle="Donations"
        description="Your generous contributions help sustain our masjid, educational programs, and community services. All donations are tax deductible."
        image={IMAGES.slider.donations.src}
        imageAlt={IMAGES.slider.donations.alt}
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Support Masjid Al-Athar"
          subtitle="Your generous contributions help sustain our masjid, educational programs, and community services."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {DONATION_CARDS.map((card, index) => (
            <FadeIn key={card.id} delay={index * 0.1}>
              <DonationCard data={card} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-primary/5 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Masjid Monthly Subscription
            </h3>
            <p className="mt-4 text-muted-foreground">{MONTHLY_DONATION.description}</p>
            <p className="mt-4 font-display text-3xl font-bold text-primary">
              ${MONTHLY_DONATION.amount}/month
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Goal: {MONTHLY_DONATION.membersGoal} community members
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Your Donations Are Essential
              </h3>
              <ul className="mt-6 space-y-3">
                {DONATION_BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-muted-foreground">
                Barakallahu Feekum wa jazakallahu Khair. May Allah shower His
                blessings and mercy upon you and your family.
              </p>
            </FadeIn>

            <ContentImage
              src={IMAGES.masjid.donation.src}
              alt={IMAGES.masjid.donation.alt}
              aspect="square"
            />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <ContentImage
              src={IMAGES.masjid.mosque.src}
              alt={IMAGES.masjid.mosque.alt}
              aspect="video"
            />

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Other Ways to Donate
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">CashApp</dt>
                    <dd className="flex items-center gap-2 text-muted-foreground">
                      <Image
                        src={IMAGES.payments.cashapp.src}
                        alt={IMAGES.payments.cashapp.alt}
                        width={80}
                        height={24}
                        className="h-6 w-auto"
                      />
                      {CONTACT.cashApp}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Check</dt>
                    <dd className="text-muted-foreground">
                      Payable to Masjid Al-Athar
                      <br />
                      {CONTACT.mailingAddress}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Phone</dt>
                    <dd>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="text-primary hover:underline"
                      >
                        {CONTACT.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <FadeIn>
            <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src={IMAGES.masjid.mosque.src}
                  alt={IMAGES.masjid.mosque.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Zakat-ul-Maal
                </h3>
                <blockquote className="mt-4 border-l-4 border-primary pl-4 text-sm italic text-muted-foreground">
                  &ldquo;Alms are for the poor and the needy and those employed to
                  manage the funds, for those whose hearts have turned to truth
                  and belief recently, for those in slavery (and for the freedom
                  of captives) and in debt, and for fighters for the cause of
                  Allah and for the wayfarer ordered by Allah, and Allah is All
                  knowing All Wise.&rdquo;
                </blockquote>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src={IMAGES.masjid.donation.src}
                  alt={IMAGES.masjid.donation.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Sadaqah
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Masjid Al-Athar is honored to handle your Sadaqah obligations.
                  Your contributions will be distributed to community members who
                  truly need it, in accordance with Islamic principles.
                </p>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  Eligible recipients:
                </p>
                <ul className="mt-2 grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                  {SADAQAH_RECIPIENTS.map((r) => (
                    <li key={r}>• {r}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-muted-foreground">
                  The believer&apos;s shade on the Day of Resurrection will be his
                  Sadaqah. (Tirmidhi: 1925)
                </p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.2}>
            <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src={IMAGES.masjid.potluck.src}
                  alt={IMAGES.masjid.potluck.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Zakat-ul-Fitr
                </h3>
                <p className="mt-4 text-2xl font-bold text-primary">
                  {ZAKAT_FITR_AMOUNT}
                </p>
                <blockquote className="mt-4 border-l-4 border-accent pl-4 text-sm italic text-muted-foreground">
                  &ldquo;Keep up the prayer and pay the prescribed alms. Whatever
                  good you store up for yourselves, you will find it with God: He
                  sees everything you do.&rdquo; — Holy Quran 2:110
                </blockquote>
                <p className="mt-4 text-sm text-muted-foreground">
                  Ibn &apos;Abbas (RAA) narrated that the Messenger of Allah (ﷺ)
                  enjoined Zakat-ul-fitr on the one who fasts to purify him from
                  any indecent act or speech and for the purpose of providing food
                  for the needy.
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <blockquote className="font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
              &ldquo;The parable of those who spend their possessions for the
              sake of Allah SWT is that of a grain out of which grow seven ears,
              in every ear a hundred grains: for Allah grants manifold increase
              unto whom He wills; and Allah is infinite, all-knowing.&rdquo;
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="New Masjid Building Project"
        description="Whoever builds a mosque for Allah, then Allah will build a house for him in Paradise."
        primaryCta={{ label: "Support Building Project", href: "/building-project" }}
        secondaryCta={{ label: "Learn About Masjid", href: "/masjid" }}
      />
    </>
  );
}
