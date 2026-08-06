/**
 * Inbox routing for contact-form topics and donation-related inquiries.
 * Payment receipts for card donations are sent by Zeffy (configure in Zeffy dashboard).
 */
export const EMAIL_INBOXES = {
  general: "contact@masjidalathar.org",
  operations: "masjidalathar@gmail.com",
  sadaqah: "masjidalathar@gmail.com",
  zakat: "masjidalatharzakath@gmail.com",
  construction: "masjidalathar@gmail.com",
  events: "masjidalathar@gmail.com",
} as const;

export type ContactTopic = keyof typeof EMAIL_INBOXES;

export const CONTACT_TOPICS: { value: ContactTopic; label: string }[] = [
  { value: "general", label: "General question" },
  { value: "operations", label: "Masjid operations" },
  { value: "sadaqah", label: "Sadaqah" },
  { value: "zakat", label: "Zakat" },
  { value: "construction", label: "Building / construction" },
  { value: "events", label: "Community events / programs" },
];

export function inboxForTopic(topic: string): string {
  if (topic in EMAIL_INBOXES) {
    return EMAIL_INBOXES[topic as ContactTopic];
  }
  return EMAIL_INBOXES.general;
}
