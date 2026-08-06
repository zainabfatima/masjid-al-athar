import { inboxForTopic } from "@/lib/email-routing";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  website?: string; // honeypot
};

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    // Silent success for bots that fill the honeypot
    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const topic = body.topic?.trim() || "general";
    const message = body.message?.trim() ?? "";

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters." },
        { status: 400 },
      );
    }

    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPass = requiredEnv("SMTP_PASS");
    const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const fromAddress = process.env.SMTP_FROM?.trim() || smtpUser;
    const toAddress = inboxForTopic(topic);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `[Website Contact] ${topic} — ${name}`;
    const text = [
      `New message from the Masjid Al-Athar website contact form.`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "(not provided)"}`,
      `Topic: ${topic}`,
      `Routed to: ${toAddress}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `"Masjid Al-Athar Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
