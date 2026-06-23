import { SOCIAL_LINKS } from "@/lib/constants";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
    </svg>
  );
}

export function YouTubeBanner() {
  return (
    <div className="border-b border-red-600/20 bg-red-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 sm:gap-3 sm:px-6 lg:px-8">
        <YouTubeIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
        <a
          href={SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm font-semibold underline-offset-2 hover:underline sm:text-base"
        >
          Watch Masjid Al-Athar on YouTube
        </a>
      </div>
    </div>
  );
}
