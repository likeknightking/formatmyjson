'use client'
import ConverterTool from '@/components/ConverterTool'
import { base64Decode } from '@/lib/converters'

export default function Client() {
  return (
    <ConverterTool
      title="Base64 Decode"
      inputLabel="Base64 Encoded"
      outputLabel="Decoded Text"
      inputPlaceholder="SGVsbG8gV29ybGQh"
      convert={base64Decode}
      inputLang="text"
      outputLang="text"
      toolName="base64_decode"
    />
  )
}
