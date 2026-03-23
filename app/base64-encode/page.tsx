import type { Metadata } from 'next'
import SubToolPage from '@/components/SubToolPage'
import Client from './Client'

export const metadata: Metadata = {
  title: 'Base64 Encode — Encode Text to Base64 Online | FormatMyJSON',
  description: 'Free online Base64 encoder. Convert any text or string to Base64 encoding instantly. Supports UTF-8. No sign-up required.',
  alternates: { canonical: 'https://formatmyjson.com/base64-encode' },
}

export default function Page() {
  return (
    <SubToolPage
      title="Base64 Encoder"
      subtitle="Encode any text to Base64 instantly. Supports UTF-8 characters."
      seoContent={{
        heading: 'What is Base64 Encoding?',
        text: 'Base64 is a binary-to-text encoding scheme that represents binary data as an ASCII string. It is commonly used to embed images in HTML/CSS (data URIs), encode email attachments (MIME), pass data in URLs and APIs, and store binary data in JSON or XML. This tool encodes text to Base64 using UTF-8 encoding, supporting all international characters.',
      }}
      faqs={[
        { q: 'Is Base64 encryption?', a: 'No. Base64 is encoding, not encryption. It does not provide any security — anyone can decode Base64 back to the original text. Do not use it to protect sensitive data.' },
        { q: 'Does this support UTF-8?', a: 'Yes. This tool properly encodes UTF-8 text including emojis, accented characters, and CJK characters.' },
      ]}
    >
      <Client />
    </SubToolPage>
  )
}
