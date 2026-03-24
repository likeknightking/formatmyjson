import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ToolNav from '@/components/ToolNav'
import Client from './Client'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Base64 Encode — Encode Text to Base64 Online | FormatMyJSON',
  description: 'Free online Base64 encoder. Convert any text or string to Base64 encoding instantly. Supports UTF-8. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/base64-encode' },
}

const faqs = [
  { q: 'Is Base64 the same as encryption?', a: 'No. Base64 is an encoding scheme, not encryption. It does not provide any security whatsoever — anyone can decode a Base64 string back to the original data without a key or password. Never use Base64 to protect sensitive information. For security, use proper encryption algorithms like AES or RSA.' },
  { q: 'Does this tool support UTF-8 characters?', a: 'Yes. This encoder properly handles UTF-8 text including emojis, accented characters (like e with acute), Chinese, Japanese, Korean characters, Arabic, Cyrillic, and all other Unicode code points. The text is first converted to UTF-8 bytes before Base64 encoding.' },
  { q: 'What is the Base64 alphabet?', a: 'Standard Base64 uses 64 characters: uppercase A-Z (26 characters), lowercase a-z (26 characters), digits 0-9 (10 characters), plus (+) and forward slash (/). The equals sign (=) is used for padding when the input length is not a multiple of 3 bytes. URL-safe Base64 replaces + with - and / with _ to avoid issues in URLs.' },
  { q: 'Why does Base64 output always end with = signs?', a: 'The padding character (=) is added to make the output length a multiple of 4 characters. Base64 processes input in 3-byte groups, producing 4 output characters each. If the input is not a multiple of 3 bytes, 1 or 2 padding characters are added. Some modern implementations omit padding since the decoder can infer the original length.' },
  { q: 'How much larger is Base64 than the original?', a: 'Base64 encoding increases the data size by approximately 33%. Every 3 bytes of input become 4 bytes of output. For example, a 3 KB file becomes approximately 4 KB when Base64 encoded. This overhead is the tradeoff for being able to represent binary data as safe ASCII text.' },
  { q: 'Can I encode binary files like images?', a: 'This tool encodes text input to Base64. For encoding binary files (images, PDFs, archives), you would need to read the file as binary data first. In a web context, you can use the FileReader API with readAsDataURL to get a Base64 data URI directly from a file input.' },
  { q: 'What is a Base64 data URI?', a: 'A data URI embeds Base64-encoded data directly in HTML or CSS using the format data:[mediatype];base64,[encoded-data]. For example, you can embed a small PNG image in an HTML img tag without a separate HTTP request. This is useful for icons and small assets to reduce the number of network requests.' },
  { q: 'Is my data sent to a server?', a: 'No. The encoding happens entirely in your browser using the built-in btoa function and TextEncoder API. Your text never leaves your machine. This makes the tool safe for encoding sensitive strings like API tokens or configuration values.' },
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
            <h2 className="text-3xl font-bold text-white mb-2">Base64 Encoder</h2>
            <p className="text-zinc-400 text-sm">Encode any text to Base64 instantly. Supports UTF-8 characters.</p>
          </div>
          <Client />
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">What is Base64 Encoding?</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Base64 is a binary-to-text encoding scheme that converts binary data into a string of printable ASCII characters. It was originally designed to allow binary data to be transmitted over channels that only support text, such as email (MIME) and early HTTP implementations. Today, Base64 is used extensively in web development, APIs, and data serialization.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                The encoding works by taking every 3 bytes (24 bits) of input and splitting them into four 6-bit groups. Each 6-bit value maps to one of 64 printable ASCII characters (A-Z, a-z, 0-9, + and /). If the input length is not a multiple of 3, padding characters (=) are added to the output. This process is deterministic and reversible — the same input always produces the same output, and the output can always be decoded back to the original.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Common Uses of Base64 Encoding</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Embedding images in HTML and CSS is one of the most visible uses of Base64 on the web. Data URIs allow small images (icons, logos, decorative elements) to be inlined directly in markup or stylesheets, eliminating the need for additional HTTP requests. This can improve page load performance for small assets, though it increases the HTML file size by about 33%.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Email attachments use Base64 encoding through the MIME standard. When you attach a PDF, image, or any binary file to an email, the email client encodes it as Base64 text so it can travel through SMTP servers that only handle ASCII. The recipient's email client then decodes the Base64 back to the original binary file.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                API authentication frequently uses Base64 as well. HTTP Basic Authentication encodes the username and password as a Base64 string in the Authorization header. JSON Web Tokens (JWTs) use Base64URL encoding for their header and payload segments. Many API keys and secrets are also transmitted as Base64-encoded strings to avoid issues with special characters in HTTP headers and URL parameters.
              </p>
            </section>

            <AdSlot slot="7788990011" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Base64 Encoding and Character Sets</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                A critical detail that trips up many developers is the relationship between text encoding and Base64. Base64 operates on raw bytes, not characters. Before you can Base64-encode a text string, you must first encode that string into bytes using a character encoding like UTF-8. Different character encodings produce different bytes for the same text, resulting in different Base64 output.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                This tool uses UTF-8 encoding by default, which is the standard for the modern web and correctly handles all Unicode characters. If you are working with systems that use other encodings (like ISO-8859-1 or Windows-1252), be aware that encoding the same text in a different character set before Base64 will produce different results that may not decode correctly if the receiver expects UTF-8.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Base64 vs. URL-Safe Base64</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Standard Base64 uses the characters + and / which have special meaning in URLs (+ represents a space in query strings, and / is a path separator). URL-safe Base64 (also called Base64URL) replaces these with - and _ respectively, making the encoded string safe to use in URLs, filenames, and other contexts where + and / could cause problems.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                JSON Web Tokens (JWTs) use Base64URL encoding for exactly this reason — the token needs to be safely transmitted in HTTP headers and URL query parameters. If you are encoding data for use in URLs, you should convert the standard Base64 output from this tool by replacing + with - and / with _, and optionally removing the trailing = padding characters.
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
