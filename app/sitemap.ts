export default function sitemap() {
  const base = 'https://formatmyjson.com'
  const now = new Date()

  return [
    { url: base,                      lastModified: now, changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${base}/xml-formatter`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/json-to-xml`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/xml-to-json`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/json-to-yaml`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/json-to-csv`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/base64-encode`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/base64-decode`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]
}
