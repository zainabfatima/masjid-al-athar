"use client";

import { CONTACT_TOPICS, type ContactTopic } from "@/lib/email-routing";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<ContactTopic>("general");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, topic, message, website }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setTopic("general");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h3 className="font-display text-xl font-bold text-foreground">
          Message sent
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          JazakAllahu khairan. We received your message and will respond as soon as
          possible, in sha Allah.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary-light"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
      noValidate
    >
      <h3 className="font-display text-xl font-bold text-foreground">
        Send Us a Message
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Choose a topic so your message reaches the right inbox. We will respond as
        soon as possible, in sha Allah.
      </p>

      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-foreground">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Phone <span className="font-normal text-muted-foreground">(optional)</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
          />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Topic
          <select
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value as ContactTopic)}
            className={fieldClass}
          >
            {CONTACT_TOPICS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-foreground">
          Message
          <textarea
            required
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${fieldClass} resize-y`}
          />
        </label>

        {/* Honeypot — hidden from users */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label>
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
        </div>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
