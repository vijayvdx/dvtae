import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page not found
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Go home</span>
          </Link>
          
          <Link 
            href="/marketplace"
            className="bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Browse marketplace</span>
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Looking for something specific?
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/how-it-works" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              How it works
            </Link>
            <Link href="/security" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              Security
            </Link>
            <Link href="/for-managers" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              For Managers
            </Link>
            <Link href="/for-lenders" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              For Lenders
            </Link>
            <Link href="/resources" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              Resources
            </Link>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              About
            </Link>
            <Link href="/#consult" className="text-indigo-600 hover:text-indigo-700 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}