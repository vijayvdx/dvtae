import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <span className="font-semibold text-gray-900">DvTae</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              Institutional rails for tokenized real-world assets.
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} DvTae. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#security" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Help */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal & Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/risk" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Risk
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/about/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
