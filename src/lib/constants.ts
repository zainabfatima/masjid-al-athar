import { IMAGES } from "./images";

export const SITE_NAME = "Masjid Al-Athar";
export const SITE_TAGLINE = "East Cobb Islamic Center";
export const SITE_DESCRIPTION =
  "Masjid Al-Athar is a 501(c)(3) non-profit Islamic center in Marietta, GA. We inspire, educate, and serve our diverse multicultural community.";

export const CONTACT = {
  address: "1180 Franklin Gateway Suite #200, Marietta, GA 30067",
  addressShort: "1180 Franklin Gateway Suite 200, Marietta GA 30067",
  mailingAddress: "1148 Franklin Gateway Suite F, Marietta GA 30067",
  phone: "6789033121",
  phoneFormatted: "678-903-3121",
  email: "contact@masjidalathar.org",
  zelleEmail: "masjidalathar@gmail.com",
  cashApp: "$AlAtharmasjid",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1180+Franklin+Gateway+SE+Marietta+GA+30067",
};

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@masjidal-athar776",
} as const;

export const BUILDING_PROJECT = {
  address: "1611 Sands Place SE, Marietta GA 30067",
  downPaymentGoal: 200000,
  totalCost: 975000,
  squareFeet: 8517,
};

export type NavLink = { href: string; label: string; shortLabel?: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/salah-schedule", label: "Salah Schedule", shortLabel: "Salah" },
  { href: "/building-project", label: "Building Project", shortLabel: "Building" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/about-us", label: "About" },
  { href: "/activities", label: "Activities" },
  { href: "/programs", label: "Programs" },
  { href: "/masjid", label: "Masjid" },
  { href: "/donations", label: "Donations" },
  { href: "/contact", label: "Contact" },
];

export const RESOURCE_LINKS: NavLink[] = [
  { href: "/services/islamic-wedding", label: "Islamic Wedding" },
  { href: "/services/islamic-will", label: "Islamic Will" },
  { href: "/services/family-counseling", label: "Family Counseling" },
  { href: "/services/new-muslims", label: "New Muslims" },
  { href: "/saturday-school", label: "Saturday School" },
];

export const JUMMAH_TIMES = [
  { label: "First Jumu'ah", time: "1:15 PM" },
  { label: "Second Jumu'ah", time: "2:10 PM" },
];

export const WHY_US = [
  "To call to the Quran and authentic Sunnah as understood by the Pious Predecessors, and to return to these two sources in all of our affairs. Any religious affair which has no basis in the Qur'an and authentic Sunnah is not from our religion.",
  "To warn people against the evils of Shirk in all its forms and manifestations.",
  "To promote the authentic Sunnah and encourage people to adhere to it in all of their affairs.",
  "To warn people against innovation (Bid'ah) and its evils and harms.",
  "To warn against ideologies and methodologies which are contrary to the Qur'an and Sunnah, including extremism in all its forms.",
  "To follow the way of the Sunnah wa Jama'a, understanding of the Qur'an & Sunnah, as well as in issues of belief ('Aqidah), worship and all other religious matters.",
  "To love the Companions and defend them from those who would attack them.",
  "To promote sound Islamic knowledge and encourage people to increase in their learning of the religion.",
  "To facilitate the spread of Islamic knowledge through literature, lectures and conferences, as well as through the use of multimedia.",
  "To develop a respect and attachment to the great scholars of the Sunnah, past and present.",
  "To believe that the Qur'an is the uncreated speech of Allah.",
  "To not declare any Muslim to be a disbeliever due to a major sin s/he may have committed.",
  "To command the good and forbid the evil.",
  "To teach, encourage, and promote high values and character.",
  "To provide services for our Muslim sisters thereby allowing them to also learn their religion and increase in Iman.",
  "To engage with the Muslim youth and mold them into practicing Muslims who are constructive members of society.",
  "To call non-Muslims to Islam and show them the beauty of this religion.",
  "To encourage Muslims to worship Allah and increase in their Iman.",
];

export const OUR_CALL = [
  "To call to the Quran and authentic Sunnah as understood by the Pious Predecessors, and to return to these two sources in all of our affairs. Any religious affair which has no basis in the Qur'an and authentic Sunnah is not from our religion.",
  "To warn people against the evils of Shirk (polytheism) in all its forms and manifestations.",
  "To warn people against newly innovated matters into the religion (Bid'ah) and its evils and harms.",
  "To promote the authentic Sunnah and encourage people to adhere to it in all of their affairs.",
  "To warn against ideologies and methodologies which are contrary to the Qur'an and Sunnah, including extremism in all its forms.",
  "To follow the way of Ahlus Sunnah wa Jama'a in the understanding of the Qur'an & Sunnah, as well as in issues of creed ('Aqidah), worship (Ibadah) and all other religious matters.",
  "To love the Sahaaba (Companions of the Prophet Muhammad ﷺ) and defend them from those who would attack them.",
  "To promote sound Islamic knowledge and encourage people to increase in their learning of the religion.",
  "To facilitate the spread of Islamic knowledge through literature, lectures, conferences, and the use of multimedia.",
  "To foster a respect and attachment to the Ulema, major scholars of the Sunnah, past and present.",
  "To believe that the Qur'an is the uncreated speech of Allah.",
  "To not declare any Muslim to be a disbeliever due to a major sin s/he may have committed.",
  "To command the good and forbid the evil.",
  "To teach, encourage, and promote high values and character.",
  "To provide services for our Muslim sisters thereby allowing them to also learn their religion and increase in Iman.",
  "To engage with the Muslim youth and mold them into practicing Muslims who are constructive members of society.",
  "To call non-Muslims to Islam and show them the beauty of this religion.",
  "To encourage Muslims to worship Allah and increase their Iman.",
];

export const HOME_FEATURES = [
  {
    title: "Salah Schedule",
    description:
      "View today's prayer times, monthly adhan & iqamah, and Jumu'ah schedules.",
    href: "/salah-schedule",
    image: IMAGES.masjid.interior.src,
    imageAlt: IMAGES.masjid.interior.alt,
    cta: "View Schedule",
  },
  {
    title: "Community Events",
    description:
      "Join gatherings, lectures, and celebrations that strengthen bonds within our ummah.",
    href: "/activities",
    image: IMAGES.activities.one.src,
    imageAlt: IMAGES.activities.one.alt,
    cta: "Explore",
  },
  {
    title: "Islamic Studies",
    description:
      "Learn the Quran, authentic Sunnah, and Islamic teachings for all ages.",
    href: "/programs",
    image: IMAGES.programs.studies.src,
    imageAlt: IMAGES.programs.studies.alt,
    cta: "Learn More",
  },
  {
    title: "Family Counsel",
    description:
      "Confidential guidance rooted in Islamic principles for families in our community.",
    href: "/services/family-counseling",
    image: IMAGES.masjid.interior.src,
    imageAlt: IMAGES.masjid.interior.alt,
    cta: "Discover",
  },
  {
    title: "About Us",
    description:
      "Discover our mission to inspire, educate, and serve through faith and community.",
    href: "/about-us",
    image: IMAGES.masjid.mosque.src,
    imageAlt: IMAGES.masjid.mosque.alt,
    cta: "Learn More",
  },
  {
    title: "Volunteer",
    description:
      "Serve the community through programs, events, and masjid operations.",
    href: "/volunteer",
    image: IMAGES.activities.two.src,
    imageAlt: IMAGES.activities.two.alt,
    cta: "Join Us",
  },
  {
    title: "Donation",
    description:
      "Support masjid operations, sadaqah, zakat, and our building project.",
    href: "/donations",
    image: IMAGES.masjid.donation.src,
    imageAlt: IMAGES.masjid.donation.alt,
    cta: "Give Now",
  },
  {
    title: "Visit Us",
    description:
      "Come pray, learn, and connect at our masjid in Marietta, Georgia.",
    href: "/contact",
    image: IMAGES.masjid.exterior2021.src,
    imageAlt: IMAGES.masjid.exterior2021.alt,
    cta: "Get Directions",
  },
] as const;

export const LEGAL_LINKS: NavLink[] = [
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export const ALL_SITEMAP_PATHS = [
  ...NAV_LINKS,
  ...RESOURCE_LINKS,
  ...LEGAL_LINKS,
].filter(
  (link, index, self) => self.findIndex((l) => l.href === link.href) === index
);
