import JsonFormatter from '@/components/JsonFormatter'
import ToolNav from '@/components/ToolNav'
import AdSlot from '@/components/AdSlot'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'JSON Formatter & Validator',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free JSON formatter, validator, and beautifier. Supports tree view, minify, sort keys, and CSV export.',
}

const faqs = [
  { q: 'What is JSON?', a: 'JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write, and easy for machines to parse and generate. JSON is built on two structures: a collection of key/value pairs (object) and an ordered list of values (array). It has become the standard format for APIs, configuration files, and data storage across the web.' },
  { q: 'How do I format JSON?', a: 'Paste your JSON into the input editor and click "Format". The tool validates the JSON and produces a prettified version with proper indentation in the output editor. You can choose between 2 spaces, 4 spaces, or tab indentation. The formatting is applied instantly and the result can be copied or downloaded.' },
  { q: 'What are common JSON syntax errors?', a: 'The most common JSON errors are: (1) using single quotes instead of double quotes for strings and keys, (2) trailing commas after the last item in an object or array, (3) missing closing brackets or braces, (4) unquoted property keys, and (5) using undefined or NaN as values, which are not valid in JSON.' },
  { q: 'What does minify JSON mean?', a: 'Minifying JSON removes all unnecessary whitespace — spaces, newlines, and tabs — to produce the smallest possible valid JSON string. This reduces file size and is typically used before sending JSON over a network or storing it in a database. The data remains identical; only the formatting changes.' },
  { q: 'Is my JSON data safe?', a: 'Yes. All formatting and validation happens entirely in your browser using JavaScript. Your JSON data is never sent to any server. This tool has no backend — everything runs client-side using the Monaco Editor engine (the same editor used in VS Code). Your data never leaves your machine.' },
  { q: 'What is the tree view for?', a: 'The tree view displays your JSON as a collapsible hierarchical structure, similar to how a file explorer shows folders and files. Each node shows the key name, value type (string, number, boolean, object, array), and the value itself. You can expand and collapse branches to explore large JSON documents without scrolling through thousands of lines of text.' },
  { q: 'Can I sort JSON keys alphabetically?', a: 'Yes. Toggle the "Sort Keys" option in the toolbar before formatting. This recursively sorts all object keys at every nesting level in alphabetical order. Sorting keys makes it easier to compare two JSON documents and is a common convention for configuration files and API response schemas.' },
  { q: 'What is the maximum JSON size this tool supports?', a: 'There is no hard limit. The tool runs in your browser, so performance depends on your device. JSON documents up to a few megabytes format instantly on modern hardware. For very large files (10 MB+), the Monaco Editor may take a moment to render syntax highlighting, but the formatting logic itself remains fast.' },
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

          <p className="text-zinc-400 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            Working with raw or minified JSON can be tedious and error-prone. This tool instantly formats, validates, and beautifies your JSON with proper indentation, highlights syntax errors with precise line numbers, and offers a collapsible tree view for exploring deeply nested structures. Paste your JSON below and click Format to get started.
          </p>

          <JsonFormatter />

          {/* Ad — between tool and SEO content */}
          <AdSlot slot="7757599577" format="horizontal" />

          {/* SEO Content */}
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">What is JSON and Why Does Formatting Matter?</h2>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200">JSON (JavaScript Object Notation)</strong> is the most widely used data interchange format on the web. Originally derived from JavaScript, it is now language-independent and supported natively by virtually every programming language, API framework, and database system. REST APIs, GraphQL responses, configuration files, NoSQL databases like MongoDB, and even modern log formats all rely on JSON.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                JSON has two fundamental structures: <strong className="text-zinc-200">objects</strong> (key-value pairs wrapped in <code className="text-cyan-400 bg-zinc-800 px-1 rounded">{'{ }'}</code>) and <strong className="text-zinc-200">arrays</strong> (ordered lists wrapped in <code className="text-cyan-400 bg-zinc-800 px-1 rounded">[ ]</code>). Values can be strings, numbers, booleans, null, objects, or arrays — and they can be nested arbitrarily deep. When JSON is transmitted over a network or generated by a machine, it is typically minified into a single line to save bandwidth. While efficient for machines, this compressed format is nearly impossible for humans to read or debug.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                JSON formatting (also called beautification or pretty-printing) adds consistent indentation and line breaks so that the hierarchical structure becomes immediately visible. Each nested level is indented further, making it easy to trace the relationships between parent and child elements, spot missing values, and verify the overall shape of the data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Common JSON Syntax Errors</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                JSON has a strict syntax that trips up even experienced developers. Unlike JavaScript objects, JSON does not allow trailing commas, single quotes, unquoted keys, or comments. Here are the most common mistakes this validator catches:
              </p>
              <ul className="space-y-3 text-zinc-400">
                {[
                  ['Single quotes', "JSON requires double quotes for all strings and keys. {'name': 'Alice'} is invalid — use {\"name\": \"Alice\"} instead."],
                  ['Trailing comma', 'A comma after the last item in an object or array is invalid in JSON, even though JavaScript allows it. [1, 2, 3,] must be [1, 2, 3].'],
                  ['Unquoted keys', 'Every key in a JSON object must be a double-quoted string. {name: "Alice"} is invalid — use {"name": "Alice"}.'],
                  ['Missing brackets', 'Every opening { must have a matching closing }, and every [ must have a matching ]. Deeply nested structures make this easy to miss.'],
                  ['Invalid values', 'undefined, NaN, Infinity, and functions are not valid JSON values. Use null for missing values, and strings or numbers for everything else.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0">✗</span>
                    <span><strong className="text-zinc-200">{title}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">How This JSON Formatter Works</h2>
              <p className="text-zinc-400 leading-relaxed">
                This tool is built on <strong className="text-zinc-200">Monaco Editor</strong>, the same code editing engine that powers Visual Studio Code. Monaco provides syntax highlighting, bracket matching, error markers, and keyboard shortcuts that make working with JSON feel like working in a professional IDE — directly in your browser.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                When you click Format, the tool passes your input through the native <code className="text-cyan-400 bg-zinc-800 px-1 rounded">JSON.parse()</code> function to validate it, then serializes it back with <code className="text-cyan-400 bg-zinc-800 px-1 rounded">JSON.stringify()</code> using your preferred indentation level. If parsing fails, the error message is analyzed to pinpoint the exact line and character where the syntax breaks, and a red marker is placed in the editor so you can fix it immediately.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                The tree view uses a recursive React component that walks the parsed JSON object and renders each node as a collapsible element. Clicking any node copies its JSONPath (like <code className="text-cyan-400 bg-zinc-800 px-1 rounded">$.users[0].email</code>) to your clipboard, which is useful for referencing specific values in code or documentation.
              </p>
            </section>

            {/* In-article ad */}
            <AdSlot slot="8036801172" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">JSON Formatting Best Practices</h2>
              <p className="text-zinc-400 leading-relaxed">
                Use <strong className="text-zinc-200">2-space indentation</strong> for JSON that will be read by developers or stored in version control. This is the most common convention in the JavaScript ecosystem and produces compact, readable output. Use 4-space indentation for JSON that will be printed or displayed in documentation where wider indentation improves scannability.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                When working with configuration files, <strong className="text-zinc-200">sort keys alphabetically</strong> to make it easier to find specific settings and to produce cleaner diffs in version control. Sorted keys eliminate meaningless ordering changes in pull requests. When working with data payloads, preserve the original key order since it may carry semantic meaning (such as the order of columns in a table).
              </p>
              <p className="text-zinc-400 leading-relaxed mt-3">
                Always <strong className="text-zinc-200">validate JSON before using it</strong> in production code, API calls, or configuration. A single misplaced comma or quote can cause silent failures that are difficult to debug. This tool catches every syntax error instantly, saving hours of troubleshooting downstream.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
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
      </div>
    </>
  )
}
