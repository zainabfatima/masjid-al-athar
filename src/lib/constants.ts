export const SITE_NAME = "Masjid Al-Athar";
export const SITE_TAGLINE = "East Cobb Islamic Center";
export const SITE_DESCRIPTION =
  "Masjid Al-Athar is a 501(c)(3) non-profit Islamic center in Marietta, GA. We inspire, educate, and serve our diverse multicultural community.";

export const CONTACT = {
  address: "1180 Franklin Gateway Suite #200, Marietta, GA 30067",
  mailingAddress: "1148 Franklin Gateway Suite F, Marietta GA 30067",
  phone: "6789033121",
  email: "contact@masjidalathar.org",
  zelleEmail: "masjidalathar@gmail.com",
  cashApp: "$AlAtharmasjid",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1180+Franklin+Gateway+SE+Marietta+GA+30067",
};

export const BUILDING_PROJECT = {
  address: "1611 Sands Place SE, Marietta GA 30067",
  downPaymentGoal: 200000,
  totalCost: 975000,
  squareFeet: 8517,
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/masjid", label: "Masjid" },
  { href: "/saturday-school", label: "Saturday School" },
  { href: "/donations", label: "Donations" },
  { href: "/building-project", label: "Building Project" },
] as const;

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

export const HOME_FEATURES = [
  {
    title: "Community Events",
    description:
      "Join gatherings, lectures, and celebrations that strengthen bonds within our ummah.",
    href: "/masjid",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",
    cta: "Explore",
  },
  {
    title: "Islamic Studies",
    description:
      "Learn the Quran, authentic Sunnah, and Islamic teachings for all ages.",
    href: "/masjid",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80",
    cta: "Learn More",
  },
  {
    title: "Family Counsel",
    description:
      "Confidential guidance rooted in Islamic principles for families in our community.",
    href: "/masjid",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    cta: "Discover",
  },
  {
    title: "About Us",
    description:
      "Discover our mission to inspire, educate, and serve through faith and community.",
    href: "/about-us",
    image:
      "https://images.unsplash.com/photo-1564121932298-c45d64b47a73?w=800&q=80",
    cta: "Learn More",
  },
  {
    title: "Volunteer",
    description:
      "Serve the community through programs, events, and masjid operations.",
    href: "/masjid",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    cta: "Join Us",
  },
  {
    title: "Donation",
    description:
      "Support masjid operations, sadaqah, zakat, and our building project.",
    href: "/donations",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    cta: "Give Now",
  },
  {
    title: "Visit Us",
    description:
      "Come pray, learn, and connect at our masjid in Marietta, Georgia.",
    href: "/masjid",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4cfdf08?w=800&q=80",
    cta: "Get Directions",
  },
] as const;
