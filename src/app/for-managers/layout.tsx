import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Managers — DvTae',
  description: 'Tokenize, distribute, and service your strategies on one platform. Compliant ERC-1400 tokens, streamlined KYC, crypto-native distribution, and AI-assisted marketplace.',
  keywords: 'asset managers, tokenization, ERC-1400, KYC compliance, crypto distribution, AI price discovery, fund tokenization, RWA managers',
  openGraph: {
    title: 'For Managers — DvTae',
    description: 'Tokenize, distribute, and service your strategies on one platform with compliant ERC-1400 tokens and crypto-native distribution.',
    url: 'https://dvtae.com/for-managers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Managers — DvTae',
    description: 'Tokenize, distribute, and service your strategies on one platform with compliant ERC-1400 tokens and crypto-native distribution.',
  },
  alternates: {
    canonical: '/for-managers',
  },
}

export default function ForManagersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}