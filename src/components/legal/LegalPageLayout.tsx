import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
      <header className="mb-10 border-b border-border pb-8">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          Last Updated: {lastUpdated}
        </p>
      </header>
      <div className="legal-prose space-y-8 text-foreground">{children}</div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 font-display text-xl font-bold text-foreground">
        {title}
      </h2>
      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
