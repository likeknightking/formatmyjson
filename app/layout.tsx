import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

const otherMeta: Record<string, string> = {
  'google-adsense-account': 'ca-pub-7584346505499429',
}
if (process.env.NEXT_PUBLIC_SC_VERIFICATION) otherMeta['google-site-verification'] = process.env.NEXT_PUBLIC_SC_VERIFICATION
if (process.env.NEXT_PUBLIC_BING_VERIFICATION) otherMeta['msvalidate.01'] = process.env.NEXT_PUBLIC_BING_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL('https://formatmyjson.com'),
  title: 'JSON Formatter & Validator — Format, Validate and Beautify JSON Online',
  description:
    'Free online JSON formatter and validator. Paste your JSON to instantly format, beautify, validate, and view as a collapsible tree. Powered by Monaco Editor.',
  openGraph: {
    title: 'JSON Formatter — Free Online Tool',
    description: 'Format, validate, and beautify JSON instantly. Built with Monaco Editor.',
    type: 'website',
    url: 'https://formatmyjson.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Formatter & Validator',
    description: 'Format and validate JSON online. Free, fast, no sign-up.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://formatmyjson.com' },
  other: otherMeta,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased min-h-screen`}>
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
