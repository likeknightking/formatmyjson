'use client'
import ConverterTool from '@/components/ConverterTool'
import { jsonToCsv } from '@/lib/converters'

export default function Client() {
  return (
    <ConverterTool
      title="JSON to CSV"
      inputLabel="Input JSON (array of objects)"
      outputLabel="Output CSV"
      inputPlaceholder='[{"name": "Alice", "email": "alice@example.com"}, {"name": "Bob", "email": "bob@example.com"}]'
      convert={jsonToCsv}
      inputLang="json"
      outputLang="csv"
      toolName="json_to_csv"
    />
  )
}
