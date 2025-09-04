import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — DvTae',
  description: 'Insights on tokenized real-world assets, institutional DeFi, compliance, and the future of on-chain investing.',
  keywords: 'tokenized RWA blog, institutional DeFi, compliance insights, on-chain investing, ERC-1400, blockchain finance',
  openGraph: {
    title: 'Blog — DvTae',
    description: 'Insights on tokenized real-world assets, institutional DeFi, compliance, and the future of on-chain investing.',
    url: 'https://dvtae.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — DvTae',
    description: 'Insights on tokenized real-world assets, institutional DeFi, compliance, and the future of on-chain investing.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const posts = [
    {
      slug: 'the-future-of-tokenized-rwa',
      title: 'The Future of Tokenized Real-World Assets',
      excerpt: 'Exploring how tokenization is transforming traditional finance and creating new opportunities for institutional investors.',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Industry Insights'
    },
    {
      slug: 'erc-1400-compliance-framework',
      title: 'Understanding ERC-1400: The Compliance Framework for Security Tokens',
      excerpt: 'A deep dive into the ERC-1400 standard and how it enables compliant tokenization of real-world assets.',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Technical'
    },
    {
      slug: 'institutional-defi-adoption',
      title: 'Institutional DeFi Adoption: Opportunities and Challenges',
      excerpt: 'How traditional financial institutions are navigating the transition to decentralized finance infrastructure.',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Market Analysis'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Insights on tokenized real-world assets, institutional DeFi, compliance, and the future of on-chain investing.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay updated on tokenized assets
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our waitlist to receive insights, updates, and early access to the DvTae platform.
          </p>
          <Link href="/" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors inline-flex items-center space-x-2">
            Join waitlist
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}