import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How it works — DvTae',
  description: 'Connect, verify, and fund with crypto collateral or cash. Access tokenized investments with 70-100% leverage, ERC-1400 tokens, and P2P trading on a compliant marketplace.',
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            How it works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect, verify, and choose how to fund—pledge crypto or deposit cash—then allocate into tokenized offerings and trade positions on a compliant marketplace.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-2">
                Connect & Verify
              </h3>
              <p className="text-gray-600 mb-6">
                Link your wallet and complete KYC/AML to unlock investing.
              </p>
              <Link href="/how-it-works/wallet-and-kyc" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                Learn more →
              </Link>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-2">
                Pledge or Fund
              </h3>
              <p className="text-gray-600 mb-6">
                Use crypto as collateral (with institutional leverage typically{' '}
                <strong>70–100%</strong> of the deposited value) or deposit cash/stablecoins.
              </p>
              <Link href="/how-it-works/pledge-crypto" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                Learn more →
              </Link>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-2">
                Invest & Trade
              </h3>
              <p className="text-gray-600 mb-6">
                Buy compliant ERC-1400 tokens and access peer-to-peer liquidity with 
                AI-assisted pricing and on-chain records.
              </p>
              <Link href="/how-it-works/invest-and-trade" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Rails */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built-in safety rails
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Institutional-grade security and compliance from day one
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Oracle-based monitoring</h3>
                <p className="text-gray-600">Oracle-based monitoring, daily marks, and automated margin triggers.</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">On-chain compliance</h3>
                <p className="text-gray-600">Whitelist/KYC enforced on-chain; Reg D / Reg S rules embedded.</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Regulated trading</h3>
                <p className="text-gray-600">Secondary trading typically unlocks after 30 days (per token rules).</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Multi-sig custody</h3>
                <p className="text-gray-600">Multi-sig custody; third-party audits; segregated SPV assets with trustee oversight.</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Automated liquidation</h3>
                <p className="text-gray-600">Oracle feeds for real-world pricing and continuous LTV checks.</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk management</h3>
                <p className="text-gray-600">Automated liquidation logic if thresholds are breached.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/how-it-works/compliance-and-settlement" className="btn btn-primary">
              Learn about compliance & settlement
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the waitlist to be notified when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/waitlist" className="btn btn-primary btn-lg">
                Join the waitlist
              </Link>
              <Link href="/marketplace" className="btn btn-secondary">
                Explore marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
