import { ZeffyCampaignCard } from "@/components/donations/ZeffyCampaignCard";
import { ZEFFY_CAMPAIGNS } from "@/lib/zeffy-donations";

export function ZeffyCampaignGrid() {
  return (
    <div className="mx-auto flex max-w-3xl flex-wrap items-start justify-center gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4">
      {ZEFFY_CAMPAIGNS.map((campaign, index) => (
        <ZeffyCampaignCard key={campaign.slug} campaign={campaign} index={index} />
      ))}
    </div>
  );
}
