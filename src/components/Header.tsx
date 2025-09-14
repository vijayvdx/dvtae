'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-line-200">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-18">
          <Link href="/" className="brand hover:opacity-80 transition-opacity" aria-label="DVTAE Home">
            <img src="/dvtae_hex_nodes_logo_pack/dvtae_icon_hex-nodes_transparent.svg" alt="" className="brand__icon" />
            <img src="/dvtae_hex_nodes_logo_pack/dvtae_wordblock_circstyle_36_fixed.svg" alt="DVTAE Markets" className="brand__word" />
          </Link>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/how-it-works" 
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/how-it-works') 
                    ? 'text-ink-900 bg-bg-100' 
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
              >
                How it Works
              </Link>
              <Link 
                href="/security" 
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/security') 
                    ? 'text-ink-900 bg-bg-100' 
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
              >
                Security
              </Link>
              <Link 
                href="/for-managers" 
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/for-managers') 
                    ? 'text-ink-900 bg-bg-100' 
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
              >
                For Managers
              </Link>
              <Link 
                href="/for-lenders" 
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/for-lenders') 
                    ? 'text-ink-900 bg-bg-100' 
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
              >
                For Lenders
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://calendly.com/vijay-8v/dvtae-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex btn-secondary px-4 py-2 text-sm cursor-pointer"
              >
                Schedule a consultation
              </a>
              <Link
                href="/waitlist"
                className="hidden md:inline-flex btn-primary px-6 py-2 text-sm"
              >
                Join the waitlist
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 border border-line-200 bg-white rounded-2"
                aria-expanded={isMenuOpen}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-line-200">
            <div className="flex flex-col space-y-2">
              <Link
                href="/waitlist"
                className="btn-primary px-3 py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Join the waitlist
              </Link>
              <a
                href="https://calendly.com/vijay-8v/dvtae-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-3 py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a consultation
              </a>
              <div className="border-t border-line-200 my-2"></div>
              <Link
                href="/how-it-works"
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/how-it-works')
                    ? 'text-ink-900 bg-bg-100'
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                href="/security" 
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/security') 
                    ? 'text-ink-900 bg-bg-100' 
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link 
                href="/for-managers" 
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/for-managers') 
                    ? 'text-ink-900 bg-bg-100' 
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                For Managers
              </Link>
              <Link 
                href="/for-lenders" 
                className={`text-sm font-medium px-3 py-2 rounded-2 transition-colors ${
                  isActive('/for-lenders') 
                    ? 'text-ink-900 bg-bg-100' 
                    : 'text-ink-700 hover:text-ink-900 hover:bg-bg-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                For Lenders
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
