import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — FormatMyJSON.com',
  description: 'Privacy policy for FormatMyJSON.com. Learn how we handle your data, our use of cookies, Google AdSense, and Google Analytics.',
  alternates: { canonical: 'https://formatmyjson.com/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-white hover:text-zinc-300">{'{ }'} JSON Formatter</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Overview</h2>
            <p>FormatMyJSON.com (&quot;we,&quot; &quot;our,&quot; or &quot;the site&quot;) provides free online developer tools for formatting, validating, and converting JSON and other data formats. We are committed to protecting your privacy. This policy explains what data is collected when you use our site and how it is used.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Data We Collect</h2>
            <p>All formatting, validation, and conversion operations run entirely in your browser using JavaScript and the Monaco Editor engine. No JSON data, code, or input you provide is transmitted to our servers or any third party. We do not require registration, and we do not collect personal information such as your name, email address, or phone number.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Cookies and Advertising</h2>
            <p>We use <strong className="text-zinc-200">Google AdSense</strong> to display advertisements on this site. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to this site or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.</p>
            <p className="mt-3">You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies by visiting the <a href="https://optout.networkadvertising.org/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.</p>
            <p className="mt-3">Third-party vendors, including Google, use cookies to serve ads based on your prior visits. These cookies do not contain personally identifiable information but may track browsing patterns across websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Google Analytics</h2>
            <p>We use Google Analytics to understand how visitors interact with our site. Google Analytics collects information such as how often users visit the site, what pages they view, and what other sites they visited prior to coming here. We use this information solely to improve our tools and user experience. Google&apos;s ability to use and share information collected by Google Analytics is governed by the <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Local Storage</h2>
            <p>Our tools may use your browser&apos;s localStorage to save your preferences such as indentation style or editor settings. This data is stored only on your device and is never transmitted to our servers. You can clear this data at any time through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Third-Party Links</h2>
            <p>Our site may contain links to other websites. We are not responsible for the privacy practices of other sites. We encourage you to review the privacy policy of every site you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">GDPR Compliance</h2>
            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Since our tools do not collect or store personal data on our servers, there is typically no personal data for us to provide, modify, or delete. However, you can control cookie preferences through your browser settings and opt out of Google&apos;s personalized advertising as described above. For any GDPR-related inquiries, please contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Children&apos;s Privacy</h2>
            <p>Our site is not directed to children under the age of 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-3">Contact</h2>
            <p>If you have any questions about this privacy policy, please contact us at <strong className="text-zinc-200">contact@formatmyjson.com</strong>.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
