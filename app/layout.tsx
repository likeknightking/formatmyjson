import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.formatmyjson.com'),
  title: 'JSON Formatter & Validator — Format, Validate and Beautify JSON Online',
  description:
    'Free online JSON formatter and validator. Paste your JSON to instantly format, beautify, validate, and view as a collapsible tree. Powered by Monaco Editor.',
  openGraph: {
    title: 'JSON Formatter — Free Online Tool',
    description: 'Format, validate, and beautify JSON instantly. Built with Monaco Editor.',
    type: 'website',
    url: 'https://www.formatmyjson.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Formatter & Validator',
    description: 'Format and validate JSON online. Free, fast, no sign-up.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased min-h-screen`}>
        {children}
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
