'use client'

import { useState, useCallback, useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Code2, GitBranch } from 'lucide-react'
import {
  validateJSON, formatJSON, minifyJSON, buildTree,
  FormatOptions, ValidationResult,
} from '@/lib/json-engine'
import Toolbar from './Toolbar'
import ErrorBanner from './ErrorBanner'
import TreeView from './TreeView'
import AdSlot from './AdSlot'

const Editor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-zinc-900 rounded-xl border border-zinc-700 flex items-center justify-center">
      <div className="space-y-2 w-full px-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 bg-zinc-800 rounded animate-pulse" style={{ width: `${60 + Math.random() * 35}%`, marginLeft: `${i % 3 === 0 ? 0 : i % 3 === 1 ? 16 : 32}px` }} />
        ))}
      </div>
    </div>
  ),
})

const SAMPLE = `{
  "name": "JSON Formatter",
  "version": "1.0.0",
  "features": ["format", "validate", "minify", "tree view"],
  "free": true,
  "author": null
}`

export default function JsonFormatter() {
  const [input, setInput] = useState(SAMPLE)
  const [output, setOutput] = useState('')
  const [options, setOptions] = useState<FormatOptions>({ indent: 2, sortKeys: false })
  const [validation, setValidation] = useState<ValidationResult | null>(null)
  const [view, setView] = useState<'code' | 'tree'>('code')
  const outputRef = useRef(output)
  outputRef.current = output

  const validate = useCallback((value: string) => {
    if (!value.trim()) { setValidation(null); return }
    setValidation(validateJSON(value))
  }, [])

  function handleFormat() {
    const result = validateJSON(input)
    setValidation(result)
    if (!result.valid) return
    const formatted = formatJSON(input, options)
    setOutput(formatted)
    setView('code')
  }

  function handleMinify() {
    const result = validateJSON(input)
    setValidation(result)
    if (!result.valid) return
    setOutput(minifyJSON(input))
    setView('code')
  }

  function handleCopy() {
    navigator.clipboard.writeText(outputRef.current || input)
  }

  function handleDownload() {
    const content = outputRef.current || input
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'formatted.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleClear() {
    setInput('')
    setOutput('')
    setValidation(null)
  }

  const treeNode = useMemo(() => {
    const src = output || input
    const v = validateJSON(src)
    if (!v.valid) return null
    try { return buildTree(JSON.parse(src)) } catch { return null }
  }, [output, input])

  const canProcess = input.trim().length > 0

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <Toolbar
        canProcess={canProcess}
        options={options}
        onFormat={handleFormat}
        onMinify={handleMinify}
        onCopy={handleCopy}
        onDownload={handleDownload}
        onClear={handleClear}
        onOptionsChange={setOptions}
      />

      {/* Validation banner */}
      <ErrorBanner validation={validation} />

      {/* View toggle */}
      <div className="flex gap-1 bg-zinc-900 border border-zinc-700 rounded-xl p-1 w-fit">
        {([['code', Code2, 'Code'], ['tree', GitBranch, 'Tree']] as const).map(([key, Icon, label]) => (
          <button
            key={key}
            onClick={() => setView(key)}
            disabled={key === 'tree' && !treeNode}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors disabled:opacity-30 ${view === key ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            <Icon size={13} /> {label}
          </button>
        ))}
      </div>

      {view === 'tree' && treeNode ? (
        <TreeView node={treeNode} />
      ) : (
        /* Two-panel editor layout */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Input */}
          <div className="space-y-1.5">
            <p className="text-xs text-zinc-500 font-medium px-1">INPUT</p>
            <div className="rounded-xl overflow-hidden border border-zinc-700">
              <Editor
                height="400px"
                defaultLanguage="json"
                value={input}
                theme="vs-dark"
                onChange={v => { setInput(v ?? ''); validate(v ?? '') }}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  renderLineHighlight: 'gutter',
                  padding: { top: 12, bottom: 12 },
                }}
              />
            </div>
          </div>

          {/* Output */}
          <div className="space-y-1.5">
            <p className="text-xs text-zinc-500 font-medium px-1">OUTPUT</p>
            <div className="rounded-xl overflow-hidden border border-zinc-700">
              <Editor
                height="400px"
                defaultLanguage="json"
                value={output}
                theme="vs-dark"
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  renderLineHighlight: 'none',
                  padding: { top: 12, bottom: 12 },
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Ad — below tool (single ad, user just finished formatting) */}
      <AdSlot slot="1662964516" format="rectangle" className="mx-auto" />
    </div>
  )
}
