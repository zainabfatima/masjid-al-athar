export type ZeffyCampaignSlug =
  | "zakat"
  | "sadaqah"
  | "construction"
  | "masjid-operations";

export interface ZeffyCampaign {
  slug: ZeffyCampaignSlug;
  title: string;
  image: { src: string; alt: string };
  /** Zeffy iframe embed URL for the full-page donation form */
  iframeSrc?: string;
  /** Raw button embed HTML from Zeffy (pop-up trigger attributes) */
  buttonEmbedHtml?: string;
  /** Whether this campaign's Zeffy form is wired up and ready */
  configured: boolean;
}

export const ZEFFY_CAMPAIGNS: ZeffyCampaign[] = [
  {
    slug: "zakat",
    title: "Zakat",
    image: {
      src: "/images/donations/zakat.png",
      alt: "Zakat donation campaign",
    },
    iframeSrc: "https://www.zeffy.com/embed/donation-form/zakat-ul-maal-3",
    buttonEmbedHtml:
      'zeffy-form-link="https://www.zeffy.com/embed/donation-form/zakat-ul-maal-3?modal=true"',
    configured: true,
  },
  {
    slug: "sadaqah",
    title: "Sadaqah",
    image: {
      src: "/images/donations/sadaqah.png",
      alt: "Sadaqah donation campaign",
    },
    iframeSrc: "https://www.zeffy.com/embed/donation-form/sadaqah-13",
    buttonEmbedHtml:
      'zeffy-form-link="https://www.zeffy.com/embed/donation-form/sadaqah-13?modal=true"',
    configured: true,
  },
  {
    slug: "construction",
    title: "New Masjid Construction",
    image: {
      src: "/images/donations/construction.png",
      alt: "New masjid construction donation campaign",
    },
    iframeSrc: "https://www.zeffy.com/embed/donation-form/masjid-construction-2",
    buttonEmbedHtml:
      'zeffy-form-link="https://www.zeffy.com/embed/donation-form/masjid-construction-2?modal=true"',
    configured: true,
  },
  {
    slug: "masjid-operations",
    title: "Masjid Operations",
    image: {
      src: "/images/donations/masjid-operations.png",
      alt: "Masjid operations donation campaign",
    },
    iframeSrc: "https://www.zeffy.com/embed/donation-form/donate-in-the-name-of-allah",
    buttonEmbedHtml:
      'zeffy-form-link="https://www.zeffy.com/embed/donation-form/donate-in-the-name-of-allah?modal=true"',
    configured: true,
  },
];

/** Deduplicated Zeffy header script sources (populated as forms are added) */
export const ZEFFY_HEADER_SCRIPT_SRCS: string[] = [
  "https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js",
];

export function getZeffyCampaign(slug: string): ZeffyCampaign | undefined {
  return ZEFFY_CAMPAIGNS.find((campaign) => campaign.slug === slug);
}

export function getConfiguredZeffyCampaigns(): ZeffyCampaign[] {
  return ZEFFY_CAMPAIGNS.filter((campaign) => campaign.configured);
}
