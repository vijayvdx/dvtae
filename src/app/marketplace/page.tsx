import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketplace — DvTae',
  description: 'Discover tokenized strategies with transparent rules, clear fees, and peer-to-peer liquidity. Browse private credit, real estate, structured credit, and VC/PE investments.',
}

export default function MarketplacePage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover tokenized strategies with transparent rules, clear fees, and peer-to-peer liquidity.
          </p>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/marketplace/private-credit" className="card hover:border-indigo-300 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Private Credit
                </h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Target yield:</span>
                  <span className="font-medium">7–17%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lockup:</span>
                  <span className="font-medium">30d–2y</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk:</span>
                  <span className="font-medium">Low–Med</span>
                </div>
              </div>
              <div className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                View strategies →
              </div>
            </Link>
            
            <Link href="/marketplace/real-estate" className="card hover:border-indigo-300 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Real Estate
                </h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Target yield:</span>
                  <span className="font-medium">12–17%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lockup:</span>
                  <span className="font-medium">2–3y</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk:</span>
                  <span className="font-medium">Med</span>
                </div>
              </div>
              <div className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                View strategies →
              </div>
            </Link>
            
            <Link href="/marketplace/structured-credit" className="card hover:border-indigo-300 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Structured Credit
                </h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Target yield:</span>
                  <span className="font-medium">12–15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lockup:</span>
                  <span className="font-medium">3–5y</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk:</span>
                  <span className="font-medium">Med</span>
                </div>
              </div>
              <div className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                View strategies →
              </div>
            </Link>
            
            <Link href="/marketplace/vc-pe" className="card hover:border-indigo-300 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  VC / PE
                </h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Target yield:</span>
                  <span className="font-medium">20%+</span>
                </div>
                <div className="flex justify-between">
                  <span>Lockup:</span>
                  <span className="font-medium">3–5y</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk:</span>
                  <span className="font-medium">High</span>
                </div>
              </div>
              <div className="text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                View strategies →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Liquidity Info */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI-powered liquidity
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our marketplace provides peer-to-peer liquidity with AI-assisted pricing and published indicative bids/asks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time pricing</h3>
                    <p className="text-gray-600">AI models analyze market data to provide fair pricing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">P2P execution</h3>
                    <p className="text-gray-600">Direct peer-to-peer trading on smart contracts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Transparent fees</h3>
                    <p className="text-gray-600">Ultra-low smart-contract execution fees</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Live order book example</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-900">Asset</span>
                  <div className="flex gap-4">
                    <span className="text-sm font-medium text-gray-900">Bid</span>
                    <span className="text-sm font-medium text-gray-900">Ask</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Direct Lending 2025-1</span>
                  <div className="flex gap-4">
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>99.2</span>
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>101.1</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Real Estate Fund A</span>
                  <div className="flex gap-4">
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>98.5</span>
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>102.3</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Structured Credit B</span>
                  <div className="flex gap-4">
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>97.8</span>
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>103.1</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Indicative pricing updates per block. Sample data for illustration only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            <strong>Disclaimer:</strong> Targets are illustrative, not guaranteed. Liquidity varies by token. 
            Trading and liquidity are not guaranteed; restrictions apply.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start investing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join the waitlist to access tokenized real-world investments with institutional-grade security.
          </p>
          <Link href="/waitlist" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
            Join the waitlist
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
