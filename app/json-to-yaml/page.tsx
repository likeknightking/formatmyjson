import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ToolNav from '@/components/ToolNav'
import Client from './Client'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'JSON to YAML Converter — Convert JSON to YAML Online | FormatMyJSON',
  description: 'Free online JSON to YAML converter. Paste JSON and get clean YAML output instantly. Perfect for Kubernetes, Docker, and CI/CD configs.',
  alternates: { canonical: 'https://formatmyjson.com/json-to-yaml' },
}

const faqs = [
  { q: 'Is YAML compatible with JSON?', a: 'Yes, YAML is a strict superset of JSON. Every valid JSON document is also a valid YAML document. However, YAML offers additional features like comments, anchors, aliases, and multi-line strings that JSON does not support. Converting from JSON to YAML lets you take advantage of these features.' },
  { q: 'How are arrays converted to YAML?', a: 'JSON arrays are converted to YAML sequences using the dash (-) prefix notation, with each element on its own line. Nested arrays produce deeper indentation levels. This is the standard YAML list syntax used by tools like Kubernetes and Docker Compose.' },
  { q: 'Can I add comments to the YAML output?', a: 'The converter produces clean YAML without comments, but you can freely add comments (lines starting with #) to the output after conversion. Comments are one of the main reasons developers prefer YAML over JSON for configuration files.' },
  { q: 'How does the tool handle multi-line strings?', a: 'Long string values are output as standard YAML quoted strings. If you need block scalar syntax (using | or >) for multi-line text, you can manually adjust the output. The converter prioritizes correctness and compatibility over stylistic choices.' },
  { q: 'What indentation level is used?', a: 'The output uses 2-space indentation, which is the most common convention for YAML files in Kubernetes manifests, GitHub Actions workflows, and Docker Compose files. Most YAML parsers accept any consistent indentation, so you can adjust it if needed.' },
  { q: 'Does this tool validate my JSON input?', a: 'Yes. If your JSON input is malformed (missing brackets, trailing commas, unquoted keys), the tool displays a clear error message describing the problem. Fix the JSON syntax error first, then retry the conversion.' },
  { q: 'Is my data sent to a server?', a: 'No. The conversion runs entirely in your browser using client-side JavaScript. Your data never leaves your machine, making this tool safe for sensitive configuration data, API keys (though you should avoid pasting real secrets), and proprietary schemas.' },
  { q: 'Why use YAML instead of JSON for configuration?', a: 'YAML is preferred for configuration because it supports comments (essential for documenting config choices), is less verbose (no braces or quotes for simple keys), handles multi-line strings cleanly, and is generally easier for humans to read and write. Most modern DevOps tools have adopted YAML as their primary config format.' },
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
            <h2 className="text-3xl font-bold text-white mb-2">JSON to YAML Converter</h2>
            <p className="text-zinc-400 text-sm">Convert JSON to YAML for Kubernetes, Docker Compose, CI/CD configs, and more.</p>
          </div>
          <Client />
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">When to Use YAML Instead of JSON</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                YAML (YAML Ain't Markup Language) has become the standard configuration format for the modern DevOps ecosystem. Kubernetes manifests, Docker Compose files, GitHub Actions workflows, GitLab CI pipelines, Ansible playbooks, and Helm charts all use YAML. If you work in cloud infrastructure, containers, or CI/CD, you encounter YAML daily.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                The main advantage of YAML over JSON for configuration is human readability. YAML eliminates the curly braces, square brackets, and mandatory double quotes that make JSON verbose. It uses indentation to represent structure, resulting in cleaner files that are easier to scan, edit, and review in pull requests. The ability to add comments is another decisive advantage — you can document why a particular setting was chosen, which is impossible in JSON.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">How the JSON to YAML Conversion Works</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                The converter parses your JSON input into a JavaScript object, then serializes it into YAML format. JSON objects become YAML mappings (key-value pairs separated by colons), arrays become YAML sequences (items prefixed with dashes), and primitive values (strings, numbers, booleans, null) are output with appropriate YAML syntax.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                String values that could be misinterpreted as other YAML types are automatically quoted. For example, the string "true" is quoted to prevent YAML parsers from interpreting it as a boolean, and strings like "3.14" are quoted when they should remain strings rather than floats. This attention to type safety prevents subtle bugs when the output is consumed by configuration tools.
              </p>
            </section>

            <AdSlot slot="8036801172" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Common Use Cases for JSON to YAML</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                One of the most common workflows is generating Kubernetes resource definitions. Many teams maintain their resource configurations as JSON (because it is easier to generate programmatically) and then convert to YAML for deployment. This tool lets you quickly verify that a programmatically generated JSON config produces the expected YAML structure before applying it to a cluster.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-3">
                CI/CD pipeline configuration is another frequent use case. When migrating between CI platforms (say, from a JSON-configured system to GitHub Actions or GitLab CI), you may need to convert existing JSON pipeline definitions to YAML. The converter gives you a clean starting point that you can then enhance with YAML-specific features like anchors and aliases to reduce duplication.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Documentation and prototyping also benefit from this tool. API documentation often includes JSON examples, but if your infrastructure team prefers YAML, you can quickly convert sample payloads. Similarly, when prototyping a new configuration schema, converting between JSON and YAML helps validate that the structure works correctly in both formats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">YAML Pitfalls to Watch For</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                While YAML is powerful, it has some well-known gotchas. The "Norway problem" is a classic example: the string "NO" (the country code for Norway) is interpreted as a boolean false by some YAML parsers. Similarly, version numbers like "1.0" may be parsed as floats rather than strings. This converter handles these cases by quoting ambiguous values, but you should always test your YAML with the target tool's parser.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Indentation errors in YAML can be difficult to debug because they are invisible in many text editors. Always use spaces (never tabs) for YAML indentation, and configure your editor to display whitespace characters when editing YAML files. The 2-space indent used by this converter is consistent with most community style guides and avoids the excessive nesting that 4-space indentation can produce.
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
