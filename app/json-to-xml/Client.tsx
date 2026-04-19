'use client'
import ConverterTool from '@/components/ConverterTool'
import { jsonToXml } from '@/lib/converters'

export default function Client() {
  return (
    <ConverterTool
      title="JSON to XML"
      inputLabel="Input JSON"
      outputLabel="Output XML"
      inputPlaceholder='{"name": "John", "age": 30}'
      convert={jsonToXml}
      inputLang="json"
      outputLang="xml"
      toolName="json_to_xml"
    />
  )
}
