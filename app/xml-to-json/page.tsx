import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ToolNav from '@/components/ToolNav'
import Client from './Client'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'XML to JSON Converter — Convert XML to JSON Online | FormatMyJSON',
  description: 'Free online XML to JSON converter. Paste XML and get clean JSON output instantly. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/xml-to-json' },
}

const faqs = [
  { q: 'How are XML attributes handled?', a: 'This converter focuses on element content for simplicity and speed. Attributes are not included in the JSON output by default. If your workflow depends on attribute data, consider using a full XML parsing library like xml2js in Node.js, which can map attributes to special keys.' },
  { q: 'What about repeated XML elements?', a: 'Repeated XML elements with the same tag name are automatically grouped into a JSON array. For example, three <item> elements inside a <list> element become a JSON array under the key "item". This follows the most common convention for XML-to-JSON mapping.' },
  { q: 'Does this tool handle XML namespaces?', a: 'Namespace prefixes are included in element names as-is (for example, "soap:Body"). The tool does not resolve or strip namespace URIs. For most debugging and data inspection tasks, this is sufficient. For namespace-aware processing, a dedicated XML library is recommended.' },
  { q: 'What happens with CDATA sections?', a: 'CDATA content is extracted as plain text and placed into the corresponding JSON string value. The CDATA wrapper is removed since JSON does not have an equivalent concept. The text content itself is preserved exactly as written.' },
  { q: 'Can I convert large XML files?', a: 'The tool runs entirely in your browser, so performance depends on your device. XML documents up to a few megabytes convert instantly on modern hardware. For very large files (50 MB+), consider using a command-line tool or server-side script for better memory handling.' },
  { q: 'Is whitespace preserved in the output?', a: 'Insignificant whitespace (indentation between elements) is stripped during conversion to produce clean JSON. Significant whitespace inside text content is preserved. This ensures the JSON output is compact and usable without extra cleanup.' },
  { q: 'Why convert XML to JSON?', a: 'JSON is the native data format for JavaScript and is natively supported by virtually all modern programming languages. Converting XML to JSON simplifies data handling in web applications, reduces payload size, and makes it easier to work with data in frontend frameworks like React, Vue, and Angular.' },
  { q: 'Is my data private?', a: 'Yes. All parsing and conversion happens entirely in your browser. Your XML data is never uploaded to any server. This makes the tool safe for confidential documents, internal API responses, and proprietary data formats.' },
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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-lg font-bold text-white">{'{ }'} JSON Formatter</h1>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <ToolNav />
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">XML to JSON Converter</h2>
            <p className="text-zinc-400 text-sm">Paste XML and convert it to clean, formatted JSON instantly.</p>
          </div>
          <Client />
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Why Convert XML to JSON?</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                JSON has become the lingua franca of web development. Modern REST APIs, NoSQL databases like MongoDB and CouchDB, and virtually every frontend JavaScript framework work natively with JSON. Meanwhile, many enterprise systems, legacy SOAP services, and data feeds (such as RSS and Atom) still produce XML. Bridging these two worlds requires reliable conversion.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Converting XML to JSON reduces verbosity significantly. XML's opening and closing tags, attributes, and namespace declarations add substantial overhead compared to JSON's lightweight key-value syntax. A typical XML document can shrink by 30-50% when converted to equivalent JSON, resulting in faster network transmission and reduced storage costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">How the Conversion Process Works</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                The converter uses the browser's native DOMParser to parse your XML input into a document object model. It then walks the DOM tree recursively, converting each element into a JSON key-value pair. Text-only elements become string values, elements with children become nested objects, and sibling elements with the same name are grouped into arrays.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                This approach handles well-formed XML of any complexity, including deeply nested structures, mixed content, and documents with XML declarations. The output is formatted with 2-space indentation for readability, but you can copy and minify it for production use. The entire process runs in milliseconds for typical document sizes.
              </p>
            </section>

            <AdSlot slot="7788990011" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Real-World Scenarios for XML to JSON</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                API integration is the most common use case. When consuming a SOAP or XML-RPC service from a JavaScript application, converting the response to JSON lets you work with the data using standard object property access instead of cumbersome DOM traversal methods like getElementsByTagName or XPath queries.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Data migration is another frequent scenario. Organizations moving from XML-based storage to modern JSON document databases need to transform their existing data. This tool helps you prototype the mapping, verify the output structure, and catch edge cases before writing automated migration scripts. It is also useful for converting XML configuration files into JSON format for tools that prefer JSON, such as ESLint, Prettier, and tsconfig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Handling Edge Cases in XML to JSON</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Several XML features have no direct JSON equivalent, and understanding how they are handled prevents surprises. XML comments are discarded during conversion because JSON does not support comments. Processing instructions (like stylesheet declarations) are similarly omitted. If you need to preserve these, consider keeping the XML alongside the JSON output.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Mixed content elements (elements containing both text and child elements) are one of the trickiest cases. This converter extracts text nodes and child elements separately. For documents with heavy mixed content, such as XHTML or DocBook, a specialized converter with configurable mapping rules may be more appropriate than a general-purpose tool.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map(faq => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-semibold text-zinc-200">{faq.q}</h3>
                    <p className="text-zinc-400 leading-relaxed mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>
        <Footer />

        <footer className="border-t border-zinc-800 mt-16 py-8 text-center">
          <p className="text-zinc-600 text-sm">FormatMyJSON — Free developer tools. No sign-up required.</p>
        </footer>
      </div>
    </>
  )
}
