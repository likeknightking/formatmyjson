import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — FormatMyJSON.com',
  description: 'Learn about FormatMyJSON.com, a free JSON formatter and developer toolkit built by developers for developers.',
  alternates: { canonical: 'https://formatmyjson.com/about' },
}

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-white hover:text-zinc-300">{'{ }'} JSON Formatter</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">About FormatMyJSON.com</h1>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">What We Do</h2>
            <p>FormatMyJSON.com is a free online developer toolkit for working with JSON and structured data. Our tools include a JSON formatter and validator, XML formatter, format converters (JSON to XML, YAML, CSV, and back), and Base64 encoding and decoding utilities. Everything runs in your browser using the Monaco Editor engine, the same code editor that powers Visual Studio Code.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Why We Built This</h2>
            <p>Developers spend a surprising amount of time formatting, validating, and converting data between formats. We built FormatMyJSON.com because these tasks should be instant, private, and free of distractions. Too many existing tools are cluttered with ads that cover the workspace, require pasting sensitive API response data into unknown servers, or lack the features developers actually need like tree views, key sorting, and format conversion.</p>
            <p className="mt-3">Built by developers for developers, this tool focuses on speed, privacy, and a professional editing experience. Your data never leaves your browser, and the Monaco Editor provides the same keyboard shortcuts and syntax highlighting you are used to from VS Code.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Our Technology</h2>
            <p>FormatMyJSON.com is built with Next.js, React, and Tailwind CSS. The code editor is powered by Monaco Editor, providing syntax highlighting, bracket matching, error markers, and intelligent formatting. All parsing, validation, and conversion logic runs entirely in the browser using native JavaScript APIs. The application is statically optimized for fast page loads.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Our Other Free Tools</h2>
            <p>FormatMyJSON.com is part of a suite of free online tools built with the same philosophy of simplicity, privacy, and speed:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><a href="https://loancalcemi.com" className="text-cyan-400 hover:underline">LoanCalcEMI.com</a> — EMI calculator with amortization schedules for all loan types</li>
              <li><a href="https://calcinterest.com" className="text-cyan-400 hover:underline">CalcInterest.com</a> — Compound interest calculator with growth charts and inflation adjustment</li>
              <li><a href="https://passwordmake.com" className="text-cyan-400 hover:underline">PasswordMake.com</a> — Secure password and passphrase generator using the Web Crypto API</li>
              <li><a href="https://freeinvoicegen.app" className="text-cyan-400 hover:underline">FreeInvoiceGen.app</a> — Professional invoice and receipt generator with PDF export</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Contact</h2>
            <p>Have feedback, suggestions, or questions? Reach us at <strong className="text-zinc-200">contact@formatmyjson.com</strong>.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
