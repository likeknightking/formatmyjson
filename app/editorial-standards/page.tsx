import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Editorial Standards — How We Create Our Content | FormatMyJSON',
  description:
    'How FormatMyJSON researches, writes, and reviews its guides on JSON, APIs, data formats, and developer tooling. Our commitment to accuracy, clarity, and independence.',
  alternates: { canonical: 'https://formatmyjson.com/editorial-standards' },
}

export default function EditorialStandards() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-white hover:text-zinc-300">{'{ }'} JSON Formatter</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-3">Editorial Standards</h1>
        <p className="text-zinc-400 mb-8">How the FormatMyJSON Editorial Team researches, writes, and reviews everything we publish.</p>

        <div className="article-body">
          <h2>Who writes our content</h2>
          <p>
            Our guides are produced by the <strong>FormatMyJSON Editorial Team</strong> — writers and reviewers who focus on JSON, data formats,
            APIs, and everyday developer tooling. We write for working developers and people learning to handle structured data, so our priority is
            making technical topics like parsing, validation, and serialization genuinely easy to understand.
          </p>

          <h2>How we research and verify</h2>
          <p>Every guide follows the same process before it is published:</p>
          <ul>
            <li>Code samples and JSON snippets are tested against real parsers and validators to confirm they behave as described.</li>
            <li>We reference the relevant specifications (such as the JSON, YAML, and HTTP standards) rather than relying on assumptions.</li>
            <li>We explain the reasoning behind a recommendation rather than asking you to take it on faith.</li>
            <li>Guides are reviewed for clarity and updated when tools, formats, or best practices change.</li>
          </ul>

          <h2>Our independence</h2>
          <p>
            FormatMyJSON is free to use and supported by advertising. Ads never influence the content of our guides. We do not sell
            software or services, and we are not paid to recommend any specific library, framework, or vendor.
          </p>

          <h2>This is education, not professional advice</h2>
          <p>
            Our content is for general educational purposes. It does not account for the specifics of your project or environment and is not a
            substitute for testing in your own systems. Always validate behavior against your real data before relying on it in production.
          </p>

          <h2>Corrections</h2>
          <p>
            Found something that looks wrong? We want to fix it. Email <strong>contact@formatmyjson.com</strong> and we will review it promptly.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">← Read our guides</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
