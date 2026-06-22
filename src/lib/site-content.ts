import { CONTACT } from "./constants";
import { IMAGES } from "./images";

export const HOME_SLIDES = [
  {
    id: "welcome",
    image: IMAGES.slider.welcome.src,
    imageAlt: IMAGES.slider.welcome.alt,
    title: "Welcome to Masjid Al-Athar",
    subtitle: "East Cobb Islamic Center",
    description:
      "Masjid Al-Athar is a 501(c)(3) non-profit organization located in Marietta, GA. We are a diverse multicultural community and we invite all to come learn about the Islamic faith.",
    primaryCta: { label: "Get Directions", href: "/contact" },
    secondaryCta: { label: "About Us", href: "/about-us" },
  },
  {
    id: "community",
    image: IMAGES.slider.community.src,
    imageAlt: IMAGES.slider.community.alt,
    title: "Our Community",
    subtitle: "Prayer, Learning & Service",
    description:
      "Join us for daily prayers, Jumu'ah, Islamic education, family programs, and community events that strengthen our ummah.",
    primaryCta: { label: "Masjid Programs", href: "/masjid" },
    secondaryCta: { label: "Activities", href: "/activities" },
  },
  {
    id: "donations",
    image: IMAGES.slider.donations.src,
    imageAlt: IMAGES.slider.donations.alt,
    title: "Support Your Masjid",
    subtitle: "Sadaqah Jariyah",
    description:
      "Your generous contributions help sustain daily operations, educational programs, and community outreach. All donations are tax deductible.",
    primaryCta: { label: "Donate Now", href: "/donations" },
    secondaryCta: { label: "Zelle & QR Codes", href: "/donations" },
  },
  {
    id: "building",
    image: IMAGES.slider.mosque.src,
    imageAlt: IMAGES.slider.mosque.alt,
    title: "Our Mosque, Our Future",
    subtitle: "Building Project",
    description:
      "Help us purchase a permanent home for our masjid at 1611 Sands Place SE, Marietta GA — a lasting space for worship and community.",
    primaryCta: { label: "Building Project", href: "/building-project" },
    secondaryCta: { label: "Donate", href: "/donations" },
  },
] as const;

export const MONTHLY_DONATION = {
  amount: 100,
  membersGoal: 100,
  description:
    "By donating a minimum of $100 a month with a minimum of 100 community members will help offset our entire monthly bills without any additional need for fundraisers or big donations.",
};

export const PAYPAL_BUILDING_URL =
  "https://www.masjidalathar.org/paypal-masjid-al-athar-new-home";

export const FAMILY_COUNSELING_PHONES = ["6788861575", "6789033121"];

export const PROGRAMS_LIST = [
  {
    title: "Qaidah An-Nuraniyyah",
    subtitle: "The Luminous Foundation",
    description:
      "Qaidah Nuraniyyah is a foundational course designed to introduce students to the fundamental principles of reading and reciting the Quran with correct pronunciation and Tajweed. This class serves as a crucial stepping stone for students who aspire to become proficient in reading and understanding the Quran.",
    image: IMAGES.programs.qaida.src,
    imageAlt: IMAGES.programs.qaida.alt,
  },
  {
    title: "Saf Al-Hifz Al-Quran",
    subtitle: "Quran Memorization Class",
    description:
      "Saf al Hafiz Al-Quran is an enriching course designed to guide students on a transformative journey of memorizing the Quran. This comprehensive and structured program helps students of all ages commit the Quran to memory.",
    image: IMAGES.programs.hifz.src,
    imageAlt: IMAGES.programs.hifz.alt,
  },
  {
    title: "Islamic Studies",
    subtitle: "Boys and Girls",
    description:
      "Our Islamic Studies class for kids is an engaging and interactive journey designed to introduce young learners to the beauty and teachings of Islam. This class encourages a love for Islamic learning and provides children with a strong foundation in faith, ethics, and values.",
    image: IMAGES.programs.studies.src,
    imageAlt: IMAGES.programs.studies.alt,
  },
  {
    title: "Al-Sira An-Nabawiyyah",
    subtitle: "The Biography of the Prophet",
    description:
      "Sirah An Nabawiyyah is an enlightening course that delves into the life and teachings of the Prophet Muhammad (peace be upon him), offering a comprehensive understanding of his character, actions, and mission.",
    image: IMAGES.programs.sirah.src,
    imageAlt: IMAGES.programs.sirah.alt,
  },
] as const;

export { CONTACT };
