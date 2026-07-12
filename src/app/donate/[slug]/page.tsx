import { ZeffyFormEmbed } from "@/components/donations/ZeffyFormEmbed";
import { ZEFFY_CAMPAIGNS, getZeffyCampaign } from "@/lib/zeffy-donations";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface DonateCampaignPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ZEFFY_CAMPAIGNS.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({
  params,
}: DonateCampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getZeffyCampaign(slug);

  if (!campaign) {
    return { title: "Donate" };
  }

  return {
    title: `Donate — ${campaign.title}`,
    description: `Make a ${campaign.title.toLowerCase()} donation to Masjid Al-Athar.`,
  };
}

export default async function DonateCampaignPage({ params }: DonateCampaignPageProps) {
  const { slug } = await params;
  const campaign = getZeffyCampaign(slug);

  if (!campaign) {
    notFound();
  }

  if (!campaign.configured || !campaign.iframeSrc) {
    return (
      <section className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <h1 className="font-display text-2xl font-bold text-foreground">
          {campaign.title}
        </h1>
        <p className="mt-4 text-muted-foreground">
          This donation form is being set up. Please check back soon or use the
          Zelle options on our donations page.
        </p>
        <Link
          href="/donations"
          className="mt-6 inline-block font-semibold text-primary hover:underline"
        >
          Back to Donations
        </Link>
      </section>
    );
  }

  return <ZeffyFormEmbed title={campaign.title} iframeSrc={campaign.iframeSrc} />;
}
