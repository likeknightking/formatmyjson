import type { Metadata } from 'next'
import SubToolPage from '@/components/SubToolPage'
import Client from './Client'

export const metadata: Metadata = {
  title: 'JSON to CSV Converter — Convert JSON to CSV Online | FormatMyJSON',
  description: 'Free online JSON to CSV converter. Convert JSON arrays to downloadable CSV files instantly. Perfect for spreadsheets and data analysis.',
  alternates: { canonical: 'https://formatmyjson.com/json-to-csv' },
}

export default function Page() {
  return (
    <SubToolPage
      title="JSON to CSV Converter"
      subtitle="Convert JSON arrays into CSV format for Excel, Google Sheets, and data analysis."
      seoContent={{
        heading: 'Converting JSON Data to CSV',
        text: 'CSV (Comma-Separated Values) is the universal format for tabular data. Converting JSON arrays to CSV makes data easy to import into Excel, Google Sheets, databases, and data analysis tools. This tool extracts all unique keys from your JSON array and creates properly escaped CSV output.',
      }}
      faqs={[
        { q: 'What JSON structure works with this tool?', a: 'The input must be a JSON array of objects, like [{"name": "John", "age": 30}]. Each object becomes a row, and each key becomes a column.' },
        { q: 'How are special characters handled?', a: 'Values containing commas, double quotes, or newlines are automatically escaped according to the CSV standard (RFC 4180).' },
      ]}
    >
      <Client />
    </SubToolPage>
  )
}
