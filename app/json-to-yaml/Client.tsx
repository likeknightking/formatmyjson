'use client'
import ConverterTool from '@/components/ConverterTool'
import { jsonToYaml } from '@/lib/converters'

export default function Client() {
  return (
    <ConverterTool
      title="JSON to YAML"
      inputLabel="Input JSON"
      outputLabel="Output YAML"
      inputPlaceholder='{"apiVersion": "v1", "kind": "Pod", "metadata": {"name": "my-app"}}'
      convert={jsonToYaml}
      inputLang="json"
      outputLang="yaml"
    />
  )
}
