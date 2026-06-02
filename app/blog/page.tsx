import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import ToolNav from '@/components/ToolNav'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Guides & Articles — JSON, APIs & Developer Tools | FormatMyJSON',
  description:
    'In-depth guides on JSON, data formats, APIs, parsing, validation, and web development. Learn how to format, debug, and work with structured data more effectively.',
  alternates: { canonical: 'https://formatmyjson.com/blog' },
  openGraph: {
    title: 'Guides & Articles | FormatMyJSON',
    description: 'In-depth guides on JSON, APIs, data formats, and developer tooling.',
    type: 'website',
    url: 'https://formatmyjson.com/blog',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map(p => p.category)))

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://formatmyjson.com/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <div className="min-h-screen bg-zinc-950">
        <header className="border-b border-zinc-800 px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="text-lg font-bold text-white hover:text-zinc-300">{'{ }'} JSON Formatter</Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8">
          <ToolNav />

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Guides &amp; Articles</h1>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Practical guides on JSON, data formats, APIs, parsing, and validation — written to help developers format, debug, and work with structured data more effectively.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-zinc-500 py-16">New articles are on the way.</p>
          ) : (
            <div className="space-y-10">
              {categories.map(category => (
                <section key={category}>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-400 mb-4">{category}</h2>
                  <div className="grid gap-4">
                    {posts
                      .filter(p => p.category === category)
                      .map(post => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="block bg-zinc-900 rounded-xl border border-zinc-800 p-5 hover:border-cyan-700 hover:shadow-sm transition-all"
                        >
                          <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                          <div className="flex items-center gap-3 text-xs text-zinc-500">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.readingTime} min read</span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}
