// === XML ===

export function formatXML(xml: string, indent: number = 2): string {
  const PADDING = ' '.repeat(indent)
  let formatted = ''
  let depth = 0

  // Remove existing whitespace between tags
  const clean = xml.replace(/(>)\s*(<)/g, '$1\n$2').trim()
  const lines = clean.split('\n')

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) continue

    // Closing tag
    if (line.startsWith('</')) {
      depth--
      formatted += PADDING.repeat(Math.max(0, depth)) + line + '\n'
    }
    // Self-closing tag or declaration
    else if (line.endsWith('/>') || line.startsWith('<?') || line.startsWith('<!')) {
      formatted += PADDING.repeat(depth) + line + '\n'
    }
    // Opening tag — check if it also closes on same line
    else if (line.startsWith('<') && !line.startsWith('</')) {
      // Check for inline close: <tag>content</tag>
      const inlineClose = /<[^/][^>]*>[^<]*<\/[^>]+>/.test(line)
      if (inlineClose) {
        formatted += PADDING.repeat(depth) + line + '\n'
      } else {
        formatted += PADDING.repeat(depth) + line + '\n'
        if (!line.includes('</')) depth++
      }
    } else {
      formatted += PADDING.repeat(depth) + line + '\n'
    }
  }

  return formatted.trimEnd()
}

export function minifyXML(xml: string): string {
  return xml.replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim()
}

export function validateXML(xml: string): { valid: boolean; error?: string } {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'text/xml')
  const errorNode = doc.querySelector('parsererror')
  if (errorNode) {
    return { valid: false, error: errorNode.textContent || 'Invalid XML' }
  }
  return { valid: true }
}

// === JSON ↔ XML ===

export function jsonToXml(json: string, rootName: string = 'root'): string {
  const obj = JSON.parse(json)
  return `<?xml version="1.0" encoding="UTF-8"?>\n${objectToXml(obj, rootName)}`
}

function objectToXml(obj: unknown, tagName: string, indent: number = 0): string {
  const pad = '  '.repeat(indent)

  if (obj === null || obj === undefined) {
    return `${pad}<${tagName}/>`
  }

  if (typeof obj !== 'object') {
    return `${pad}<${tagName}>${escapeXml(String(obj))}</${tagName}>`
  }

  if (Array.isArray(obj)) {
    return obj.map(item => objectToXml(item, tagName, indent)).join('\n')
  }

  const entries = Object.entries(obj as Record<string, unknown>)
  if (entries.length === 0) {
    return `${pad}<${tagName}/>`
  }

  const children = entries.map(([key, val]) => {
    let safeName = key.replace(/[^a-zA-Z0-9_-]/g, '_')
    // XML element names cannot start with a digit
    if (/^[0-9]/.test(safeName)) safeName = '_' + safeName
    return objectToXml(val, safeName, indent + 1)
  }).join('\n')

  return `${pad}<${tagName}>\n${children}\n${pad}</${tagName}>`
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function xmlToJson(xml: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'text/xml')
  const errorNode = doc.querySelector('parsererror')
  if (errorNode) throw new Error('Invalid XML')
  const result = xmlNodeToObj(doc.documentElement)
  return JSON.stringify(result, null, 2)
}

function xmlNodeToObj(node: Element): unknown {
  const obj: Record<string, unknown> = {}

  // Text-only node
  if (node.children.length === 0) {
    return node.textContent || ''
  }

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i]
    const name = child.tagName
    const value = xmlNodeToObj(child)

    if (obj[name] !== undefined) {
      if (!Array.isArray(obj[name])) {
        obj[name] = [obj[name]]
      }
      (obj[name] as unknown[]).push(value)
    } else {
      obj[name] = value
    }
  }

  return obj
}

// === Base64 ===

export function base64Encode(input: string): string {
  // Support UTF-8
  const encoder = new TextEncoder()
  const bytes = encoder.encode(input)
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

export function base64Decode(input: string): string {
  const binary = atob(input.trim())
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}

// === JSON → YAML ===

export function jsonToYaml(json: string): string {
  const obj = JSON.parse(json)
  return toYaml(obj, 0)
}

// Strings that look like YAML 1.1 booleans/null, numbers, or contain special chars
// must be quoted to prevent the "Norway problem" and similar type-coercion bugs.
function formatYamlString(value: string): string {
  const needsQuoting =
    value === '' ||
    /^(true|false|null|yes|no|on|off|y|n|~)$/i.test(value) ||
    /^-?\d+(\.\d+)?$/.test(value) ||
    /^0\d+/.test(value) ||
    /[:#\[\]{},&*!|>'"%@`]/.test(value) ||
    /^[\s]|[\s]$/.test(value) ||
    value.includes('\n')

  if (needsQuoting) {
    return `"${value
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t')
      .replace(/\r/g, '\\r')}"`
  }
  return value
}

function toYaml(value: unknown, indent: number): string {
  const pad = '  '.repeat(indent)

  if (value === null || value === undefined) return 'null'
  if (typeof value === 'boolean') return String(value)
  if (typeof value === 'number') return String(value)
  if (typeof value === 'string') return formatYamlString(value)

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    return value.map(item => {
      const converted = toYaml(item, indent + 1)
      if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
        const lines = converted.split('\n')
        return `${pad}- ${lines[0].trim()}\n${lines.slice(1).map(l => `${pad}  ${l.trim()}`).join('\n')}`
      }
      return `${pad}- ${converted}`
    }).join('\n')
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) return '{}'
    return entries.map(([key, val]) => {
      const converted = toYaml(val, indent + 1)
      if (typeof val === 'object' && val !== null) {
        return `${pad}${key}:\n${converted}`
      }
      return `${pad}${key}: ${converted}`
    }).join('\n')
  }

  return String(value)
}

// === JSON → CSV ===

// Recursively flatten an object/array into dot-notation paths so that
// nested structures map cleanly onto a flat CSV row.
function flattenForCsv(value: unknown, prefix: string, target: Record<string, unknown>): void {
  if (value === null || value === undefined) {
    target[prefix] = ''
    return
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      target[prefix] = ''
      return
    }
    value.forEach((item, i) => {
      const key = prefix ? `${prefix}.${i}` : String(i)
      flattenForCsv(item, key, target)
    })
    return
  }
  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) {
      target[prefix] = ''
      return
    }
    for (const [k, v] of entries) {
      const key = prefix ? `${prefix}.${k}` : k
      flattenForCsv(v, key, target)
    }
    return
  }
  target[prefix] = value
}

export function jsonToCsv(json: string): string {
  const data = JSON.parse(json)

  if (!Array.isArray(data)) {
    throw new Error('JSON must be an array of objects to convert to CSV')
  }

  if (data.length === 0) return ''

  // Flatten each row into dot-notation key/value pairs.
  const flatRows: Record<string, unknown>[] = data.map(item => {
    const flat: Record<string, unknown> = {}
    if (typeof item === 'object' && item !== null) {
      flattenForCsv(item, '', flat)
    }
    return flat
  })

  // Use the union of all keys across all rows, preserving first-seen order.
  const keys: string[] = []
  const seen = new Set<string>()
  for (const row of flatRows) {
    for (const k of Object.keys(row)) {
      if (!seen.has(k)) {
        seen.add(k)
        keys.push(k)
      }
    }
  }

  if (keys.length === 0) {
    throw new Error('No object keys found in the array')
  }

  const escapeCsv = (val: unknown): string => {
    const s = val === null || val === undefined ? '' : String(val)
    if (s.includes(',') || s.includes('"') || s.includes('\n')) {
      return `"${s.replace(/"/g, '""')}"`
    }
    return s
  }

  const header = keys.map(escapeCsv).join(',')
  const rows = flatRows.map(row =>
    keys.map(key => escapeCsv(row[key])).join(',')
  )

  return [header, ...rows].join('\n')
}
