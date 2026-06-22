"use client";

import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  NAV_LINKS,
  RESOURCE_LINKS,
  SITE_NAME,
  type NavLink,
} from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function isResourceActive(pathname: string) {
  return RESOURCE_LINKS.some((l) => isActive(pathname, l.href));
}

function NavLabel({ link }: { link: NavLink }) {
  if (!link.shortLabel) {
    return <>{link.label}</>;
  }

  return (
    <>
      <span className="xl:hidden">{link.shortLabel}</span>
      <span className="hidden xl:inline">{link.label}</span>
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
    setMobileResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const linkClass = (active: boolean) =>
    `whitespace-nowrap rounded-md px-2.5 py-1.5 text-[0.8125rem] font-semibold transition-colors lg:px-2 lg:py-1 lg:text-xs xl:px-2.5 xl:py-1.5 xl:text-sm ${
      active
        ? "bg-primary/12 text-primary"
        : "text-foreground hover:bg-muted hover:text-primary"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Brand + actions */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-3"
          aria-label={`${SITE_NAME} home`}
        >
          <Image
            src={IMAGES.logo.src}
            alt={IMAGES.logo.alt}
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full sm:h-10 sm:w-10"
          />
          <span className="truncate whitespace-nowrap font-display text-sm font-bold text-foreground sm:text-base lg:text-lg">
            {SITE_NAME}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
          <Button href="/donations" variant="primary" size="sm" className="hidden sm:inline-flex">
            Donate
          </Button>
          <button
            type="button"
            className="rounded-lg p-2 hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop nav — separate row so tabs never overlap the logo */}
      <nav
        className="hidden border-t border-border/70 lg:block"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-0.5 gap-y-1 px-4 py-1.5 sm:px-6 lg:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(isActive(pathname, link.href))}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              <NavLabel link={link} />
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-0.5 whitespace-nowrap rounded-md px-2.5 py-1.5 text-[0.8125rem] font-semibold transition-colors lg:px-2 lg:py-1 lg:text-xs xl:px-2.5 xl:py-1.5 xl:text-sm ${
                isResourceActive(pathname)
                  ? "bg-primary/12 text-primary"
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform xl:h-4 xl:w-4 ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {resourcesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-1 w-56 -translate-x-1/2 rounded-xl border border-border bg-card py-2 shadow-lg">
                {RESOURCE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[52px] z-40 overflow-y-auto bg-background sm:top-[56px] lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 text-lg font-semibold ${
                isActive(pathname, link.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold text-foreground hover:bg-muted"
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            aria-expanded={mobileResourcesOpen}
          >
            Resources
            <ChevronDown
              className={`h-5 w-5 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileResourcesOpen &&
            RESOURCE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg py-2.5 pl-8 pr-4 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          <Button href="/donations" variant="primary" size="lg" className="mt-4 w-full">
            Donate Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
