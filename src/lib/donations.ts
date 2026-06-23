export type DonationMethod = "phone" | "email";
export type DonationIcon =
  | "building"
  | "landmark"
  | "heart-hands"
  | "scale"
  | "users"
  | "calendar";

export interface DonationCardData {
  id: string;
  title: string;
  icon: DonationIcon;
  description: string;
  method: DonationMethod;
  value: string;
  displayValue?: string;
  displayLabel: string;
  qrImage?: string;
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
    displayValue: "678-903-3121",
    displayLabel: "Zelle Phone",
    qrImage: "/images/wix/qr-masjid-operations.png",
    zelleNote: "Send via Zelle using phone number",
  },
  {
    id: "new-masjid-construction",
    title: "New Masjid Construction",
    icon: "landmark",
    description:
      "Support our new masjid building project at 1611 Sands Place SE, Marietta, GA — help secure a permanent home for our community.",
    method: "phone",
    value: "6789033121",
    displayValue: "678-903-3121",
    displayLabel: "Zelle Phone",
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
  {
    id: "children-activities",
    title: "Children Activities",
    icon: "users",
    description:
      "Support Islamic education, youth programs, and activities for children at the masjid.",
    method: "phone",
    value: "6788516300",
    displayValue: "+1 (678) 851-6300",
    displayLabel: "Zelle Phone",
    qrImage: "/images/wix/qr-children-activities.png",
    zelleNote: "Send via Zelle using phone number",
  },
  {
    id: "community-events",
    title: "Community Events",
    icon: "calendar",
    description:
      "Help fund community gatherings, lectures, celebrations, and outreach events.",
    method: "phone",
    value: "6788516300",
    displayValue: "+1 (678) 851-6300",
    displayLabel: "Zelle Phone",
    qrImage: "/images/wix/qr-community-events.png",
    zelleNote: "Send via Zelle using phone number",
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
