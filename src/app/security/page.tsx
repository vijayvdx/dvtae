import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security — DvTae',
  description: 'Multi-sig custody, oracle-driven risk controls, ERC-1400 transfer rules, and KYC/AML enforcement—designed for compliant, on-chain investing.',
  keywords: 'multi-sig custody, oracle risk controls, ERC-1400, KYC AML, compliance, on-chain security, institutional safeguards',
  openGraph: {
    title: 'Security — DvTae',
    description: 'Multi-sig custody, oracle-driven risk controls, ERC-1400 transfer rules, and KYC/AML enforcement for compliant investing.',
    url: 'https://dvtae.com/security',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security — DvTae',
    description: 'Multi-sig custody, oracle-driven risk controls, ERC-1400 transfer rules, and KYC/AML enforcement for compliant investing.',
  },
  alternates: {
    canonical: '/security',
  },
}

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Institutional-grade{' '}
              <span className="text-indigo-600">safeguards</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Multi-sig custody, oracle-driven risk controls, ERC-1400 transfer rules, and KYC/AML enforcement—designed for compliant, on-chain investing.
            </p>

            {/* Trust Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="badge">Multi-sig</span>
              <span className="badge">Oracles</span>
              <span className="badge">ERC-1400</span>
              <span className="badge">KYC/AML</span>
              <span className="badge">Audit-ready records</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture - 4 Card Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Security architecture at a glance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection across custody, risk management, compliance, and audit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custody
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Institutional multi-sig wallets; named co-signers; crime/cyber policy on wallets.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Risk automation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Daily mark-to-market via Chainlink, auto-margin if LTV breaches thresholds.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Compliance controls
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ERC-1400 tokens with Reg D/Reg S transfer restrictions and on-chain whitelisting.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Audit & records
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Segregated SPV assets with custodian/trustee oversight and annual audits/NAV attestation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custody & Asset Flow Controls */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custody & asset flow controls
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Multi-sig wallet architecture
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fireblocks-style multi-sig wallets with named co-signers (Investor, Platform, Lender). First-lien pledge to the lender; daily oracle marks; automatic margin calls if LTV &gt; 55%.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                SPV/Series segregation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                SPV/Series segregation under a Delaware Series LLC; custodian/trustee (e.g., BNY Mellon or State Street); perfected security interest; annual third-party audit & NAV attestation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token & Transfer Rules */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Token & transfer rules
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Investor positions are issued as <strong>ERC-1400</strong> tokens. KYC/AML is enforced via on-chain whitelisting; transfer restrictions embed <strong>Reg D / Reg S</strong> rules, with secondary trading typically unlocking after <strong>30 days</strong> (varies by token).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oracles, Monitoring & Liquidation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Oracles, monitoring & liquidation
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                We integrate <strong>oracle data feeds (e.g., Chainlink)</strong> for reliable real-world pricing and continuous LTV checks, enabling automated margin and liquidation logic when thresholds are breached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contracts & Audits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart contracts & audits
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Core actions—tokenization, collateral management, and liquidation triggers—are enforced by smart contracts, with routine independent <strong>security audits</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security & Platform Hardening */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data security & platform hardening
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Role-based authentication (RBAC), encrypted relational storage (ACID), and a stateless API layer isolate business logic and keys from persistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Market Integrity */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparency & market integrity
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                AI-assisted price discovery, P2P execution, and <strong>blockchain-backed records</strong> increase transparency while keeping fees ultra-low.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custody Matrix */}
      <section aria-labelledby="custody-matrix" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 id="custody-matrix" className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Custody matrix
          </h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Wallet type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Signers</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Coverage</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Audit cadence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Institutional multi-sig</td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Named co-signers</td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Crime/cyber policy</td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Annual + event-driven</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Cold storage</td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Segregated</td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Custodian policy</td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100">Annual</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-600">Operational wallet</td>
                  <td className="py-3 px-4 text-gray-600">RBAC approvals</td>
                  <td className="py-3 px-4 text-gray-600">Spend limits</td>
                  <td className="py-3 px-4 text-gray-600">Quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance Glossary */}
      <section aria-labelledby="glossary" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 id="glossary" className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Compliance glossary
          </h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg bg-white">
              <summary className="cursor-pointer w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">KYC / AML</span>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">Identity verification and screening required to invest; approvals recorded on-chain.</p>
              </div>
            </details>
            
            <details className="border border-gray-200 rounded-lg bg-white">
              <summary className="cursor-pointer w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">ERC-1400</span>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">A token standard enabling transfer restrictions and partitioned ownership for compliant assets.</p>
              </div>
            </details>
            
            <details className="border border-gray-200 rounded-lg bg-white">
              <summary className="cursor-pointer w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">Reg D / Reg S</span>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">Common U.S. exemptions that impose investor eligibility and transfer limitations.</p>
              </div>
            </details>
            
            <details className="border border-gray-200 rounded-lg bg-white">
              <summary className="cursor-pointer w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900">Whitelisting</span>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">Only approved wallet addresses may receive and transfer specific tokens.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Compliance & Disclosures Footer */}
      <section className="py-16 px-6 bg-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Compliance & disclosures
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="safety-item">
                <div className="w-5 h-5 text-indigo-200 flex-shrink-0 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-indigo-100 leading-relaxed">
                    Built-in KYC/AML workflows and compliance dashboards.
                  </p>
                </div>
              </div>

              <div className="safety-item">
                <div className="w-5 h-5 text-indigo-200 flex-shrink-0 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-indigo-100 leading-relaxed">
                    Investing involves risk, including loss of principal; availability varies by jurisdiction.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Security Brief (PDF)
              </button>
              <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-400 transition-colors">
                Custody Matrix
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
