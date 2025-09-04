import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How it works — DvTae',
  description: 'Connect, verify, and fund with crypto collateral or cash. Access tokenized investments with 70-100% leverage, ERC-1400 tokens, and P2P trading on a compliant marketplace.',
  keywords: 'crypto collateral, tokenized RWA, ERC-1400, leverage, P2P trading, compliant marketplace, KYC, institutional rails',
  openGraph: {
    title: 'How it works — DvTae',
    description: 'Connect, verify, and fund with crypto collateral or cash. Access tokenized investments with institutional-grade security.',
    url: 'https://dvtae.com/how-it-works',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How it works — DvTae',
    description: 'Connect, verify, and fund with crypto collateral or cash. Access tokenized investments with institutional-grade security.',
  },
  alternates: {
    canonical: '/how-it-works',
  },
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Clean Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            How it works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connect, verify, and choose how to fund—pledge crypto or deposit cash—then allocate into tokenized RWA offerings and trade positions on a compliant marketplace.
          </p>
        </div>
      </section>

      {/* Comprehensive Steps with Full Details */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {/* Step 1 - Connect & Verify */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Connect wallet & verify identity
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We&apos;re a compliance-first platform. Connect your wallet and pass KYC/AML once to access offerings.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Supported wallets</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">MetaMask - Most popular Ethereum wallet</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">WalletConnect - Connect any compatible wallet</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">SSO integration - Direct connection to issuer portal where applicable</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">What we check</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Identity verification - Government-issued ID and proof of address</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Accreditation status - Where applicable for specific investments</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Sanctions screening - OFAC and global sanctions list checks</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-900">Note:</span> Your address is whitelisted; only approved wallets can receive/transfer tokens. We do not store your private keys.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 - Pledge or Fund */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Pledge crypto or deposit cash
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Keep your upside—use crypto as collateral instead of selling. Lenders typically provide <strong>70–100%</strong> financing against your deposit; proceeds fund investments on-platform.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">How collateral works</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Deposit crypto - Transfer your crypto assets to our institutional custody solution</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Get financing - Institutional lenders provide 70-100% financing against your collateral value</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Invest proceeds - Use the loan proceeds to purchase tokenized real-world assets</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Risk management</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Daily mark-to-market via Chainlink; auto-margin calls at predefined LTVs</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">SOFR + 200 bps financing (illustrative) in the model</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">FX note: USDC→USD conversion risk during settlement, if applicable</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-900">Note:</span> Alternative: Direct cash funding - You can deposit cash or stablecoins directly to fund your investments without using crypto as collateral.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Invest & Trade */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Invest, manage, and trade
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Allocate into tokenized offerings, receive ERC-1400 tokens, and manage positions in your portfolio. Trading unlocks per rule set.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Token standard & marketplace</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">ERC-1400 with transfer restrictions (Reg D / Reg S baked in)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">AI-powered price discovery, P2P settlement, and blockchain-backed records</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Typical unlock: 30-day secondary window (illustrative, varies by offering)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Compliance & settlement</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Multi-sig custody; third-party audits; segregated SPV assets with trustee oversight</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Oracle feeds for real-world pricing and continuous LTV checks</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                        <p className="text-gray-600 leading-relaxed">Automated liquidation logic if thresholds are breached</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-900">Note:</span> Trading and liquidity are not guaranteed; restrictions apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Rails - Clean Grid */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Built-in safety rails
            </h2>
            <p className="text-lg text-gray-600">
              Institutional-grade security and compliance from day one
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Oracle-based monitoring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Daily marks and automated margin triggers via Chainlink oracles</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">On-chain compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Whitelist/KYC enforced on-chain with Reg D / Reg S rules embedded</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-sig custody</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Third-party audits and segregated SPV assets with trustee oversight</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Automated liquidation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Continuous LTV checks with automated liquidation logic if thresholds are breached</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Regulated trading</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Secondary trading unlocks per token-specific compliance rules</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-time pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Oracle feeds provide continuous real-world asset pricing and valuation</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section aria-labelledby="gets-title" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 id="gets-title" className="text-4xl font-bold text-gray-900 mb-8">
            What you get
          </h2>
          <ul className="mt-4 space-y-4 text-lg">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Keep crypto exposure while generating income</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Liquidity windows with indicative pricing</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Institutional rails: custody, oracles, and on-chain compliance</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Risk & Safeguards */}
      <section aria-labelledby="safeguards-title" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 id="safeguards-title" className="text-4xl font-bold text-gray-900 mb-8">
            Risk &amp; safeguards
          </h2>
          <ul className="mt-4 space-y-4 text-lg">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Oracle-based marks and LTV triggers</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">Multi-sig custody and SPV segregation</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <span className="text-gray-700">ERC-1400 transfer rules and whitelisted wallets</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the waitlist to be notified when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/waitlist" className="btn btn-primary btn-lg">
              Join the waitlist
            </Link>
            <Link href="/marketplace" className="btn btn-secondary inline-flex items-center gap-2">
              Explore marketplace
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Coming soon</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
