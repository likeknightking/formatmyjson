'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, Download, Trash2, Minimize2, Sparkles } from 'lucide-react'
import { formatXML, minifyXML, validateXML } from '@/lib/converters'
import AdSlot from '@/components/AdSlot'

const SAMPLE = `<?xml version="1.0" encoding="UTF-8"?><catalog><book id="1"><title>XML Developer Guide</title><author>John Doe</author><price>44.95</price></book><book id="2"><title>Midnight Rain</title><author>Jane Smith</author><price>5.95</price></book></catalog>`

export default function XmlFormatterClient() {
  const [input, setInput] = useState(SAMPLE)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleFormat = useCallback(() => {
    if (!input.trim()) { setError('Please enter some XML.'); return }
    const validation = validateXML(input)
    if (!validation.valid) { setError(validation.error || 'Invalid XML'); setOutput(''); return }
    setOutput(formatXML(input))
    setError('')
  }, [input])

  const handleMinify = useCallback(() => {
    if (!input.trim()) return
    setOutput(minifyXML(input))
    setError('')
  }, [input])

  const handleCopy = useCallback(async () => {
    if (!output) return
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch {}
  }, [output])

  const handleDownload = useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: 'text/xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = 'formatted.xml'; a.click()
    URL.revokeObjectURL(url)
  }, [output])

  return (
    <div className="space-y-4">
      {/* Toolbar — identical to main page */}
      <div className="flex flex-wrap items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 shadow-sm">
        <button onClick={handleFormat} className="flex items-center gap-2 px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-colors"><Sparkles size={14} /> Format</button>
        <button onClick={handleMinify} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm rounded-lg border border-zinc-700 transition-colors"><Minimize2 size={14} /> Minify</button>
        <div className="w-px h-6 bg-zinc-700" />
        <button onClick={handleCopy} disabled={!output} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 text-sm rounded-lg border border-zinc-700 transition-colors">{copied ? <><Check size={14} className="text-green-400" /> Copied!</> : <><Copy size={14} /> Copy</>}</button>
        <button onClick={handleDownload} disabled={!output} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 text-sm rounded-lg border border-zinc-700 transition-colors"><Download size={14} /> Download</button>
        <button onClick={() => { setInput(''); setOutput(''); setError('') }} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm rounded-lg border border-zinc-700 transition-colors ml-auto"><Trash2 size={14} /> Clear</button>
      </div>

      {/* Error */}
      {error && <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">{error}</div>}

      {/* Editor panels — wrapped in card like main page */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-800">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Input XML</span>
            <span className="text-[10px] text-zinc-600">{input.length} chars</span>
          </div>
          <textarea
            className="flex-1 min-h-[400px] bg-transparent p-4 font-mono text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none resize-none"
            placeholder="Paste your XML here..."
            value={input}
            onChange={e => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-800">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Formatted XML</span>
            <span className="text-[10px] text-zinc-600">{output.length} chars</span>
          </div>
          <textarea
            className="flex-1 min-h-[400px] bg-transparent p-4 font-mono text-sm text-zinc-300 focus:outline-none resize-none"
            placeholder="Result will appear here..."
            value={output}
            readOnly
          />
        </div>
      </div>

      <AdSlot slot="7757599577" format="horizontal" />
    </div>
  )
}
