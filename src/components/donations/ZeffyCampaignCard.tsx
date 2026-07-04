import { FadeIn } from "@/components/ui/FadeIn";
import type { ZeffyCampaign } from "@/lib/zeffy-donations";
import Image from "next/image";
import Link from "next/link";

interface ZeffyCampaignCardProps {
  campaign: ZeffyCampaign;
  index: number;
}

export function ZeffyCampaignCard({ campaign, index }: ZeffyCampaignCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      <Link
        href={`/donate/${campaign.slug}`}
        aria-label={`Donate to ${campaign.title}`}
        className="group flex h-[168px] w-[132px] flex-col items-center border border-border bg-card px-1.5 py-3 transition-colors duration-200 hover:border-primary hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-[178px] sm:w-[148px] sm:py-3.5"
      >
        <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden bg-white sm:h-[104px] sm:w-[104px]">
          <Image
            src={campaign.image.src}
            alt={campaign.image.alt}
            fill
            className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="104px"
          />
        </div>
        <p className="mt-2 flex min-h-[2.25rem] flex-1 items-start justify-center text-center text-xs font-semibold leading-tight text-foreground sm:text-[13px]">
          {campaign.title}
        </p>
      </Link>
    </FadeIn>
  );
}
