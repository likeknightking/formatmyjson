import type { Metadata } from 'next'
import SubToolPage from '@/components/SubToolPage'
import Client from './Client'

export const metadata: Metadata = {
  title: 'XML to JSON Converter — Convert XML to JSON Online | FormatMyJSON',
  description: 'Free online XML to JSON converter. Paste XML and get clean JSON output instantly. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/xml-to-json' },
}

export default function Page() {
  return (
    <SubToolPage
      title="XML to JSON Converter"
      subtitle="Paste XML and convert it to clean, formatted JSON instantly."
      seoContent={{
        heading: 'Why Convert XML to JSON?',
        text: 'Many modern APIs and applications use JSON instead of XML. Converting XML to JSON makes data easier to work with in JavaScript, Python, and other languages. This tool parses your XML document and produces a clean JSON representation with proper nesting and data types.',
      }}
      faqs={[
        { q: 'How are XML attributes handled?', a: 'This converter focuses on element content. Attributes are not included in the JSON output. For attribute support, consider using a full XML parsing library.' },
        { q: 'What about repeated elements?', a: 'Repeated XML elements with the same tag name are automatically converted into JSON arrays.' },
      ]}
    >
      <Client />
    </SubToolPage>
  )
}
