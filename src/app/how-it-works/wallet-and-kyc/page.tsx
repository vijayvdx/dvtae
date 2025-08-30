import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Connect wallet & verify identity — DvTae',
  description: 'Connect your wallet and complete KYC/AML verification to access tokenized investments. Supported wallets include MetaMask and WalletConnect.',
}

export default function WalletAndKYCPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/how-it-works" className="hover:text-gray-700">How it works</Link>
            <span className="mx-2">/</span>
            <span>Connect wallet & verify identity</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Connect wallet & verify identity
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We&apos;re a compliance-first platform. Connect your wallet and pass KYC/AML once to access offerings.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Supported wallets
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">M</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">MetaMask</h3>
                    <p className="text-sm text-gray-600">Most popular Ethereum wallet</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">W</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WalletConnect</h3>
                    <p className="text-sm text-gray-600">Connect any compatible wallet</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>SSO integration:</strong> Direct connection to issuer portal where applicable for seamless access.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What we check
              </h2>
              <div className="space-y-4">
                <div className="safety-item">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Identity verification</h3>
                    <p className="text-gray-600">Government-issued ID and proof of address</p>
                  </div>
                </div>
                
                <div className="safety-item">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accreditation status</h3>
                    <p className="text-gray-600">Where applicable for specific investments</p>
                  </div>
                </div>
                
                <div className="safety-item">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sanctions screening</h3>
                    <p className="text-gray-600">OFAC and global sanctions list checks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-indigo-50 border border-indigo-200 rounded-xl">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">
              On-chain gating
            </h3>
            <p className="text-indigo-800 mb-4">
              Your address is whitelisted; only approved wallets can receive/transfer tokens.
            </p>
            <div className="bg-white p-4 rounded-lg border border-indigo-200">
              <p className="text-sm text-indigo-700">
                <strong>Security note:</strong> We do not store your private keys. Your wallet remains under your full control.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Important:</strong> Eligibility varies by jurisdiction and offering. Some investments may require accredited investor status.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/how-it-works" className="btn btn-secondary">
              ← Back to overview
            </Link>
            <Link href="/how-it-works/pledge-crypto" className="btn btn-primary">
              Next: Pledge crypto →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
