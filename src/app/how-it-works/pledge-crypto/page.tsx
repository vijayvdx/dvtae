import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pledge crypto or deposit cash — DvTae',
  description: 'Use crypto as collateral with 70-100% financing or deposit cash/stablecoins. Daily mark-to-market with automated margin calls.',
}

export default function PledgeCryptoPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/how-it-works" className="hover:text-gray-700">How it works</Link>
            <span className="mx-2">/</span>
            <span>Pledge crypto or deposit cash</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Pledge crypto or deposit cash
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Keep your upside—use crypto as collateral instead of selling. Lenders typically provide{' '}
            <strong>70–100%</strong> financing against your deposit; proceeds fund investments on-platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How collateral works
              </h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">1. Deposit crypto</h3>
                  <p className="text-gray-600">
                    Transfer your crypto assets to our institutional custody solution. 
                    Your assets remain in your control via multi-sig.
                  </p>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">2. Get financing</h3>
                  <p className="text-gray-600">
                    Institutional lenders provide <strong>70-100%</strong> financing against your collateral value. 
                    No need to sell your crypto holdings.
                  </p>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">3. Invest proceeds</h3>
                  <p className="text-gray-600">
                    Use the loan proceeds to purchase tokenized real-world assets. 
                    Maintain crypto exposure while generating additional yield.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Risk management
              </h2>
              <div className="space-y-4">
                <div className="safety-item">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Daily mark-to-market</h3>
                    <p className="text-gray-600">Daily mark-to-market via Chainlink; auto-margin calls at predefined LTVs.</p>
                  </div>
                </div>
                
                <div className="safety-item">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive rates</h3>
                    <p className="text-gray-600">SOFR + 200 bps financing (illustrative) in the model.</p>
                  </div>
                </div>
                
                <div className="safety-item">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">FX considerations</h3>
                    <p className="text-gray-600">FX note: USDC→USD conversion risk during settlement, if applicable.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">
                  Margin call process
                </h3>
                                  <p className="text-yellow-700 text-sm">
                    If your collateral value drops below the required LTV ratio, you&apos;ll receive a margin call. 
                    You can either add more collateral or reduce your loan balance to maintain compliance.
                  </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Alternative: Direct cash funding
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="grid gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Cash deposits</h3>
                  <p className="text-gray-600 mb-4">
                    Prefer not to use crypto as collateral? You can deposit cash or stablecoins directly 
                    to fund your investments.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      USD wire transfers
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      USDC deposits
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                      Other approved stablecoins
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No collateral risk</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No margin calls</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Simpler compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/how-it-works/wallet-and-kyc" className="btn btn-secondary">
              ← Back: Wallet & KYC
            </Link>
            <Link href="/how-it-works/invest-and-trade" className="btn btn-primary">
              Next: Invest & trade →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
