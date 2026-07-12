import { ZeffyHeadScripts } from "@/components/donations/ZeffyHeadScripts";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.masjidalathar.org"),
  title: {
    default: `${SITE_NAME} | East Cobb Islamic Center`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Masjid Al-Athar",
    "Islamic Center",
    "Marietta",
    "East Cobb",
    "Mosque",
    "Prayer",
    "Donations",
    "Zakat",
    "Sadaqah",
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/brand/masjid-al-athar-logo-download.png",
        width: 1680,
        height: 432,
        alt: "Masjid Al-Athar — East Cobb Islamic Center",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/brand/masjid-al-athar-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/masjid-al-athar-icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/images/brand/masjid-al-athar-icon-192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-hidden antialiased">
        <ZeffyHeadScripts />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
