import { DonationCard } from "@/components/donations/DonationCard";
import { FeaturedHadithQuote } from "@/components/donations/FeaturedHadithQuote";
import { ContentImage } from "@/components/ui/ContentImage";
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
    "Support Masjid Al-Athar through Zelle donations for masjid operations, sadaqah, zakat, children's activities, and community events. All donations are tax deductible.",
};

export default function DonationsPage() {
  return (
    <>
      <section className="section-white border-b border-border mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Support Masjid Al-Athar"
          subtitle="Your generous contributions help sustain our masjid, educational programs, and community services."
        />

        <FeaturedHadithQuote />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {DONATION_CARDS.map((card, index) => (
            <FadeIn key={card.id} delay={index * 0.1}>
              <DonationCard data={card} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-primary/5 py-10 sm:py-16">
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

      <section className="bg-muted/50 py-10 sm:py-16">
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
                    <dd className="flex flex-wrap items-center gap-2 text-muted-foreground">
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
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
                  &ldquo;Indeed, the charities are only for the poor, the needy,
                  those employed to collect them, those whose hearts are to be
                  reconciled, for freeing captives, for those in debt, for the
                  cause of Allah, and for the traveler — an obligation from
                  Allah.&rdquo;
                </blockquote>
                <p className="mt-3 text-xs font-bold text-primary sm:text-sm">
                  — Surah At-Tawbah, Ayah 9:60 (Noble Quran)
                </p>
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
                <ul className="mt-2 grid grid-cols-1 gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                  {SADAQAH_RECIPIENTS.map((r) => (
                    <li key={r}>• {r}</li>
                  ))}
                </ul>
                <blockquote className="mt-4 border-l-4 border-primary pl-4 text-sm italic text-muted-foreground">
                  &ldquo;The believer&apos;s shade on the Day of Resurrection will
                  be his charity.&rdquo;
                </blockquote>
                <p className="mt-2 text-xs font-bold text-primary sm:text-sm">
                  — Jami&apos; at-Tirmidhi, Hadith 1925 (Hasan Sahih) · Narrated
                  by Abu Hurairah (RA)
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
                  &ldquo;And establish prayer and give zakah, and whatever good
                  you put forward for yourselves — you will find it with Allah.
                  Indeed, Allah of what you do is Seeing.&rdquo;
                </blockquote>
                <p className="mt-2 text-xs font-bold text-primary sm:text-sm">
                  — Surah Al-Baqarah, Ayah 2:110 (Noble Quran)
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Ibn &apos;Abbas (RA) narrated that the Messenger of Allah (ﷺ)
                  enjoined Zakat-ul-Fitr on the one who fasts to purify him from
                  any indecent act or speech and for the purpose of providing food
                  for the needy.
                </p>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  — Sunan Abi Dawud, Hadith 1609 · Sahih al-Bukhari, Hadith 1503
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="New Masjid Building Project"
        description="Whoever builds a mosque for Allah, Allah will build for him a house like it in Paradise."
        primaryCta={{ label: "Support Building Project", href: "/building-project" }}
        secondaryCta={{ label: "Learn About Masjid", href: "/masjid" }}
      />
    </>
  );
}
