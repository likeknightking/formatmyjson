import type { Metadata } from 'next'
import SubToolPage from '@/components/SubToolPage'
import Client from './Client'

export const metadata: Metadata = {
  title: 'JSON to XML Converter — Convert JSON to XML Online | FormatMyJSON',
  description: 'Free online JSON to XML converter. Paste JSON and get properly formatted XML instantly. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/json-to-xml' },
}

export default function Page() {
  return (
    <SubToolPage
      title="JSON to XML Converter"
      subtitle="Paste JSON and convert it to well-formatted XML instantly."
      seoContent={{
        heading: 'How JSON to XML Conversion Works',
        text: 'JSON and XML are both popular data interchange formats. JSON uses key-value pairs and arrays, while XML uses a tag-based structure. This tool converts JSON objects into XML elements, with object keys becoming tag names and values becoming tag content. Arrays are represented as repeated elements.',
      }}
      faqs={[
        { q: 'Does this tool handle nested objects?', a: 'Yes. Nested JSON objects are converted into nested XML elements with proper indentation.' },
        { q: 'What happens with arrays?', a: 'JSON arrays are converted into repeated XML elements with the same tag name.' },
      ]}
    >
      <Client />
    </SubToolPage>
  )
}
