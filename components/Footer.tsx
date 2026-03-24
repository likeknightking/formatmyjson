import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-16 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-zinc-500 hover:text-zinc-300">JSON Formatter</Link></li>
              <li><Link href="/xml-formatter" className="text-zinc-500 hover:text-zinc-300">XML Formatter</Link></li>
              <li><Link href="/json-to-xml" className="text-zinc-500 hover:text-zinc-300">JSON to XML</Link></li>
              <li><Link href="/xml-to-json" className="text-zinc-500 hover:text-zinc-300">XML to JSON</Link></li>
              <li><Link href="/json-to-yaml" className="text-zinc-500 hover:text-zinc-300">JSON to YAML</Link></li>
              <li><Link href="/json-to-csv" className="text-zinc-500 hover:text-zinc-300">JSON to CSV</Link></li>
              <li><Link href="/base64-encode" className="text-zinc-500 hover:text-zinc-300">Base64 Encode</Link></li>
              <li><Link href="/base64-decode" className="text-zinc-500 hover:text-zinc-300">Base64 Decode</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-zinc-500 hover:text-zinc-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-zinc-500 hover:text-zinc-300">Terms of Service</Link></li>
              <li><Link href="/about" className="text-zinc-500 hover:text-zinc-300">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-3">More Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://loancalcemi.com" className="text-zinc-500 hover:text-zinc-300">EMI Calculator</a></li>
              <li><a href="https://calcinterest.com" className="text-zinc-500 hover:text-zinc-300">Compound Interest Calculator</a></li>
              <li><a href="https://passwordmake.com" className="text-zinc-500 hover:text-zinc-300">Password Generator</a></li>
              <li><a href="https://freeinvoicegen.app" className="text-zinc-500 hover:text-zinc-300">Invoice Generator</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center">
          <p className="text-zinc-600 text-sm">&copy; {new Date().getFullYear()} FormatMyJSON.com. All rights reserved. Free developer tools — no sign-up required.</p>
        </div>
      </div>
    </footer>
  )
}
