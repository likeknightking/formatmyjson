import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import ToolNav from '@/components/ToolNav'
import Client from './Client'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Base64 Decode — Decode Base64 to Text Online | FormatMyJSON',
  description: 'Free online Base64 decoder. Convert Base64 encoded strings back to plain text instantly. Supports UTF-8. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/base64-decode' },
}

const faqs = [
  { q: 'What if my Base64 string is invalid?', a: 'The tool displays a clear error message if the input is not valid Base64. Common issues include trailing whitespace, missing padding (= signs), line breaks within the encoded string, or non-Base64 characters. Remove any extraneous characters and try again.' },
  { q: 'Can I decode Base64 images with this tool?', a: 'This tool decodes Base64 to text output only. If your Base64 string represents a binary file like a PNG or JPEG, the decoded bytes will appear as garbled text. For image decoding, you need a tool that interprets the binary data as an image format, or you can use an HTML img tag with a data URI.' },
  { q: 'How do I decode a JWT (JSON Web Token)?', a: 'A JWT consists of three Base64URL-encoded segments separated by dots. You can paste each segment individually into this tool to see the decoded JSON. Note that JWTs use URL-safe Base64 (with - and _ instead of + and /), which this decoder handles correctly. The third segment is a binary signature and will not produce readable text.' },
  { q: 'Does this handle URL-safe Base64?', a: 'Yes. The decoder accepts both standard Base64 (using + and /) and URL-safe Base64 (using - and _). It automatically detects the variant and decodes accordingly. Padding characters (=) are optional — the decoder can infer the original data length without them.' },
  { q: 'Why does my decoded text look like garbage?', a: 'If the decoded output appears as random characters, the original data is likely binary (an image, compressed file, or encrypted data) rather than text. Base64 can encode any type of data, not just text. Only text data will produce readable output when decoded in this tool.' },
  { q: 'What character encoding is used for decoding?', a: 'The tool decodes to UTF-8 text by default, which correctly handles ASCII, European characters, CJK characters, emojis, and all other Unicode code points. If the original data was encoded using a different character set (like ISO-8859-1), some characters may not display correctly.' },
  { q: 'Can I decode Base64-encoded JSON or XML?', a: 'Absolutely. This is a common use case — many APIs transmit JSON or XML payloads as Base64-encoded strings within a larger message. Paste the Base64 string here to decode it, then use the JSON Formatter or XML Formatter tools on this site to beautify the decoded output.' },
  { q: 'Is my data private when using this tool?', a: 'Yes. All decoding happens entirely in your browser using the built-in atob function and TextDecoder API. The Base64 string you paste is never transmitted to any server. This is important because Base64-encoded strings often contain API credentials, tokens, or other sensitive data that should not be exposed.' },
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
            <div className="text-lg font-bold text-white">{'{ }'} JSON Formatter</div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <ToolNav />
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Base64 Decoder</h1>
            <p className="text-zinc-400 text-sm">Decode Base64 strings back to plain text instantly. Supports UTF-8.</p>
          </div>
          <Client />
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">How Base64 Decoding Works</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Base64 decoding is the reverse of the encoding process. It takes a string of ASCII characters from the Base64 alphabet (A-Z, a-z, 0-9, +, /) and converts them back into the original binary data. Each group of 4 Base64 characters represents 3 bytes of original data. The decoder maps each character back to its 6-bit value, concatenates the bits, and splits them into 8-bit bytes.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Padding characters (=) at the end of the Base64 string indicate that the original data was not a multiple of 3 bytes. One = means the last group had 2 bytes (16 bits, padded to 18 bits for 3 Base64 characters), and == means the last group had just 1 byte (8 bits, padded to 12 bits for 2 Base64 characters). Modern decoders can often handle missing padding by inferring the original length from the string length.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">When You Need to Decode Base64</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Debugging API responses is one of the most common reasons to decode Base64. Many APIs return payloads, tokens, or embedded data as Base64-encoded strings. For example, when inspecting a JSON Web Token (JWT), you need to decode the header and payload segments to see the claims, expiration time, and other metadata stored inside the token.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Email debugging is another frequent use case. SMTP transmits attachments and sometimes even the email body as Base64-encoded MIME parts. When troubleshooting email delivery issues, decoding these parts reveals the actual content. Similarly, some email APIs (like Gmail's API) return message bodies as Base64-encoded strings that need to be decoded before reading.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Configuration and infrastructure work often involves Base64 as well. Kubernetes Secrets store values as Base64-encoded strings. AWS Lambda environment variables, Azure Key Vault responses, and many CI/CD pipeline outputs use Base64 encoding. Being able to quickly decode these values is essential for verifying that configurations are correct.
              </p>
            </section>

            <AdSlot slot="8036801172" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Decoding Base64 in Different Contexts</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                In web browsers, JavaScript provides the atob() function for decoding standard Base64 strings. However, atob() only works with ASCII-safe data. For UTF-8 text that was Base64-encoded, you need an additional step: decode the Base64 to binary, then interpret the binary as UTF-8 using the TextDecoder API. This tool handles that two-step process automatically.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                In command-line environments, most systems include a base64 command. On macOS and Linux, you can pipe Base64 text into the command with the decode flag. In Python, the base64 module provides b64decode and urlsafe_b64decode functions. In Node.js, Buffer.from(string, 'base64') converts a Base64 string to a Buffer that can be converted to UTF-8 text. Understanding these alternatives helps when you need to automate decoding in scripts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Common Base64 Decoding Errors and How to Fix Them</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                The most frequent error is "invalid character in Base64 string." This usually happens when the string contains line breaks (common in PEM certificates and MIME-encoded emails), leading or trailing whitespace, or URL-safe characters (- and _) when the decoder expects standard Base64. Remove line breaks and whitespace before decoding, or ensure you are using the correct Base64 variant.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Another common issue is corrupted output caused by incorrect encoding assumptions. If you decode a Base64 string and get garbled text, the original data might have been encoded with a different character set than UTF-8 (such as ISO-8859-1 or Windows-1252), or the original data might be binary rather than text. Try adjusting the character encoding interpretation or verify that the source data is actually text.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Truncated Base64 strings are another source of errors. If a Base64 string was cut off during copy-paste (perhaps from a log file with line length limits), the decoder will either fail or produce corrupted output. Always verify that you have captured the complete Base64 string, including any padding characters at the end.
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
      </div>
    </>
  )
}
