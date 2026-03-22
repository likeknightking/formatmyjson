export interface ValidationResult {
  valid: boolean
  error?: {
    message: string
    hint: string
  }
}

export interface FormatOptions {
  indent: 2 | 4 | 'tab'
  sortKeys: boolean
}

export interface TreeNode {
  key: string
  value: unknown
  type: 'string' | 'number' | 'boolean' | 'null' | 'object' | 'array'
  children?: TreeNode[]
  path: string
}

export function validateJSON(input: string): ValidationResult {
  if (!input.trim()) return { valid: false, error: { message: 'Input is empty', hint: 'Paste your JSON above.' } }
  try {
    JSON.parse(input)
    return { valid: true }
  } catch (e) {
    const msg = (e as SyntaxError).message
    return {
      valid: false,
      error: {
        message: msg,
        hint: getHint(input, msg),
      },
    }
  }
}

function getHint(input: string, error: string): string {
  if (/single quote/i.test(error) || input.includes("'")) return 'JSON requires double quotes " around strings and keys.'
  if (/trailing comma/i.test(error) || /Unexpected token/i.test(error)) return 'Check for trailing commas — JSON does not allow a comma after the last item.'
  if (/Unexpected end/i.test(error)) return 'The JSON seems incomplete — check for missing closing } or ].'
  if (/is not valid/i.test(error)) return 'A value might be unquoted. All string values and keys must be wrapped in double quotes.'
  return 'Check your JSON syntax carefully.'
}

export function formatJSON(input: string, options: FormatOptions): string {
  const parsed = JSON.parse(input)
  const sorted = options.sortKeys ? sortKeysDeep(parsed) : parsed
  const spaces = options.indent === 'tab' ? '\t' : options.indent
  return JSON.stringify(sorted, null, spaces)
}

export function minifyJSON(input: string): string {
  return JSON.stringify(JSON.parse(input))
}

function sortKeysDeep(obj: unknown): unknown {
  if (Array.isArray(obj)) return obj.map(sortKeysDeep)
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj as object)
      .sort()
      .reduce((acc, key) => {
        acc[key] = sortKeysDeep((obj as Record<string, unknown>)[key])
        return acc
      }, {} as Record<string, unknown>)
  }
  return obj
}

export function buildTree(value: unknown, key = 'root', path = '$'): TreeNode {
  if (Array.isArray(value)) {
    return {
      key, value, type: 'array', path,
      children: value.map((item, i) => buildTree(item, String(i), `${path}[${i}]`)),
    }
  }
  if (value === null) return { key, value, type: 'null', path }
  if (typeof value === 'object') {
    return {
      key, value, type: 'object', path,
      children: Object.entries(value as object).map(([k, v]) =>
        buildTree(v, k, `${path}.${k}`)
      ),
    }
  }
  return { key, value, type: typeof value as TreeNode['type'], path }
}
