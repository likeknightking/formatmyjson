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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400 uppercase tracking-wide">{inputLabel}</label>
          <textarea
            className="w-full h-[350px] bg-zinc-900 border border-zinc-700 rounded-xl p-4 font-mono text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 resize-none"
            placeholder={inputPlaceholder}
            value={input}
            onChange={e => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400 uppercase tracking-wide">{outputLabel}</label>
          <textarea
            className="w-full h-[350px] bg-zinc-900 border border-zinc-700 rounded-xl p-4 font-mono text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none resize-none"
            placeholder="Result will appear here..."
            value={output}
            readOnly
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleConvert}
          className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          <ArrowRight size={14} /> Convert
        </button>
        <button
          onClick={handleCopy}
          disabled={!output}
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-200 text-sm rounded-lg transition-colors"
        >
          {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
        </button>
        <button
          onClick={handleDownload}
          disabled={!output}
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-200 text-sm rounded-lg transition-colors"
        >
          <Download size={14} /> Download
        </button>
        <button
          onClick={() => { setInput(''); setOutput(''); setError('') }}
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm rounded-lg transition-colors"
        >
          <Trash2 size={14} /> Clear
        </button>
      </div>

      {/* Ad after tool */}
      <AdSlot slot="3344556677" format="horizontal" />
    </div>
  )
}
