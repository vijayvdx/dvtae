'use client'

import Link from 'next/link'

export default function ForManagers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink-900 mb-6">
              Tokenize, distribute, and service—on one platform
            </h1>
            
            <p className="text-xl md:text-2xl text-ink-700 mb-6 max-w-4xl mx-auto leading-relaxed">
              Bring your strategy on-chain with compliant ERC-1400 tokens, streamlined KYC, crypto-native distribution, and a marketplace with AI-assisted price discovery.
            </p>
            
            <p className="text-sm text-ink-500 mb-12 max-w-3xl mx-auto">
              Investments are available to eligible investors and jurisdictions only. Availability and terms vary by offering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/vijay-8v/dvtae-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg font-semibold"
              >
                Schedule a consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-ink-900 mb-3">Tokenization-as-a-Service</h3>
              <p className="text-ink-700">Issue compliant tokens with embedded transfer rules and cap-table control.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crypto-native distribution</h3>
              <p className="text-gray-600">Reach an audience of KYC-approved investors via our marketplace.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">KYC &amp; onboarding</h3>
              <p className="text-gray-600">Whitelisted wallets only; eligibility and disclosures built in.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicing &amp; ops</h3>
              <p className="text-gray-600">Distributions, statements, and on-chain records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Categories */}
      <section aria-labelledby="cats-title" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="cats-title" className="text-4xl font-bold text-gray-900 mb-4">
              Supported categories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real Estate</h3>
              <p className="text-gray-600">Single-family rental, home-equity, CRE.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Private Credit</h3>
              <p className="text-gray-600">Direct lending, asset-backed, venture debt.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Structured Credit</h3>
              <p className="text-gray-600">Senior/mezz tranches, diversified pools.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Interval / REIT / BDC</h3>
              <p className="text-gray-600">Registered fund structures with gates.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">VC / PE</h3>
              <p className="text-gray-600">Growth equity and buyout strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Cover on the Call */}
      <section aria-labelledby="call-title" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 id="call-title" className="text-4xl font-bold text-gray-900 mb-6">
            What we&apos;ll cover on the call
          </h2>
          <ul className="mt-4 space-y-4 text-lg">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Legal structure and wrappers</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Token rules (ERC-1400, transfer restrictions, unlock windows)</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">KYC/AML and investor eligibility</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Distribution and marketplace placement</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Operations: servicing, statements, payouts</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Timelines, costs, and next steps</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consult" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to list your strategy?
            </h2>
            <p className="text-gray-600 text-lg mt-1 mb-6">
              Book a 30-minute session with our team.
            </p>
            <p className="mt-3">
              <a 
                href="#consult" 
                onClick={(e) => {e.preventDefault(); const w = window as typeof window & {openCalendly?: () => void}; w.openCalendly?.();}}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
              >
                Schedule a consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}