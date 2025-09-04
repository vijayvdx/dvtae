import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources — DvTae',
  description: 'Guides, white papers, and updates from the DvTae team. Learn about tokenized real-world assets, compliance, and institutional investing.',
  keywords: 'tokenized assets guides, RWA white paper, institutional investing, compliance guides, DeFi resources, ERC-1400 documentation',
  openGraph: {
    title: 'Resources — DvTae',
    description: 'Guides, white papers, and updates from the DvTae team about tokenized real-world assets and institutional investing.',
    url: 'https://dvtae.com/resources',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources — DvTae',
    description: 'Guides, white papers, and updates from the DvTae team about tokenized real-world assets and institutional investing.',
  },
  alternates: {
    canonical: '/resources',
  },
}

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Resources
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Guides, white papers, and updates from the DvTae team.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tokenization White Paper
              </h3>
              <p className="text-gray-600 mb-6">
                Legal wrappers, ERC-1400 rules, and distribution—our view.
              </p>
              <p className="mt-3">
                <Link 
                  href="/resources/tokenization-white-paper.pdf" 
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Download PDF
                </Link>
              </p>
            </article>
            
            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                RWA 101
              </h3>
              <p className="text-gray-600 mb-6">
                Tokenization, custody, and liquidity—explained.
              </p>
              <p className="mt-3">
                <Link 
                  href="/blog/rwa-101" 
                  className="bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  Read
                </Link>
              </p>
            </article>
            
            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Collateral &amp; LTV
              </h3>
              <p className="text-gray-600 mb-6">
                How leverage against crypto works, risks, and triggers.
              </p>
              <p className="mt-3">
                <Link 
                  href="/blog/collateral-ltv" 
                  className="bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  Read
                </Link>
              </p>
            </article>
            
            <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Liquidity &amp; Secondary
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding trading windows, unlocks, and fees.
              </p>
              <p className="mt-3">
                <Link 
                  href="/blog/liquidity-secondary" 
                  className="bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  Read
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}