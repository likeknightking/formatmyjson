'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TOOLS = [
  { href: '/',               label: 'JSON Formatter' },
  { href: '/xml-formatter',  label: 'XML Formatter' },
  { href: '/json-to-xml',    label: 'JSON → XML' },
  { href: '/xml-to-json',    label: 'XML → JSON' },
  { href: '/json-to-yaml',   label: 'JSON → YAML' },
  { href: '/json-to-csv',    label: 'JSON → CSV' },
  { href: '/base64-encode',  label: 'Base64 Encode' },
  { href: '/base64-decode',  label: 'Base64 Decode' },
]

export default function ToolNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap gap-1.5 mb-6" aria-label="Tools">
      {TOOLS.map(tool => {
        const isActive = pathname === tool.href
        return (
          <Link
            key={tool.href}
            href={tool.href}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              isActive
                ? 'bg-cyan-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
            }`}
          >
            {tool.label}
          </Link>
        )
      })}
    </nav>
  )
}
