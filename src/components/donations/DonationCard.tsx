"use client";

import { Building2, CalendarDays, Copy, ExternalLink, HandHeart, Landmark, Scale, Users } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import type { DonationCardData, DonationIcon } from "@/lib/donations";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";

const ICONS: Record<DonationIcon, typeof Building2> = {
  building: Building2,
  landmark: Landmark,
  "heart-hands": HandHeart,
  scale: Scale,
  users: Users,
  calendar: CalendarDays,
};

interface DonationCardProps {
  data: DonationCardData;
}

export function DonationCard({ data }: DonationCardProps) {
  const [toastVisible, setToastVisible] = useState(false);
  const Icon = ICONS[data.icon];

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data.value);
      setToastVisible(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = data.value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setToastVisible(true);
    }
  }, [data.value]);

  const zelleUrl =
    data.method === "email"
      ? `https://www.zellepay.com/`
      : `https://www.zellepay.com/`;

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card card-elevated transition-all duration-300 hover:-translate-y-0.5">
        <div className="border-b border-border/60 bg-muted/40 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-card-foreground sm:text-xl">
                {data.title}
              </h3>
              <p className="text-sm text-muted-foreground">{data.zelleNote}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 py-4 sm:px-6 sm:py-5">
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {data.description}
          </p>

          <div className="mb-6 flex flex-col items-center rounded-xl bg-muted/40 p-4">
            {data.qrImage ? (
              <>
                <div className="relative mb-3 h-32 w-32 overflow-hidden rounded-xl border-2 border-border bg-white p-2 shadow-inner transition-transform duration-300 group-hover:scale-105 sm:h-40 sm:w-40">
                  <Image
                    src={data.qrImage}
                    alt={`Zelle QR code for ${data.title}`}
                    fill
                    className="object-contain p-1"
                    sizes="160px"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#6d1ed4] px-2 py-0.5 text-xs font-bold text-white">
                    Zelle
                  </span>
                  <span className="text-xs text-muted-foreground">Scan to pay</span>
                </div>
              </>
            ) : (
              <div className="flex h-32 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-white px-4 text-center sm:h-40">
                <span className="rounded-md bg-[#6d1ed4] px-3 py-1 text-sm font-bold text-white">
                  Zelle
                </span>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Open Zelle in your banking app
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Send to the phone number below
                </p>
              </div>
            )}
          </div>

          <div className="mb-6 rounded-lg border border-border bg-background p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {data.displayLabel}
            </p>
            <p className="break-all font-mono text-sm font-medium text-foreground">
              {data.displayValue ?? data.value}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="flex-1"
              ariaLabel={`Copy ${data.displayLabel} for ${data.title}`}
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              Copy
            </Button>
            <Button
              href={zelleUrl}
              variant="primary"
              className="flex-1"
              external
              ariaLabel={`Donate to ${data.title} via Zelle`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Donate
            </Button>
          </div>
        </div>
      </article>

      <Toast
        message={`Copied ${data.displayLabel} to clipboard!`}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}
