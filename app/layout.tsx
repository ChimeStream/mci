import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/hooks/useLanguage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["900"], // Black weight
  display: 'swap', // Ensure font loads properly
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
});

export const metadata: Metadata = {
  title: "MCI - Mobile Communications of Iran",
  description: "The largest digital economy holding in Iran, pioneering communications and beyond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${inter.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
