export type DonationMethod = "phone" | "email";
export type DonationIcon = "building" | "heart-hands" | "scale";

export interface DonationCardData {
  id: string;
  title: string;
  icon: DonationIcon;
  description: string;
  method: DonationMethod;
  value: string;
  displayLabel: string;
  qrImage: string;
  zelleNote: string;
}

export const DONATION_CARDS: DonationCardData[] = [
  {
    id: "masjid-operations",
    title: "Masjid Operations",
    icon: "building",
    description:
      "Support daily masjid operations, utilities, maintenance, educational programs, and community services.",
    method: "phone",
    value: "6789033121",
    displayLabel: "Zelle ID",
    qrImage: "/images/wix/qr-masjid-operations.png",
    zelleNote: "Send via Zelle using phone number",
  },
  {
    id: "sadaqah",
    title: "Sadaqah",
    icon: "heart-hands",
    description:
      "Support families in need and community outreach initiatives through voluntary charity.",
    method: "email",
    value: "masjidalathar@gmail.com",
    displayLabel: "Zelle Email",
    qrImage: "/images/wix/qr-sadaqah.png",
    zelleNote: "Send via Zelle using email",
  },
  {
    id: "zakat-ul-maal",
    title: "Zakat-ul-Maal",
    icon: "scale",
    description:
      "Fulfill your annual Zakat obligation according to Islamic guidelines.",
    method: "email",
    value: "masjidalatharzakath@gmail.com",
    displayLabel: "Zelle Email",
    qrImage: "/images/wix/qr-zakat.png",
    zelleNote: "Send via Zelle using email",
  },
];

export const DONATION_BENEFITS = [
  "Tax deductible (501(c)(3) non-profit)",
  "Used to maintain the masjid",
  "Used to support community programs",
  "A Sadaqah Jariyah (ongoing charity)",
] as const;

export const ZAKAT_FITR_AMOUNT = "$10.00 per person by Eid";

export const SADAQAH_RECIPIENTS = [
  "The Poor",
  "The Destitute",
  "Those Collecting It",
  "To Soften the Hearts",
  "Freeing Individuals from Bondage",
  "Those in Debt",
  "In God's Path",
  "The Wayfarer",
] as const;
