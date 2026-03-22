export default function sitemap() {
  return [
    { url: 'https://formatmyjson.com', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
  ]
}
