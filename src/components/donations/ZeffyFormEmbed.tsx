interface ZeffyFormEmbedProps {
  title: string;
  iframeSrc: string;
}

export function ZeffyFormEmbed({ title, iframeSrc }: ZeffyFormEmbedProps) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="mb-6 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h1>
      <div className="min-h-[calc(100vh-16rem)] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <iframe
          title={`${title} donation form`}
          src={iframeSrc}
          className="h-[min(900px,calc(100vh-14rem))] w-full border-0"
          allow="payment"
          loading="lazy"
        />
      </div>
    </section>
  );
}
