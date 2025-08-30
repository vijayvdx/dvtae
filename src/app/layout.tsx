import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DvTae — Institutional rails for tokenized real-world assets",
  description: "Connect, verify, and fund with crypto collateral or cash. Access tokenized investments with 70-100% leverage, ERC-1400 tokens, and P2P trading on a compliant marketplace.",
  keywords: "tokenized assets, DeFi, institutional, compliance, ERC-1400, crypto collateral, P2P trading",
  authors: [{ name: "DvTae" }],
  creator: "DvTae",
  publisher: "DvTae",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dvtae.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dvtae.vercel.app',
    title: 'DvTae — Institutional rails for tokenized real-world assets',
    description: 'Connect, verify, and fund with crypto collateral or cash. Access tokenized investments with 70-100% leverage, ERC-1400 tokens, and P2P trading.',
    siteName: 'DvTae',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DvTae — Institutional rails for tokenized real-world assets',
    description: 'Connect, verify, and fund with crypto collateral or cash. Access tokenized investments with 70-100% leverage, ERC-1400 tokens, and P2P trading.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}