import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — FormatMyJSON.com',
  description: 'Terms of service for FormatMyJSON.com. Understand the terms and conditions for using our free JSON formatting and developer tools.',
  alternates: { canonical: 'https://formatmyjson.com/terms' },
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-white hover:text-zinc-300">{'{ }'} JSON Formatter</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-zinc-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Acceptance of Terms</h2>
            <p>By accessing and using FormatMyJSON.com (&quot;the site&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use this site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Description of Service</h2>
            <p>FormatMyJSON.com provides free online tools for formatting, validating, minifying, and converting JSON and other data formats including XML, YAML, CSV, and Base64. These tools are intended for development and productivity purposes. All processing happens entirely in your browser.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Disclaimer of Warranties</h2>
            <p>All tools and output are provided <strong className="text-zinc-200">&quot;as is&quot;</strong> and <strong className="text-zinc-200">&quot;as available&quot;</strong> without warranties of any kind, either express or implied. While we strive for accuracy, we do not warrant that the formatting, validation, or conversion results are error-free or suitable for any particular purpose. Always verify converted data before using it in production systems.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Limitation of Liability</h2>
            <p>FormatMyJSON.com and its operators shall not be liable for any damages arising from the use of or inability to use this site or its tools. This includes, but is not limited to, data loss, corruption, or any consequences resulting from relying on the output of our tools. You use the tools at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Intellectual Property</h2>
            <p>All content on this site, including text, graphics, logos, code, and design, is the property of FormatMyJSON.com and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without prior written permission. The data you input into our tools remains your property.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">User Responsibilities</h2>
            <p>You agree to use this site only for lawful purposes. You are responsible for the content of any data you input into our tools. You agree not to attempt to disrupt, overload, or interfere with the proper functioning of the site. Do not input sensitive credentials, API keys, or personal data into the tools unless you understand that all processing is local to your browser.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Modifications to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the site following any changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Contact</h2>
            <p>If you have any questions about these terms, please contact us at <strong className="text-zinc-200">contact@formatmyjson.com</strong>.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
