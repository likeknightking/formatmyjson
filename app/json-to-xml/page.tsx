import type { Metadata } from 'next'
import ToolNav from '@/components/ToolNav'
import Client from './Client'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'JSON to XML Converter — Convert JSON to XML Online | FormatMyJSON',
  description: 'Free online JSON to XML converter. Paste JSON and get properly formatted XML instantly. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/json-to-xml' },
}

const faqs = [
  { q: 'Does this tool handle nested JSON objects?', a: 'Yes. Nested JSON objects are recursively converted into nested XML elements with proper indentation at each level. The resulting XML mirrors the hierarchy of your original JSON, no matter how deeply nested it is.' },
  { q: 'What happens with JSON arrays?', a: 'JSON arrays are converted into repeated XML elements sharing the same tag name. For example, an array under the key "items" produces multiple <item> child elements. This is the standard convention for representing lists in XML.' },
  { q: 'How are JSON null values represented in XML?', a: 'Null values are represented as empty XML elements. For instance, a key "middleName" with a null value becomes <middleName/>. This preserves the presence of the field while indicating the absence of a value.' },
  { q: 'Can I specify a custom root element name?', a: 'By default, the converter wraps the output in a <root> element. Some implementations allow you to customize this. If your JSON is already a single top-level object, each key becomes a direct child of the root element.' },
  { q: 'Is the conversion reversible?', a: 'In most cases, yes. You can take the generated XML and convert it back to JSON using the XML to JSON tool on this site. However, some nuances like attribute handling or mixed content may not round-trip perfectly because JSON and XML have different data models.' },
  { q: 'How are special characters handled during conversion?', a: 'Characters that are reserved in XML (such as <, >, &, and quotes) are automatically escaped using XML entities. This ensures the generated XML is always well-formed and safe to embed in other XML documents.' },
  { q: 'Does this tool support JSON with numeric keys?', a: 'XML element names cannot start with a number, so numeric keys are prefixed with an underscore or a descriptive tag to produce valid XML. The tool handles this automatically so you always get well-formed output.' },
  { q: 'Is my data sent to a server?', a: 'No. All conversion happens entirely in your browser using client-side JavaScript. Your JSON data never leaves your machine, making this tool safe for proprietary or sensitive data.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Page() {
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
            <h2 className="text-2xl font-bold text-zinc-100 mb-2">JSON to XML Converter</h2>
            <p className="text-zinc-400 text-sm">Paste JSON and convert it to well-formatted XML instantly.</p>
          </div>
          <Client />
          <article className="mt-16 space-y-8 max-w-3xl mx-auto">
            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">How JSON to XML Conversion Works</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                JSON (JavaScript Object Notation) and XML (eXtensible Markup Language) are the two most widely used formats for structured data exchange. While JSON has become the dominant format for modern REST APIs and web applications, XML remains essential in enterprise systems, SOAP services, RSS feeds, and many government and financial data standards.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Converting JSON to XML involves mapping JSON's key-value pairs onto XML's tag-based structure. Each JSON object key becomes an XML element name, and the corresponding value becomes either element text content (for primitives) or nested child elements (for objects and arrays). This tool performs the mapping automatically, producing well-indented XML that is ready to use in any XML-based workflow.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">When You Need JSON to XML Conversion</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                There are many real-world scenarios where converting JSON to XML is necessary. If you are integrating a modern REST API with a legacy SOAP service, you will need to transform the JSON responses into XML request bodies. Many enterprise middleware platforms, such as MuleSoft, IBM Integration Bus, and Oracle SOA Suite, expect XML payloads even when upstream services produce JSON.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Regulatory and compliance contexts also demand XML. Financial reporting standards like XBRL, healthcare data standards like HL7 CDA, and government data submissions in many countries require XML formatting. If your application stores data as JSON but needs to produce compliant XML output, a reliable converter is indispensable. This tool lets you prototype and verify the conversion before writing production code.
              </p>
            </section>

            <AdSlot slot="7788990011" format="article" />

            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">Understanding the Data Model Differences</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                JSON and XML have fundamentally different data models, and understanding these differences helps you produce better conversions. JSON has a small set of data types: strings, numbers, booleans, null, arrays, and objects. XML, on the other hand, treats everything as text by default and uses schemas (XSD) to impose type constraints. This means that JSON numbers like 42 or 3.14 become text content in XML unless a schema is applied.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Another key difference is that XML supports attributes on elements, while JSON has no equivalent concept. When converting from JSON to XML, all data naturally maps to element content rather than attributes. If your target XML schema requires attributes, you may need to post-process the output or use a convention such as prefixing attribute keys with the "@" symbol in your JSON source.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">Best Practices for JSON to XML Conversion</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Start by validating your JSON input before converting. Malformed JSON will produce unexpected results or errors. Use descriptive, consistent key names in your JSON because these become your XML element names. Avoid keys with spaces or special characters, as they may need to be sanitized to produce valid XML tag names.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                When working with arrays, be aware that XML does not have a native array type. Arrays are typically represented by repeating the same element name. If you need to distinguish between a single item and an array of items, consider wrapping array items in a container element. This tool handles these conventions automatically, but understanding them helps when you move to production code.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">Frequently Asked Questions</h2>
              {faqs.map(faq => (
                <div key={faq.q} className="mb-4">
                  <h3 className="text-base font-semibold text-zinc-200">{faq.q}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-1">{faq.a}</p>
                </div>
              ))}
            </section>
          </article>
        </main>
      </div>
    </>
  )
}
