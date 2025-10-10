import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Lato, Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/hooks/useLanguage";
import { RTLWrapper } from "@/app/components/layout/RTLWrapper";
import { ScrollToTop } from "@/app/components/ui/ScrollToTop";

const SITE_DESCRIPTION =
  "Mobile Communications of Iran (MCI) leads the nation's digital economy with 5.5G connectivity, secure fintech platforms, enterprise solutions, and immersive consumer services.";
const SHARE_IMAGE = "/ab860c64a2dc37bc903136d763464b6a16524657.png";

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
  weight: ["300", "900"], // Light for footer, Black for hero
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mci.ir"),
  title: {
    default: "MCI - Mobile Communications of Iran",
    template: "%s | MCI",
  },
  applicationName: "Mobile Communications of Iran (MCI)",
  description: SITE_DESCRIPTION,
  keywords: [
    "MCI",
    "Hamrah Aval",
    "Mobile Communications of Iran",
    "5.5G Iran",
    "Iran telecom",
    "digital economy Iran",
    "fintech Iran",
    "IoT solutions Iran",
    "enterprise connectivity Iran",
    "smart city services Iran",
  ],
  category: "technology",
  authors: [{ name: "Mobile Communications of Iran (MCI)" }],
  creator: "Mobile Communications of Iran (MCI)",
  publisher: "Mobile Communications of Iran (MCI)",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MCI - Mobile Communications of Iran",
    description: SITE_DESCRIPTION,
    url: "https://www.mci.ir/",
    siteName: "MCI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Overview of MCI's digital services ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCI - Mobile Communications of Iran",
    description: SITE_DESCRIPTION,
    creator: "@mci_ir",
    site: "@mci_ir",
    images: [SHARE_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2F6B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${inter.variable} ${cairo.variable} antialiased`}
      >
        <LanguageProvider>
          <RTLWrapper>
            {children}
            <ScrollToTop />
          </RTLWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
