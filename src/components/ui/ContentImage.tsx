import Image from "next/image";
import { FadeIn } from "./FadeIn";

interface ContentImageProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "square" | "wide" | "portrait" | "tall" | "intrinsic";
  fit?: "cover" | "contain";
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
  fit = "cover",
  priority = false,
}: ContentImageProps) {
  if (aspect === "intrinsic") {
    return (
      <FadeIn className={className}>
        <div className="overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-[var(--shadow-card)]">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full max-h-[min(75vh,720px)] object-contain object-center"
            loading={priority ? undefined : "lazy"}
            priority={priority}
          />
        </div>
      </FadeIn>
    );
  }

  const objectClass =
    fit === "contain"
      ? "object-contain object-center p-2 sm:p-3"
      : "object-cover object-center brightness-[1.02] transition-transform duration-500 hover:scale-[1.03]";

  return (
    <FadeIn className={className}>
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] ${
          fit === "contain" ? "bg-muted/30" : "bg-white"
        } ${aspectClasses[aspect]}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={objectClass}
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading={priority ? undefined : "lazy"}
          priority={priority}
        />
      </div>
    </FadeIn>
  );
}
