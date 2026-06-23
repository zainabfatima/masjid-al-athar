import Link from "next/link";
import { CONTACT, LEGAL_LINKS, NAV_LINKS, RESOURCE_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/80 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl font-bold text-primary">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">{SITE_TAGLINE}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A 501(c)(3) non-profit Islamic center serving the Muslim community
              in Marietta, Georgia and East Cobb.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[40px] items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[40px] items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">{CONTACT.address}</p>
              <p className="mt-2">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm text-primary hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {CONTACT.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Donate
            </h3>
            <p className="text-sm text-muted-foreground">
              All donations are tax deductible. Support masjid operations,
              sadaqah, and zakat through Zelle.
            </p>
            <Link
              href="/donations"
              className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
            >
              View Donation Options →
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border pt-6 sm:mt-10 sm:flex-row sm:justify-between sm:pt-8">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            aria-label="Legal"
          >
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="max-w-xs text-center text-sm italic text-muted-foreground sm:max-w-none sm:text-right">
            &ldquo;Islamic Faith in the Hearts of the People&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
