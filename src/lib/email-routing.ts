/**
 * All website contact messages go to this inbox.
 * Zeffy payment receipts/notifications should also use this same address
 * (configure each form in the Zeffy dashboard).
 */
export const PRIMARY_INBOX = "masjidalathar@gmail.com";

export type ContactTopic =
  | "general"
  | "operations"
  | "sadaqah"
  | "zakat"
  | "construction"
  | "events";

export const CONTACT_TOPICS: { value: ContactTopic; label: string }[] = [
  { value: "general", label: "General question" },
  { value: "operations", label: "Masjid operations" },
  { value: "sadaqah", label: "Sadaqah" },
  { value: "zakat", label: "Zakat" },
  { value: "construction", label: "Building / construction" },
  { value: "events", label: "Community events / programs" },
];

export function inboxForTopic(_topic?: string): string {
  return process.env.SMTP_TO?.trim() || PRIMARY_INBOX;
}
