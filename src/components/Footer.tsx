import Link from 'next/link'
import '../styles/brand.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="brand brand--professional hover:opacity-80 transition-opacity mb-4" aria-label="DVTAE Home">
              <img src="/dvtae_hex_nodes_logo_pack/dvtae_icon_hex-nodes_transparent.svg" alt="" className="brand__icon" />
              <img src="/dvtae_hex_nodes_logo_pack/dvtae_wordblock_circstyle_36_fixed.svg" alt="DVTAE Markets" className="brand__word" />
            </Link>
            <p className="text-sm text-gray-600 mb-6 max-w-sm">
              Institutional rails for tokenized real-world assets with crypto-native distribution and compliant peer-to-peer (P2P) liquidity.
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} DvTae. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/for-managers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  For managers
                </Link>
              </li>
              <li>
                <Link href="/for-lenders" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  For lenders
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/waitlist" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <a
                  href="https://calendly.com/vijay-8v/dvtae-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Schedule Consultation
                </a>
              </li>
              <li>
                <a href="mailto:hello@dvtae.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Important</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Information is for institutional / professional investors. Availability subject to eligibility and jurisdiction. Investing involves risk, including loss of principal. Nothing herein is investment advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
