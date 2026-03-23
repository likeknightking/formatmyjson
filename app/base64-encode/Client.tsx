'use client'
import ConverterTool from '@/components/ConverterTool'
import { base64Encode } from '@/lib/converters'

export default function Client() {
  return (
    <ConverterTool
      title="Base64 Encode"
      inputLabel="Plain Text"
      outputLabel="Base64 Encoded"
      inputPlaceholder="Enter text to encode..."
      convert={base64Encode}
      inputLang="text"
      outputLang="text"
    />
  )
}
