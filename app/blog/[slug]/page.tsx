import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import AdSlot from '@/components/AdSlot'
import { getAllSlugs, getPost, getRelatedPosts } from '@/lib/posts'

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Article not found' }
  const url = `https://formatmyjson.com/blog/${post.slug}`
  return {
    title: `${post.title} | FormatMyJSON`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug)
  const url = `https://formatmyjson.com/blog/${post.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: { '@type': 'Organization', name: post.author, url: 'https://formatmyjson.com/editorial-standards' },
    publisher: {
      '@type': 'Organization',
      name: 'FormatMyJSON',
      url: 'https://formatmyjson.com',
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://formatmyjson.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://formatmyjson.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-zinc-950">
        <header className="border-b border-zinc-800 px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="text-lg font-bold text-white hover:text-zinc-300">{'{ }'} JSON Formatter</Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8">
          <nav className="text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-zinc-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-zinc-300">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">{post.category}</span>
          </nav>

          <article>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400 mb-2">{post.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                <Link href="/editorial-standards" className="hover:text-zinc-300">{post.author}</Link>
                <span>•</span>
                <time dateTime={post.date}>Updated {formatDate(post.updated)}</time>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

            <AdSlot slot="8036801172" format="article" />

            <div className="mt-10 rounded-xl bg-zinc-900 border border-cyan-900/50 p-6">
              <h2 className="text-lg font-semibold text-white mb-2">Try the free JSON formatter</h2>
              <p className="text-zinc-400 text-sm mb-4">
                Put this into practice. Format, validate, and explore your JSON in a collapsible tree view — 100% in your browser, no data sent to any server.
              </p>
              <Link href="/" className="inline-block bg-cyan-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-cyan-700 transition-colors">
                Open the JSON Formatter →
              </Link>
            </div>
          </article>

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="text-xl font-bold text-white mb-5">Related guides</h2>
              <div className="grid gap-4">
                {related.map(p => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block bg-zinc-900 rounded-xl border border-zinc-800 p-5 hover:border-cyan-700 hover:shadow-sm transition-all"
                  >
                    <h3 className="text-base font-semibold text-white mb-1">{p.title}</h3>
                    <p className="text-zinc-400 text-sm">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12">
            <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">← Back to all guides</Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
