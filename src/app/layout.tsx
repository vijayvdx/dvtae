import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DvTae — Generate yield from crypto without selling",
  description: "Use crypto as collateral to access curated, tokenized investments. KYC + wallet in minutes. Manage and trade positions on a compliant marketplace.",
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
      <head>
        {/* Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        
        {/* Analytics - Plausible (privacy-first) */}
        <script defer data-domain="dvtae.com" src="https://plausible.io/js/script.js"></script>
        
        {/* JSON-LD Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DvTae",
              "url": "https://dvtae.com/",
              "logo": "https://dvtae.com/opengraph-image.png"
            })
          }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "DvTae",
              "url": "https://dvtae.com/",
              "areaServed": "Global",
              "description": "Use crypto as collateral to access curated, tokenized investments."
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Analytics Event Tracking */}
        <script dangerouslySetInnerHTML={{
          __html: `
          // Analytics wrapper - works with Plausible or Google Analytics
          function track(event, props) {
            if (window.plausible) window.plausible(event, {props});
            if (window.gtag) window.gtag('event', event, props || {});
          }

          // Wait for DOM to be ready
          document.addEventListener('DOMContentLoaded', function() {
            // Header/hero consult buttons
            document.querySelectorAll('a[href*="consult"]').forEach(a => {
              a.addEventListener('click', () => track('consult_click', {location: 'header_or_hero'}));
            });

            // Persona cards
            document.querySelectorAll('[data-persona]').forEach(card => {
              card.addEventListener('click', () => track('persona_card_click', {persona: card.dataset.persona}));
            });

            // Marketplace CTAs
            document.querySelectorAll('a[href^="/marketplace"]').forEach(a => {
              a.addEventListener('click', () => track('marketplace_cta_click', {}));
            });

            // Waitlist success hook
            window.addEventListener('waitlist_submit_success', () => track('waitlist_submit', {}));

            // Mobile menu keyboard support
            const menuBtn = document.getElementById('menuBtn');
            const mobileNav = document.getElementById('mobileNav');
            
            function closeMenu() { 
              if (mobileNav) {
                mobileNav.setAttribute('hidden', ''); 
                if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false'); 
              }
            }
            function openMenu() { 
              if (mobileNav) {
                mobileNav.removeAttribute('hidden'); 
                if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true'); 
              }
            }

            menuBtn?.addEventListener('click', () => {
              if (mobileNav && mobileNav.hasAttribute('hidden')) {
                openMenu();
              } else {
                closeMenu();
              }
            });

            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && mobileNav && !mobileNav.hasAttribute('hidden')) {
                closeMenu();
              }
            });
          });

          `
        }} />

        {/* Accessibility & Performance CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.001ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.001ms !important;
            }
          }

          /* Focus rings for keyboard users */
          :focus-visible {
            outline: 2px solid rgb(99, 102, 241);
            outline-offset: 2px;
            border-radius: 8px;
          }

          /* Loading state for images */
          img[loading="lazy"] {
            transition: opacity 0.3s;
          }
          `
        }} />
      </body>
    </html>
  );
}