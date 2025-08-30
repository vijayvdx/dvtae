'use client'

import { useState, useEffect } from 'react'

export default function ForManagers() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Who can list on DvTae?",
      answer: "Established asset managers and issuers with compliant structures and verifiable servicing capabilities. We validate eligibility and jurisdictional fit during scoping."
    },
    {
      question: "How does KYC work for investors?",
      answer: "We enforce KYC/AML and maintain an on-chain whitelist; only approved wallets can receive and transfer tokens."
    },
    {
      question: "What are the transfer rules?",
      answer: "Tokens embed Reg D / Reg S restrictions and typical unlock windows (often ~30 days) before secondary trading."
    },
    {
      question: "How is pricing discovered?",
      answer: "Our marketplace publishes indicative bids/asks with AI-assisted price discovery and P2P execution; records are written on-chain."
    },
    {
      question: "What integrations are available?",
      answer: "Use APIs to embed issuance and trading, or connect to a white-label issuer portal for KYC, subscriptions, and cap-table ops."
    },
    {
      question: "How are assets safeguarded?",
      answer: "Institutional multi-sig custody, SPV/series segregation with trustee oversight, oracle-driven monitoring, and automated triggers."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Tokenize, distribute, and service—{' '}
              <span className="text-indigo-600">on one platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Bring your strategy on-chain with compliant ERC-1400 tokens, streamlined KYC, crypto-native distribution, and a marketplace with AI-assisted price discovery.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="badge">Tokenization-as-a-Service</span>
              <span className="badge">KYC/AML</span>
              <span className="badge">ERC-1400</span>
              <span className="badge">P2P Trading</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                Tokenise & List
              </button>
              <button className="btn btn-secondary btn-lg">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - 4 Card Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What you get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to tokenize, distribute, and service your investment strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tokenization-as-a-Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Issue compliant tokens with embedded transfer rules and cap-table control. Whitelisted investors receive ERC-1400 tokens; secondary transfers follow Reg D / Reg S restrictions (with typical 30-day unlocks).
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Crypto-native distribution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tap a retail + accredited crypto audience via DvTae&apos;s marketplace and distribution channel; surface your offering alongside others with transparent, low fees.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Streamlined KYC & onboarding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We enforce KYC/AML and on-chain whitelisting so only approved wallets can subscribe and transfer—integrated dashboards for fast review.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Servicing & operations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cap-table, dividend/distribution payouts, statements, and investor communications—handled with on-chain records and back-office hooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Listing Works - 5 Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How listing works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process from submission to marketplace launch
            </p>
          </div>

          <div className="space-y-8">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Submit & scope
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share strategy, docs, and structure; we confirm eligibility and target audience (accredited/qualified, regions).
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Set up the wrapper
              </h3>
              <p className="text-gray-600 leading-relaxed">
                SPV/series structure, custody/trustee (e.g., BNY Mellon/State Street) and lien priority finalized.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Configure token rules
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ERC-1400 with whitelist gating, Reg D / Reg S transfer restrictions, and trading unlock windows.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Distribute
              </h3>
              <p className="text-gray-600 leading-relaxed">
                KYC-approved wallets subscribe; offering appears on the marketplace with published, indicative bids/asks for discovery.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service & report
              </h3>
              <p className="text-gray-600 leading-relaxed">
                On-chain records, payouts, and dashboards keep investors and ops in sync.
              </p>
            </div>
          </div>

          {/* Marketplace Note */}
          <div className="mt-12 p-6 bg-indigo-50 border border-indigo-200 rounded-xl">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-900 mb-2">Marketplace note</h4>
                <p className="text-indigo-800">
                  Investors benefit from AI-assisted price discovery, P2P execution, and blockchain-backed records for transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Integration options
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                API-first / embed
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect your workflow to token issuance, whitelisting, and the order book; wallet-first UX with investor SSO available.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                White-label partner
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use a compliant SaaS issuer portal if you prefer a ready-made back office (KYC, subscriptions, cap-table).
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              <strong>Timeline hint:</strong> Token issuance + marketplace MVP typically follows the core phases after legal groundwork in the rollout plan.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compliance & security
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="safety-item">
                <div className="safety-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">KYC/AML & whitelisting</h4>
                  <p className="text-gray-600">Only approved wallets can subscribe/transfer; activity is logged for audit.</p>
                </div>
              </div>

              <div className="safety-item">
                <div className="safety-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Custody</h4>
                  <p className="text-gray-600">Institutional multi-sig with named co-signers and insurance; segregation at the SPV/series level.</p>
                </div>
              </div>

              <div className="safety-item">
                <div className="safety-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">On-chain rules</h4>
                  <p className="text-gray-600">ERC-1400 transfer restrictions (Reg D / Reg S) and trading unlock windows (often ~30 days).</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="safety-item">
                <div className="safety-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Oracles & risk automation</h4>
                  <p className="text-gray-600">Chainlink feeds and scheduled keeper checks publish indicative prices and enforce thresholds.</p>
                </div>
              </div>

              <div className="safety-item">
                <div className="safety-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Transparent records, low fees</h4>
                  <p className="text-gray-600">Smart-contract execution with AI-assisted pricing; on-chain trails and ultra-low fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Assets */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What can you list?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Real estate (single-family rental, home-equity, CRE), private credit (direct lending, asset-backed, venture debt), structured credit, interval/REIT/BDC, venture and private equity.
              </p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Category ranges:</strong> Target yields typically ~7–20%+ with lockups spanning 30 days to ~5 years depending on risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 animate-fadeIn">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to tokenise & list your fund?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join a compliant, crypto-native marketplace and reach a new investor base with built-in servicing.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
            Talk to us
          </button>
        </div>
      </section>
    </div>
  )
}
