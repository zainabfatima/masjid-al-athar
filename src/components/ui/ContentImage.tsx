import Image from "next/image";
import { FadeIn } from "./FadeIn";

interface ContentImageProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "square" | "wide" | "portrait" | "tall";
  priority?: boolean;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
};

export function ContentImage({
  src,
  alt,
  className = "",
  aspect = "video",
  priority = false,
}: ContentImageProps) {
  return (
    <FadeIn className={className}>
      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] ${aspectClasses[aspect]}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center brightness-[1.02] transition-transform duration-500 hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading={priority ? undefined : "lazy"}
          priority={priority}
        />
      </div>
    </FadeIn>
  );
}
