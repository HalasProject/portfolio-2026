import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { LangSync } from "@/components/a11y/LangSync";
import "./globals.css";
import "./hero.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.salah.cloud"),
  title: {
    default: "Salah | Software Engineer",
    template: "%s | Salah",
  },
  description:
    "Full-stack Software Engineer — React, Next.js & TypeScript. Explore projects, experience, and connect.",
  keywords: [
    "Salah",
    "Software Engineer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "full-stack",
  ],
  authors: [{ name: "Salah" }],
  openGraph: {
    title: "Salah | Software Engineer",
    description:
      "Full-stack Software Engineer — React, Next.js & TypeScript. Explore projects, experience, and connect.",
    type: "website",
    url: "https://www.salah.cloud",
    siteName: "Salah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salah | Software Engineer — Full-stack developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salah | Software Engineer",
    description:
      "Full-stack Software Engineer — React, Next.js & TypeScript. Explore projects, experience, and connect.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <LanguageProvider>
            <LangSync />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
