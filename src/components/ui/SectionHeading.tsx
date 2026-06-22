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
    <div className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
