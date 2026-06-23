/** Masjid Al-Athar images from masjidalathar.org (Wix CDN) */
const w = (file: string) => `/images/wix/${file}`;

export const IMAGES = {
  logo: {
    src: w("logo.png"),
    alt: "Masjid Al-Athar logo",
  },
  slider: {
    welcome: {
      src: w("slider-welcome.png"),
      alt: "Front exterior of Masjid Al-Athar",
    },
    community: {
      src: w("slider-community.jpg"),
      alt: "Masjid Al-Athar community gathering",
    },
    announcement: {
      src: w("slider-announcement.png"),
      alt: "Masjid Al-Athar community announcement",
    },
    donations: {
      src: w("slider-donations.png"),
      alt: "Islamic decorative art — support the masjid through donations",
    },
    mosque: {
      src: w("slider-mosque.jpg"),
      alt: "Masjid Al-Athar mosque building",
    },
  },
  masjid: {
    exterior2021: {
      src: w("masjid-exterior-2021.jpg"),
      alt: "Masjid Al-Athar exterior photo 2021",
    },
    interior: {
      src: w("masjid-interior.jpg"),
      alt: "Interior of Masjid Al-Athar prayer hall",
    },
    mosque: {
      src: w("masjid-mosque.jpg"),
      alt: "Masjid Al-Athar mosque",
    },
    potluck: {
      src: w("masjid-potluck.png"),
      alt: "Community potluck night at Masjid Al-Athar",
    },
    eid: {
      src: w("masjid-eid.jpeg"),
      alt: "Eid celebration at Masjid Al-Athar",
    },
    donation: {
      src: w("masjid-donation.png"),
      alt: "Donate to Masjid Al-Athar",
    },
  },
  school: {
    saturdaySchool: {
      src: w("saturday-school.jpg"),
      alt: "Saturday Islamic school at Masjid Al-Athar",
    },
    assalamuAlikum: {
      src: w("assalamu-alikum.png"),
      alt: "Assalamu alaikum welcome graphic",
    },
  },
  activities: {
    one: { src: w("activities-1.jpg"), alt: "Community activities at the masjid" },
    two: { src: w("activities-2.jpg"), alt: "Volunteers serving the community" },
  },
  programs: {
    qaida: { src: w("program-qaida.png"), alt: "Qaidah An-Nuraniyyah program" },
    hifz: { src: w("program-hifz.png"), alt: "Saf Hifz al-Quran memorization" },
    studies: { src: w("program-studies.png"), alt: "Islamic Studies for boys and girls" },
    sirah: { src: w("program-sirah.png"), alt: "Al-Sira An-Nabawiyyah program" },
  },
  qr: {
    masjidOperations: {
      src: w("qr-masjid-operations.png"),
      alt: "Zelle QR code for masjid operations",
    },
    zakat: { src: w("qr-zakat.png"), alt: "Zelle QR code for Zakat-ul-Maal" },
    sadaqah: { src: w("qr-sadaqah.png"), alt: "Zelle QR code for Sadaqah" },
    childrenActivities: {
      src: w("qr-children-activities.png"),
      alt: "Zelle QR code for children activities",
    },
    communityEvents: {
      src: w("qr-community-events.png"),
      alt: "Zelle QR code for community events",
    },
    paypal: { src: w("qr-paypal.png"), alt: "PayPal donation QR code" },
  },
  payments: {
    paypal: { src: w("paypal-logo.png"), alt: "PayPal" },
    cashapp: { src: w("cashapp-logo.png"), alt: "Cash App" },
  },
  decor: {
    pattern: { src: w("islamic-pattern.png"), alt: "Islamic geometric pattern" },
    islamic: { src: w("islamic-decor.png"), alt: "Islamic decorative art" },
  },
} as const;

export type ImageAsset = { src: string; alt: string };
