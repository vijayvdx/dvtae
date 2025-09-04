import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Lenders — DvTae',
  description: 'Institutional crypto lending with professional-grade management, segregated custody, established risk frameworks, and competitive rates.',
  keywords: 'crypto lending, institutional lending, segregated custody, risk management, competitive rates, professional crypto lending',
  openGraph: {
    title: 'For Lenders — DvTae',
    description: 'Institutional crypto lending with professional-grade management, segregated custody, and competitive rates.',
    url: 'https://dvtae.com/for-lenders',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Lenders — DvTae',
    description: 'Institutional crypto lending with professional-grade management, segregated custody, and competitive rates.',
  },
  alternates: {
    canonical: '/for-lenders',
  },
}

export default function ForLendersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}