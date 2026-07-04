import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

interface MasjidLogoProps {
  variant?: "full" | "icon" | "full-dark";
  href?: string;
  className?: string;
  priority?: boolean;
}

const SIZES = {
  full: {
    width: 320,
    height: 84,
    className: "h-14 w-auto sm:h-16 md:h-[4.5rem] lg:h-20",
  },
  "full-dark": {
    width: 320,
    height: 84,
    className: "h-14 w-auto sm:h-16",
  },
  icon: { width: 48, height: 48, className: "h-11 w-11 sm:h-12 sm:w-12" },
} as const;

export function MasjidLogo({
  variant = "full",
  href = "/",
  className = "",
  priority = false,
}: MasjidLogoProps) {
  const asset =
    variant === "icon" ? IMAGES.brand.icon : IMAGES.brand.logo;
  const size = SIZES[variant];

  const image = (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={size.width}
      height={size.height}
      priority={priority}
      className={`${size.className} ${className}`.trim()}
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${SITE_NAME} — ${SITE_TAGLINE} home`}
    >
      {image}
    </Link>
  );
}
