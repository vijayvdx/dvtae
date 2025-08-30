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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 font-semibold text-lg text-gray-900 hover:text-gray-700 transition-colors">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              D
            </div>
            <span>DvTae</span>
          </Link>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/for-managers" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/for-managers') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                For managers
              </Link>
              <Link 
                href="/how-it-works" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/how-it-works') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                How it works
              </Link>
              <Link 
                href="/security" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/security') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Security
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Link 
                href="/waitlist" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Join the waitlist
              </Link>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 border border-gray-200 bg-white rounded-lg"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/for-managers" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/for-managers') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                For managers
              </Link>
              <Link 
                href="/how-it-works" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/how-it-works') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="/security" 
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive('/security') 
                    ? 'text-gray-900 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
