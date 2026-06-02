import fs from 'node:fs'
import path from 'node:path'

export interface Post {
  slug: string
  title: string
  description: string
  keywords: string[]
  category: string
  author: string
  date: string
  updated: string
  readingTime: number
  excerpt: string
  bodyHtml: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

function readPost(file: string): Post | null {
  try {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
    return JSON.parse(raw) as Post
  } catch {
    return null
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | null {
  if (!fs.existsSync(POSTS_DIR)) return null
  return readPost(`${slug}.json`)
}

export function getAllSlugs(): string[] {
  return getAllPosts().map(p => p.slug)
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug)
  const all = getAllPosts().filter(p => p.slug !== slug)
  if (!current) return all.slice(0, limit)
  const sameCategory = all.filter(p => p.category === current.category)
  const rest = all.filter(p => p.category !== current.category)
  return [...sameCategory, ...rest].slice(0, limit)
}
