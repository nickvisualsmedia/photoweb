import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://nickvisuals.media"),
  title: {
    default: "Nick Visuals Media | Automotive Photography Prague & Tábor",
    template: "%s | Nick Visuals Media",
  },
  description:
    "Editorial automotive photography by Nick Visuals. Clean lines, polarizer optics, and authentic vehicular aesthetics. Praha and Tábor surrounding areas included.",
  alternates: {
    canonical: "/",
    languages: {
      "cs-CZ": "/?lang=cz",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    title: "Nick Visuals Media | Automotive Photography",
    description: "Authentic automotive imagery capturing vehicular aesthetics and emotion.",
    url: "https://nickvisuals.media",
    siteName: "Nick Visuals Media",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Nick Visuals Editorial Automotive Photography",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${cinzel.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-charcoal text-beige-100 font-sans antialiased selection:bg-brown-primary selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}