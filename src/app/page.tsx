'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'



export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="hero-badge mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Now accepting waitlist applications</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Generate yield from crypto{' '}
              <span className="text-indigo-600">without selling</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Use your crypto as collateral to access curated, tokenized real-world investments. 
              KYC + wallet in minutes. Trade positions on a compliant marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/waitlist" className="btn btn-primary btn-lg">
                Join the waitlist
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary">
                Learn how it works
              </Link>
            </div>
            
            <p className="text-sm text-gray-500">
              Regulated • Compliant • Institutional-grade
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
              Trusted by institutional partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">BNY Mellon</div>
              <div className="text-2xl font-bold text-gray-400">State Street</div>
              <div className="text-2xl font-bold text-gray-400">Chainlink</div>
              <div className="text-2xl font-bold text-gray-400">Circle</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start generating yield from your crypto holdings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-2">
                Connect & Verify
              </h3>
              <p className="text-gray-600">
                Link your wallet and complete KYC/AML to unlock investing.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-2">
                Pledge or Fund
              </h3>
              <p className="text-gray-600">
                Use crypto as collateral (with institutional leverage typically{' '}
                <strong>70–100%</strong> of the deposited value) or deposit cash/stablecoins.
              </p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-2">
                Invest & Trade
              </h3>
              <p className="text-gray-600">
                Buy compliant ERC-1400 tokens and access peer-to-peer liquidity with 
                AI-assisted pricing and on-chain records.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn btn-primary">
              Learn more about the process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to unlock yield from your crypto?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join the waitlist to be among the first to access tokenized real-world investments 
            using your crypto as collateral.
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