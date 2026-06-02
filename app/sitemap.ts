import { getAllPosts } from '@/lib/posts'

export default function sitemap() {
  const base = 'https://formatmyjson.com'
  const now = new Date()

  const staticPages = [
    { url: base,                      lastModified: now, changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${base}/xml-formatter`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/json-to-xml`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/xml-to-json`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/json-to-yaml`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/json-to-csv`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/base64-encode`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/base64-decode`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/blog`,            lastModified: now, changeFrequency: 'weekly' as const,  priority: 0.8 },
    { url: `${base}/editorial-standards`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${base}/privacy-policy`,  lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms`,           lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/about`,           lastModified: now, changeFrequency: 'yearly' as const, priority: 0.4 },
  ]

  const postPages = getAllPosts().map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...postPages]
}
