'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'


function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details className="border border-gray-200 rounded-lg">
      <summary 
        className="cursor-pointer w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
      </summary>
      <div className="px-6 pb-4">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </details>
  )
}

export default function ForLenders() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Bring secured credit to crypto holders
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Offer term or revolving credit lines against pledged crypto with oracle monitoring, automated LTV triggers, and compliant investor onboarding.
            </p>

            <div className="flex justify-center">
              <Link href="#consult" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors">
                Schedule a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Program design</h3>
              <p className="text-gray-600">LTV tiers, triggers, collateral types, and geos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk automation</h3>
              <p className="text-gray-600">Oracle marks, alerts, and auto-margin flows.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">KYC &amp; eligibility</h3>
              <p className="text-gray-600">Whitelisted wallets; regional gating.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicing hooks</h3>
              <p className="text-gray-600">Statements, notices, payout rails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Lender Programs Launch */}
      <section aria-labelledby="lend-flow" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 id="lend-flow" className="text-4xl font-bold text-gray-900 mb-8 text-center">
            How lender programs launch
          </h2>
          <ol className="mt-4 space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Define program (LTV bands, assets, jurisdictions)</h3>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Connect custody and oracle feeds</h3>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Whitelist eligible borrowers</h3>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Launch offer pages and disclosures</h3>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Monitor, margin, and service</h3>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="lend-faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 id="lend-faq" className="text-4xl font-bold text-gray-900 mb-8 text-center">
            FAQs
          </h2>
          <div className="space-y-4">
            <FAQItem 
              question="Which assets can be pledged?"
              answer="We scope eligible coins and stablecoins jointly, based on liquidity and oracle coverage."
            />
            <FAQItem 
              question="What are typical LTV bands?"
              answer="Programs commonly start around 30–60% LTV with stepped triggers; final bands depend on collateral and venue. Terms vary by program."
            />
            <FAQItem 
              question="How are liquidations handled?"
              answer="Automated notices and margin logic enforce thresholds; liquidation paths are documented in program terms. Specific parameters vary by program."
            />
            <FAQItem 
              question="What dashboards are available?"
              answer="Borrower and lender views with marks, alerts, statements, and history."
            />
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consult" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discuss a lender program
            </h2>
            <p className="text-gray-600 text-lg mt-1 mb-6">
              Book a 30-minute session with our team.
            </p>
            <p className="mt-3">
              <a
                href="https://calendly.com/vijay-8v/dvtae-consultation"
                target="_blank"
                rel="noopener noreferrer"
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