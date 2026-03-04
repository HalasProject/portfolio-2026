import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.salah.cloud"),
  title: {
    default: "Salah | Software Engineer",
    template: "%s | Salah",
  },
  description:
    "Full-stack Software Engineer — React, Next.js & TypeScript. Explore projects, experience, and connect.",
  keywords: ["Salah", "Software Engineer", "portfolio", "React", "Next.js", "TypeScript", "full-stack"],
  authors: [{ name: "Salah" }],
  openGraph: {
    title: "Salah | Software Engineer",
    description:
      "Full-stack Software Engineer — React, Next.js & TypeScript. Explore projects, experience, and connect.",
    type: "website",
    url: "https://www.salah.cloud",
    siteName: "Salah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salah | Software Engineer",
    description:
      "Full-stack Software Engineer — React, Next.js & TypeScript. Explore projects, experience, and connect.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
