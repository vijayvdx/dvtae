'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    userType: '',
    investmentInterests: [] as string[],
    cryptoHoldings: '',
    investmentRange: '',
    timeline: '',
    hearAbout: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      investmentInterests: prev.investmentInterests.includes(interest)
        ? prev.investmentInterests.filter(i => i !== interest)
        : [...prev.investmentInterests, interest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }
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
          
          {isSubmitted ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">You&apos;re on the list!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for joining our waitlist. We&apos;ll be in touch soon with exclusive updates and early access opportunities.
              </p>
              <p className="text-sm text-gray-500">
                Keep an eye on your inbox for important updates.
              </p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Your company (optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                      I am a... *
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      required
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option value="individual-investor">Individual Investor</option>
                      <option value="accredited-investor">Accredited Investor</option>
                      <option value="institutional-investor">Institutional Investor</option>
                      <option value="family-office">Family Office</option>
                      <option value="asset-manager">Asset Manager</option>
                      <option value="fund-manager">Fund Manager</option>
                      <option value="crypto-trader">Crypto Trader</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Investment Interests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Investment interests (select all that apply) *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { id: 'private-credit', label: 'Private Credit (7-17% target yield)' },
                      { id: 'real-estate', label: 'Real Estate (12-17% target yield)' },
                      { id: 'structured-credit', label: 'Structured Credit (12-15% target yield)' },
                      { id: 'vc-pe', label: 'VC / PE (20%+ target yield)' },
                      { id: 'tokenized-assets', label: 'Tokenized RWA' },
                      { id: 'defi-yield', label: 'DeFi Yield Strategies' }
                    ].map((interest) => (
                      <label key={interest.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.investmentInterests.includes(interest.id)}
                          onChange={() => handleCheckboxChange(interest.id)}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-700">{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cryptoHoldings" className="block text-sm font-medium text-gray-700 mb-2">
                      Crypto holdings range
                    </label>
                    <select
                      id="cryptoHoldings"
                      name="cryptoHoldings"
                      value={formData.cryptoHoldings}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select range (optional)</option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-50k">$10K - $50K</option>
                      <option value="50k-250k">$50K - $250K</option>
                      <option value="250k-1m">$250K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="over-5m">Over $5M</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="investmentRange" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected investment range
                    </label>
                    <select
                      id="investmentRange"
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select range (optional)</option>
                      <option value="under-25k">Under $25K</option>
                      <option value="25k-100k">$25K - $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="over-5m">Over $5M</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Investment timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select timeline (optional)</option>
                      <option value="immediately">Ready to invest immediately</option>
                      <option value="1-3-months">Within 1-3 months</option>
                      <option value="3-6-months">Within 3-6 months</option>
                      <option value="6-12-months">Within 6-12 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select source (optional)</option>
                      <option value="twitter">Twitter</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="crypto-media">Crypto Media</option>
                      <option value="referral">Referral</option>
                      <option value="conference">Conference/Event</option>
                      <option value="search">Search Engine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Tell us more about your investment goals, specific interests, or questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining waitlist...</span>
                    </div>
                  ) : (
                    'Join the waitlist'
                  )}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-6 text-center">
                By joining, you agree to receive updates about our platform launch. 
                We respect your privacy and won&apos;t spam you. * Required fields
              </p>
            </div>
          )}
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
          
          <div className="grid gap-8">
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
