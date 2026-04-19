'use client'
import ConverterTool from '@/components/ConverterTool'
import { xmlToJson } from '@/lib/converters'

export default function Client() {
  return (
    <ConverterTool
      title="XML to JSON"
      inputLabel="Input XML"
      outputLabel="Output JSON"
      inputPlaceholder='<user><name>John</name><age>30</age></user>'
      convert={xmlToJson}
      inputLang="xml"
      outputLang="json"
      toolName="xml_to_json"
    />
  )
}
