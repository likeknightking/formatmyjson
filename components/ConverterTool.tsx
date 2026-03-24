'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, Download, ArrowRight, Trash2 } from 'lucide-react'
import AdSlot from './AdSlot'

interface Props {
  title: string
  inputLabel: string
  outputLabel: string
  inputPlaceholder: string
  convert: (input: string) => string
  inputLang?: string
  outputLang?: string
}

export default function ConverterTool({
  title, inputLabel, outputLabel, inputPlaceholder, convert, inputLang, outputLang,
}: Props) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleConvert = useCallback(() => {
    if (!input.trim()) {
      setError('Please enter some content to convert.')
      setOutput('')
      return
    }
    try {
      const result = convert(input)
      setOutput(result)
      setError('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Conversion failed')
      setOutput('')
    }
  }, [input, convert])

  const handleCopy = useCallback(async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { /* clipboard not available */ }
  }, [output])

  const handleDownload = useCallback(() => {
    if (!output) return
    const ext = outputLang === 'xml' ? 'xml' : outputLang === 'yaml' ? 'yaml' : outputLang === 'csv' ? 'csv' : 'txt'
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `converted.${ext}`
    a.click()
    URL.revokeObjectURL(url)
  }, [output, outputLang])

  return (
    <div className="space-y-4">
      {/* Toolbar — identical to main page */}
      <div className="flex flex-wrap items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 shadow-sm">
        <button
          onClick={handleConvert}
          className="flex items-center gap-2 px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          <ArrowRight size={14} /> Convert
        </button>
        <div className="w-px h-6 bg-zinc-700" />
        <button
          onClick={handleCopy}
          disabled={!output}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 text-sm rounded-lg border border-zinc-700 transition-colors"
        >
          {copied ? <><Check size={14} className="text-green-400" /> Copied!</> : <><Copy size={14} /> Copy</>}
        </button>
        <button
          onClick={handleDownload}
          disabled={!output}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 text-sm rounded-lg border border-zinc-700 transition-colors"
        >
          <Download size={14} /> Download
        </button>
        <button
          onClick={() => { setInput(''); setOutput(''); setError('') }}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm rounded-lg border border-zinc-700 transition-colors ml-auto"
        >
          <Trash2 size={14} /> Clear
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Editor panels — wrapped in card like main page */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        {/* Input */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-800">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">{inputLabel}</span>
            <span className="text-[10px] text-zinc-600">{input.length} chars</span>
          </div>
          <textarea
            className="flex-1 min-h-[400px] bg-transparent p-4 font-mono text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none resize-none"
            placeholder={inputPlaceholder}
            value={input}
            onChange={e => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-800">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">{outputLabel}</span>
            <span className="text-[10px] text-zinc-600">{output.length} chars</span>
          </div>
          <textarea
            className="flex-1 min-h-[400px] bg-transparent p-4 font-mono text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none resize-none"
            placeholder="Result will appear here..."
            value={output}
            readOnly
          />
        </div>
      </div>

      {/* Ad after tool */}
      <AdSlot slot="7757599577" format="horizontal" />
    </div>
  )
}
