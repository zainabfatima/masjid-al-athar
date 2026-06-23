export interface DonationHadith {
  id: string;
  text: string;
  narrator?: string;
  book: string;
  reference: string;
  grade?: string;
}

export interface DonationQuranVerse {
  id: string;
  text: string;
  surah: string;
  ayah: string;
  context?: string;
}

/** Ahadith encouraging charity and spending in the way of Allah */
export const DONATION_HADITH: DonationHadith[] = [
  {
    id: "half-date",
    text: "Save yourself from the Fire even if it is with half a date in charity; and if you cannot find that, then with a kind word.",
    narrator: "Abu Hurairah (RA)",
    book: "Sahih al-Bukhari",
    reference: "Hadith 1413",
    grade: "Sahih",
  },
  {
    id: "charity-wealth",
    text: "Charity does not decrease wealth. No one forgives another except that Allah increases him in honor, and no one humbles himself for the sake of Allah except that Allah raises him.",
    narrator: "Abu Hurairah (RA)",
    book: "Sahih Muslim",
    reference: "Hadith 2588",
    grade: "Sahih",
  },
  {
    id: "build-mosque",
    text: "Whoever builds a mosque for Allah, Allah will build for him a house like it in Paradise.",
    narrator: "Uthman ibn Affan (RA)",
    book: "Sahih al-Bukhari",
    reference: "Hadith 450",
    grade: "Sahih",
  },
  {
    id: "shade-charity",
    text: "The believer's shade on the Day of Resurrection will be his charity.",
    narrator: "Abu Hurairah (RA)",
    book: "Jami' at-Tirmidhi",
    reference: "Hadith 1925",
    grade: "Hasan Sahih",
  },
  {
    id: "sadaqah-jariyah",
    text: "When a person dies, his deeds come to an end except for three: ongoing charity (sadaqah jariyah), beneficial knowledge, or a righteous child who prays for him.",
    narrator: "Abu Hurairah (RA)",
    book: "Sahih Muslim",
    reference: "Hadith 1631",
    grade: "Sahih",
  },
  {
    id: "sadaqah-sins",
    text: "Sadaqah extinguishes sin as water extinguishes fire.",
    narrator: "Mu'adh ibn Jabal (RA)",
    book: "Jami' at-Tirmidhi",
    reference: "Hadith 614",
    grade: "Hasan Sahih",
  },
  {
    id: "upper-hand",
    text: "The upper hand is better than the lower hand. The upper hand is the one that gives, and the lower hand is the one that takes.",
    narrator: "Hudhayfah (RA)",
    book: "Sahih al-Bukhari",
    reference: "Hadith 1421",
    grade: "Sahih",
  },
  {
    id: "secret-charity",
    text: "Seven are (the persons) whom Allah will shade on the Day of Resurrection... and a man who gives in charity and hides it so that his left hand does not know what his right hand has spent.",
    narrator: "Abu Hurairah (RA)",
    book: "Sahih al-Bukhari",
    reference: "Hadith 660",
    grade: "Sahih",
  },
];

export const DONATION_QURAN_VERSES: DonationQuranVerse[] = [
  {
    id: "baqarah-261",
    text: "The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes; in each spike is a hundred grains. And Allah multiplies His reward for whom He wills.",
    surah: "Surah Al-Baqarah",
    ayah: "2:261",
    context: "On the reward of spending in Allah's cause",
  },
  {
    id: "tawbah-60",
    text: "Indeed, the charities are only for the poor, the needy, those employed to collect them, those whose hearts are to be reconciled, for freeing captives, for those in debt, for the cause of Allah, and for the traveler — an obligation from Allah.",
    surah: "Surah At-Tawbah",
    ayah: "9:60",
    context: "On the categories of Zakat recipients",
  },
  {
    id: "baqarah-110",
    text: "And establish prayer and give zakah, and whatever good you put forward for yourselves — you will find it with Allah. Indeed, Allah of what you do is Seeing.",
    surah: "Surah Al-Baqarah",
    ayah: "2:110",
    context: "On prayer and prescribed alms",
  },
];

/** Short hadith shown above donation payment cards */
export const FEATURED_HADITH_BEFORE_DONATE: DonationHadith =
  DONATION_HADITH.find((h) => h.id === "shade-charity")!;

export type DonationSliderItem =
  | { type: "hadith"; hadith: DonationHadith }
  | { type: "quran"; verse: DonationQuranVerse };

/** Rotating quotes on the donations page */
export const DONATION_SLIDER_ITEMS: DonationSliderItem[] = [
  { type: "hadith", hadith: DONATION_HADITH.find((h) => h.id === "half-date")! },
  { type: "hadith", hadith: DONATION_HADITH.find((h) => h.id === "charity-wealth")! },
  { type: "hadith", hadith: DONATION_HADITH.find((h) => h.id === "build-mosque")! },
  { type: "hadith", hadith: DONATION_HADITH.find((h) => h.id === "sadaqah-jariyah")! },
  { type: "quran", verse: DONATION_QURAN_VERSES.find((v) => v.id === "baqarah-261")! },
  { type: "hadith", hadith: DONATION_HADITH.find((h) => h.id === "sadaqah-sins")! },
];
