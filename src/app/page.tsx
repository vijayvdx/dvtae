'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(1)

  const steps = [
    {
      id: 1,
      title: "Connect & Verify",
      summary: "Link your wallet and complete KYC/AML to unlock investing.",
      details: {
        description: "We're a compliance-first platform. Connect your wallet and pass KYC/AML once to access offerings.",
        features: [
          {
            title: "Supported wallets",
            items: [
              "MetaMask - Most popular Ethereum wallet",
              "WalletConnect - Connect any compatible wallet",
              "SSO integration - Direct connection to issuer portal where applicable"
            ]
          },
          {
            title: "What we check",
            items: [
              "Identity verification - Government-issued ID and proof of address",
              "Accreditation status - Where applicable for specific investments",
              "Sanctions screening - OFAC and global sanctions list checks"
            ]
          }
        ],
        highlight: "Your address is whitelisted; only approved wallets can receive/transfer tokens. We do not store your private keys."
      }
    },
    {
      id: 2,
      title: "Pledge or Fund",
      summary: "Use crypto as collateral (with institutional leverage typically 70–100% of the deposited value) or deposit cash/stablecoins.",
      details: {
        description: "Keep your upside—use crypto as collateral instead of selling. Lenders typically provide 70–100% financing against your deposit; proceeds fund investments on-platform.",
        features: [
          {
            title: "How collateral works",
            items: [
              "Deposit crypto - Transfer your crypto assets to our institutional custody solution",
              "Get financing - Institutional lenders provide 70-100% financing against your collateral value",
              "Invest proceeds - Use the loan proceeds to purchase tokenized real-world assets"
            ]
          },
          {
            title: "Risk management",
            items: [
              "Daily mark-to-market via Chainlink; auto-margin calls at predefined LTVs",
              "SOFR + 200 bps financing (illustrative) in the model",
              "FX note: USDC→USD conversion risk during settlement, if applicable"
            ]
          }
        ],
        highlight: "Alternative: Direct cash funding - You can deposit cash or stablecoins directly to fund your investments without using crypto as collateral."
      }
    },
    {
      id: 3,
      title: "Invest & Trade",
      summary: "Buy compliant ERC-1400 tokens and access peer-to-peer liquidity with AI-assisted pricing and on-chain records.",
      details: {
        description: "Allocate into tokenized offerings, receive ERC-1400 tokens, and manage positions in your portfolio. Trading unlocks per rule set.",
        features: [
          {
            title: "Token standard & marketplace",
            items: [
              "ERC-1400 with transfer restrictions (Reg D / Reg S baked in)",
              "AI-powered price discovery, P2P settlement, and blockchain-backed records",
              "Typical unlock: 30-day secondary window (varies by offering)"
            ]
          },
          {
            title: "Compliance & settlement",
            items: [
              "Multi-sig custody; third-party audits; segregated SPV assets with trustee oversight",
              "Oracle feeds for real-world pricing and continuous LTV checks",
              "Automated liquidation logic if thresholds are breached"
            ]
          }
        ],
        highlight: "Trading and liquidity are not guaranteed; restrictions apply."
      }
    }
  ]

  return (
    <section id="how" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to access tokenized RWA (real world assets) and start generating yield from your crypto holdings
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Side - Step Navigation */}
            <div className="lg:col-span-5">
              <div className="space-y-1">
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={`group cursor-pointer transition-all duration-200 ${
                      activeStep === step.id ? '' : 'hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setActiveStep(step.id)}
                  >
                    <div className="flex items-start gap-6 py-6 px-4 rounded-lg">
                      {/* Step Number */}
                      <div className="flex-shrink-0 relative">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                          activeStep === step.id 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                        }`}>
                          {step.id}
                        </div>
                        {/* Connection line */}
                        {index < steps.length - 1 && (
                          <div className="absolute top-8 left-1/2 w-px h-12 bg-gray-200 transform -translate-x-1/2"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-200 ${
                          activeStep === step.id ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-colors duration-200 ${
                          activeStep === step.id ? 'text-gray-600' : 'text-gray-500'
                        }`}>
                          {step.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Content Area */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-8">
                <div className="animate-fadeIn">
                  {/* Navigation arrows at top */}
                  <div className="flex justify-between items-center mb-8">
                    <button
                      onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                      disabled={activeStep === 1}
                      className={`p-2 rounded-full transition-colors ${
                        activeStep === 1 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {steps.map((step) => (
                        <button
                          key={step.id}
                          onClick={() => setActiveStep(step.id)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            activeStep === step.id ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                      disabled={activeStep === steps.length}
                      className={`p-2 rounded-full transition-colors ${
                        activeStep === steps.length 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Clean Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                        {activeStep}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {steps.find(s => s.id === activeStep)?.title}
                      </h3>
                    </div>
                    <div className="w-16 h-px bg-gray-900"></div>
                  </div>

                  {/* Description */}
                  <div className="mb-10">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {steps.find(s => s.id === activeStep)?.details.description}
                    </p>
                  </div>

                  {/* Features - Clean List */}
                  <div className="space-y-10">
                    {steps.find(s => s.id === activeStep)?.details.features.map((feature, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          {feature.title}
                        </h4>
                        <div className="space-y-3">
                          {feature.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2.5"></div>
                              <p className="text-gray-600 leading-relaxed">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Simple Note */}
                  <div className="mt-10 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-medium text-gray-900">Note:</span> {steps.find(s => s.id === activeStep)?.details.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

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
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              <span>Now accepting waitlist applications</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Generate yield from crypto{' '}
              <span className="text-indigo-600">without selling</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Use your crypto as collateral to access curated RWA tokenization opportunities. 
              KYC + wallet in minutes. Trade tokenized real world assets on a compliant marketplace.
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
      <HowItWorksSection />

      {/* Featured Strategies */}
      <section id="strategies" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated tokenized RWA opportunities with transparent rules and clear fees
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Private Credit</h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
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
              <Link href="/marketplace/private-credit" className="btn btn-secondary w-full">
                View details
              </Link>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Real Estate</h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
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
              <Link href="/marketplace/real-estate" className="btn btn-secondary w-full">
                View details
              </Link>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Structured Credit</h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
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
              <Link href="/marketplace/structured-credit" className="btn btn-secondary w-full">
                View details
              </Link>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">VC / PE</h3>
                <span className="badge">ERC-1400</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
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
              <Link href="/marketplace/vc-pe" className="btn btn-secondary w-full">
                View details
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/marketplace" className="btn btn-primary">
              Explore all strategies
            </Link>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-20 px-6">
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
                <p className="text-gray-600">Daily marks and automated margin triggers via Chainlink oracles.</p>
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
                <p className="text-gray-600">Secondary trading typically unlocks after 30 days per token rules.</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Multi-sig custody</h3>
                <p className="text-gray-600">Third-party audits and segregated SPV assets with trustee oversight.</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Automated liquidation</h3>
                <p className="text-gray-600">Smart contract logic triggers liquidation if risk thresholds are breached.</p>
              </div>
            </div>
            
            <div className="safety-item">
              <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">AI-powered pricing</h3>
                <p className="text-gray-600">Machine learning models provide fair market pricing for P2P trades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Managers */}
      <section id="managers" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                For asset managers
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Tokenize your strategies and access a new pool of crypto-native capital. 
                Our platform handles compliance, custody, and secondary market liquidity.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">ERC-1400 tokenization</h3>
                    <p className="text-gray-600">Compliant token standard with built-in transfer restrictions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Institutional custody</h3>
                    <p className="text-gray-600">BNY Mellon and State Street integration for asset safekeeping</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Secondary liquidity</h3>
                    <p className="text-gray-600">P2P marketplace with AI-assisted pricing for your investors</p>
                  </div>
                </div>
              </div>
              
              <Link href="/for-managers/apply" className="btn btn-primary">
                Apply to list your strategy
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sample liquidity data</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Direct Lending Note 2025-1</span>
                  <div className="flex gap-2">
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>Bid 99.2</span>
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>Ask 101.1</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Real Estate Fund Series A</span>
                  <div className="flex gap-2">
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>Bid 98.5</span>
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>Ask 102.3</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Structured Credit Pool B</span>
                  <div className="flex gap-2">
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>Bid 97.8</span>
                    <span className="badge" style={{color: 'rgb(107, 114, 128)', borderColor: 'rgb(209, 213, 219)'}}>Ask 103.1</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Sample data for illustration only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn */}
      <section id="learn" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learn about tokenized assets
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Educational resources to help you understand the future of finance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What are tokenized assets?
              </h3>
              <p className="text-gray-600 mb-6">
                Learn how real-world assets are converted into blockchain tokens, 
                enabling fractional ownership and enhanced liquidity.
              </p>
              <Link href="/learn/tokenized-assets" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Read more →
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Understanding ERC-1400
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how this security token standard enables compliant 
                trading with built-in regulatory controls.
              </p>
              <Link href="/learn/erc-1400" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Read more →
              </Link>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Crypto collateral explained
              </h3>
              <p className="text-gray-600 mb-6">
                How to use your crypto holdings as collateral while maintaining 
                upside exposure and generating additional yield.
              </p>
              <Link href="/learn/crypto-collateral" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our platform
            </p>
          </div>
          
          <div className="space-y-6">
            <FAQItem 
              question="How does crypto collateral work?"
              answer="You deposit crypto assets which serve as collateral for a loan. Institutional lenders typically provide 70-100% financing against your deposit value. This allows you to invest in tokenized assets while maintaining exposure to your crypto holdings."
            />
            
            <FAQItem 
              question="What are ERC-1400 tokens?"
              answer="ERC-1400 is a security token standard that enables compliant tokenization of real-world assets. These tokens have built-in transfer restrictions that enforce regulatory requirements like Reg D and Reg S automatically on-chain."
            />
            
            <FAQItem 
              question="When can I trade my positions?"
              answer="Secondary trading typically unlocks after 30 days, though this varies by specific token rules and regulatory requirements. Our P2P marketplace provides liquidity with AI-assisted pricing once trading is enabled."
            />
            
            <FAQItem 
              question="How are assets custody protected?"
              answer="We use multi-signature custody solutions with institutional partners like BNY Mellon and State Street. Assets are held in segregated SPVs with trustee oversight, and we conduct regular third-party audits."
            />
            
            <FAQItem 
              question="What happens if my collateral value drops?"
              answer="We monitor collateral values daily using Chainlink oracles. If your loan-to-value ratio exceeds predetermined thresholds, you'll receive margin calls. Automated liquidation logic protects against further losses if thresholds are breached."
            />
            
            <FAQItem 
              question="Who can invest on the platform?"
              answer="Access requires KYC/AML verification and varies by jurisdiction and offering. Some investments may require accredited investor status. Your wallet address is whitelisted on-chain to ensure compliance."
            />
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