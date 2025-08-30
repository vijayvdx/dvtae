import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the waitlist — DvTae',
  description: 'Be among the first to access tokenized real-world investments using your crypto as collateral. Join our exclusive waitlist.',
}

export default function WaitlistPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-badge mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Early access program</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Join the waitlist
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Be among the first to access tokenized real-world investments using your crypto as collateral. 
            Get exclusive early access when we launch.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select your primary interest</option>
                  <option value="private-credit">Private Credit</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="structured-credit">Structured Credit</option>
                  <option value="vc-pe">VC / PE</option>
                  <option value="all">All strategies</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary btn-lg"
              >
                Join the waitlist
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-6 text-center">
              By joining, you agree to receive updates about our platform launch. 
              We respect your privacy and won&apos;t spam you.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What you&apos;ll get as an early member
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive benefits for our founding community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Priority access
              </h3>
              <p className="text-gray-600">
                Be among the first to access our platform when we launch, 
                with priority onboarding and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Exclusive rates
              </h3>
              <p className="text-gray-600">
                Access to premium investment opportunities with preferential 
                terms and reduced fees for early adopters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community access
              </h3>
              <p className="text-gray-600">
                Join our exclusive community of crypto-native investors with 
                direct access to our team and special events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                When will the platform launch?
              </h3>
              <p className="text-gray-600">
                We&apos;re targeting Q2 2025 for our initial launch. Waitlist members will be 
                notified first and get priority access during our beta phase.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What are the minimum investment amounts?
              </h3>
              <p className="text-gray-600">
                Minimum investments will vary by strategy, typically ranging from $10,000 to $100,000. 
                We&apos;ll share specific details with waitlist members as we approach launch.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Which cryptocurrencies will be accepted as collateral?
              </h3>
              <p className="text-gray-600">
                Initially, we&apos;ll support major cryptocurrencies like BTC and ETH. We plan to expand 
                to additional assets based on institutional lending availability and community demand.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is there any cost to join the waitlist?
              </h3>
              <p className="text-gray-600">
                No, joining the waitlist is completely free. There are no obligations, and you can 
                unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
