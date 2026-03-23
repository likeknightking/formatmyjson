import type { Metadata } from 'next'
import SubToolPage from '@/components/SubToolPage'
import Client from './Client'

export const metadata: Metadata = {
  title: 'JSON to YAML Converter — Convert JSON to YAML Online | FormatMyJSON',
  description: 'Free online JSON to YAML converter. Paste JSON and get clean YAML output instantly. Perfect for Kubernetes, Docker, and CI/CD configs.',
  alternates: { canonical: 'https://formatmyjson.com/json-to-yaml' },
}

export default function Page() {
  return (
    <SubToolPage
      title="JSON to YAML Converter"
      subtitle="Convert JSON to YAML for Kubernetes, Docker Compose, CI/CD configs, and more."
      seoContent={{
        heading: 'When to Use YAML Instead of JSON',
        text: 'YAML is the preferred format for configuration files in DevOps tools like Kubernetes, Docker Compose, GitHub Actions, and Ansible. Unlike JSON, YAML supports comments, is more human-readable, and uses indentation instead of braces. This tool converts JSON data into clean YAML with proper indentation.',
      }}
      faqs={[
        { q: 'Is YAML compatible with JSON?', a: 'Yes, YAML is a superset of JSON. Any valid JSON document is also valid YAML. However, YAML offers additional features like comments and anchors.' },
        { q: 'How are arrays converted?', a: 'JSON arrays are converted to YAML lists using the dash (-) prefix notation.' },
      ]}
    >
      <Client />
    </SubToolPage>
  )
}
