import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <span className="font-semibold text-gray-900">DvTae</span>
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-sm">
              Institutional rails for tokenized real-world assets. Generate yield from crypto without selling.
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
                <Link href="/for-managers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  For managers
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Join waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@dvtae.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://twitter.com/dvtae" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/dvtae" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/dvtae" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Help */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal & Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="/legal/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/legal/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal/risk" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a href="mailto:support@dvtae.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="https://status.dvtae.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
