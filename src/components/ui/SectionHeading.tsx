import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-8 max-w-4xl sm:mb-12 ${alignClass} ${className}`}>
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground sm:mt-4 sm:text-xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
