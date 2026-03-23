import type { Metadata } from 'next'
import SubToolPage from '@/components/SubToolPage'
import Client from './Client'

export const metadata: Metadata = {
  title: 'Base64 Decode — Decode Base64 to Text Online | FormatMyJSON',
  description: 'Free online Base64 decoder. Convert Base64 encoded strings back to plain text instantly. Supports UTF-8. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/base64-decode' },
}

export default function Page() {
  return (
    <SubToolPage
      title="Base64 Decoder"
      subtitle="Decode Base64 strings back to plain text instantly. Supports UTF-8."
      seoContent={{
        heading: 'How Base64 Decoding Works',
        text: 'Base64 decoding reverses the encoding process, converting the ASCII representation back to the original binary or text data. This is commonly needed when inspecting API responses, reading email headers, or debugging data URIs in web development. This tool decodes Base64 with full UTF-8 support.',
      }}
      faqs={[
        { q: 'What if my Base64 string is invalid?', a: 'The tool will show an error message if the input is not valid Base64. Common issues include trailing whitespace, missing padding (= signs), or non-Base64 characters.' },
        { q: 'Can I decode Base64 images?', a: 'This tool decodes Base64 to text only. For image decoding, you would need a tool that renders the binary output as an image.' },
      ]}
    >
      <Client />
    </SubToolPage>
  )
}
