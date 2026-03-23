import JsonFormatter from '@/components/JsonFormatter'
import ToolNav from '@/components/ToolNav'
import AdSlot from '@/components/AdSlot'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'JSON Formatter & Validator',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free JSON formatter, validator, and beautifier. Supports tree view, minify, sort keys, and CSV export.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is JSON?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write, and easy for machines to parse and generate. JSON is built on two structures: a collection of key/value pairs (object) and an ordered list of values (array).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I format JSON?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paste your JSON into the input editor and click "Format". The tool will validate the JSON and produce a prettified version with proper indentation in the output editor. You can choose between 2 spaces, 4 spaces, or tab indentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common JSON syntax errors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common JSON errors are: (1) using single quotes instead of double quotes for strings and keys, (2) trailing commas after the last item in an object or array, (3) missing closing brackets or braces, (4) unquoted property keys, and (5) using undefined or NaN as values (not valid in JSON).',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "minify JSON" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minifying JSON removes all unnecessary whitespace (spaces, newlines, tabs) to produce the smallest possible valid JSON string. This reduces file size and is typically used before sending JSON over a network or storing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my JSON data safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All formatting and validation happens entirely in your browser using JavaScript. Your JSON data is never sent to any server. This tool has no backend processing your input.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <h2 className="text-3xl font-bold text-white mb-2">JSON Formatter & Validator</h2>
            <p className="text-zinc-400">Format, validate, minify, and explore JSON. 100% client-side — your data never leaves the browser.</p>
          </div>

          <JsonFormatter />

          {/* Ad — between tool and SEO content */}
          <AdSlot slot="5566778899" format="horizontal" />

          {/* SEO Content */}
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">What is JSON?</h2>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200">JSON (JavaScript Object Notation)</strong> is the most widely used data interchange format on the web. Originally derived from JavaScript, it is now language-independent and supported natively by virtually every programming language and API.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                JSON has two fundamental structures: <strong className="text-zinc-200">objects</strong> (key-value pairs wrapped in <code className="text-cyan-400 bg-zinc-800 px-1 rounded">{'{ }'}</code>) and <strong className="text-zinc-200">arrays</strong> (ordered lists wrapped in <code className="text-cyan-400 bg-zinc-800 px-1 rounded">[ ]</code>). Values can be strings, numbers, booleans, null, objects, or arrays — and they can be nested arbitrarily deep.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Common JSON Syntax Errors</h2>
              <ul className="space-y-3 text-zinc-400">
                {[
                  ['Single quotes', "JSON requires double quotes. {'name': 'Alice'} → {\"name\": \"Alice\"}"],
                  ['Trailing comma', 'A comma after the last item is invalid. [1, 2, 3,] → [1, 2, 3]'],
                  ['Unquoted keys', 'Keys must be quoted. {name: "Alice"} → {"name": "Alice"}'],
                  ['Missing brackets', 'Every { must have a matching }, every [ a matching ].'],
                  ['Invalid values', 'undefined, NaN, and functions are not valid JSON values.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0">✗</span>
                    <span><strong className="text-zinc-200">{title}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* In-article ad */}
            <AdSlot slot="9988776655" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqJsonLd.mainEntity.map(faq => (
                  <div key={faq.name}>
                    <h3 className="text-lg font-semibold text-zinc-200">{faq.name}</h3>
                    <p className="text-zinc-400 leading-relaxed mt-1">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>

        <footer className="border-t border-zinc-800 mt-16 py-8 text-center">
          <p className="text-zinc-600 text-sm">JSON Formatter — Free online JSON tool. No sign-up required.</p>
        </footer>
      </div>
    </>
  )
}
