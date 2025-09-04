import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — DvTae',
  description: 'Building the institutional rails for tokenized real-world assets with crypto-native distribution and compliant P2P liquidity.',
  keywords: 'DvTae about, institutional rails, tokenized RWA, crypto-native distribution, P2P liquidity, mission, team',
  openGraph: {
    title: 'About — DvTae',
    description: 'Building the institutional rails for tokenized real-world assets with crypto-native distribution and compliant P2P liquidity.',
    url: 'https://dvtae.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — DvTae',
    description: 'Building the institutional rails for tokenized real-world assets with crypto-native distribution and compliant P2P liquidity.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              About DvTae
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Building the institutional rails for tokenized real-world assets with crypto-native distribution and compliant P2P liquidity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe crypto holders should be able to generate yield without selling their assets. 
              Our platform enables access to curated, tokenized investment opportunities while maintaining 
              crypto exposure through institutional-grade collateral lending programs.
            </p>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Company Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Founded</h3>
              <p className="text-gray-600">2024</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Headquarters</h3>
              <p className="text-gray-600">New York, NY</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Focus</h3>
              <p className="text-gray-600">Institutional and professional investors only</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Don&apos;t Do</h3>
              <p className="text-gray-600">No retail investors, no unregulated assets, no yield farming</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <span className="inline-flex items-center px-3 py-1 rounded bg-gray-100 border border-gray-300 text-gray-600 text-sm font-medium mb-6">
              Coming soon
            </span>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              More details about our story
            </h2>
            <p className="text-gray-600">
              We&apos;re working on sharing more about our team, investors, and vision for the future of tokenized assets.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}