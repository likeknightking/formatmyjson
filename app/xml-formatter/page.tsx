import type { Metadata } from 'next'
import ToolNav from '@/components/ToolNav'
import XmlFormatterClient from './XmlFormatterClient'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'XML Formatter & Beautifier — Format XML Online | FormatMyJSON',
  description: 'Free online XML formatter and beautifier. Paste your XML to instantly format, validate, and beautify with proper indentation. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/xml-formatter' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is XML formatting?', acceptedAnswer: { '@type': 'Answer', text: 'XML formatting adds proper indentation and line breaks to XML data, making it easier to read and debug. This tool formats XML with configurable indent levels.' } },
    { '@type': 'Question', name: 'Can I validate XML here?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the tool automatically validates your XML and shows error messages if the XML is malformed.' } },
  ],
}

export default function XmlFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="min-h-screen bg-zinc-950">
        <header className="border-b border-zinc-800 px-4 py-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-lg font-bold text-zinc-100">🔧 FormatMyJSON — Developer Tools</h1>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <ToolNav />
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-zinc-100 mb-2">XML Formatter & Beautifier</h2>
            <p className="text-zinc-400 text-sm">Paste your XML to instantly format, beautify, and validate. 100% client-side.</p>
          </div>
          <XmlFormatterClient />
          <article className="mt-16 space-y-6 max-w-3xl mx-auto">
            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-2">What is XML Formatting?</h2>
              <p className="text-zinc-400 leading-relaxed">XML formatting transforms compact or minified XML into a human-readable structure with proper indentation. This makes it easier to spot errors, understand the document structure, and share with colleagues.</p>
            </section>
            <AdSlot slot="7788990011" format="article" />
            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">FAQ</h2>
              {faqJsonLd.mainEntity.map(faq => (
                <div key={faq.name} className="mb-4">
                  <h3 className="text-base font-semibold text-zinc-200">{faq.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-1">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </section>
          </article>
        </main>
      </div>
    </>
  )
}
