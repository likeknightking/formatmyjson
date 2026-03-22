'use client'

import { Copy, Check, Download, Trash2, Minimize2 } from 'lucide-react'
import { useState } from 'react'
import { FormatOptions } from '@/lib/json-engine'

interface Props {
  canProcess: boolean
  options: FormatOptions
  onFormat: () => void
  onMinify: () => void
  onCopy: () => void
  onDownload: () => void
  onClear: () => void
  onOptionsChange: (o: FormatOptions) => void
}

export default function Toolbar({
  canProcess, options, onFormat, onMinify, onCopy, onDownload, onClear, onOptionsChange,
}: Props) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-wrap items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3">
      {/* Primary actions */}
      <button
        onClick={onFormat}
        disabled={!canProcess}
        className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white text-sm font-semibold rounded-lg transition-colors"
      >
        Format
      </button>
      <button
        onClick={onMinify}
        disabled={!canProcess}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 text-zinc-200 text-sm rounded-lg transition-colors"
      >
        <Minimize2 size={13} /> Minify
      </button>

      <div className="w-px h-5 bg-zinc-600 mx-1" />

      {/* Indent */}
      <div className="flex items-center gap-1.5 text-xs text-zinc-400">
        <span>Indent</span>
        <div className="flex bg-zinc-900 rounded-lg p-0.5 gap-0.5">
          {(['2', '4', 'tab'] as const).map(opt => (
            <button
              key={opt}
              onClick={() => onOptionsChange({ ...options, indent: opt === 'tab' ? 'tab' : Number(opt) as 2 | 4 })}
              className={`px-2 py-1 rounded-md text-xs font-mono transition-colors ${
                String(options.indent) === opt ? 'bg-zinc-600 text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Sort keys */}
      <label className="flex items-center gap-1.5 text-xs text-zinc-400 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={options.sortKeys}
          onChange={e => onOptionsChange({ ...options, sortKeys: e.target.checked })}
          className="accent-cyan-500 w-3.5 h-3.5"
        />
        Sort keys
      </label>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={handleCopy}
          disabled={!canProcess}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 text-zinc-200 text-sm rounded-lg transition-colors"
        >
          {copied ? <><Check size={13} className="text-emerald-400" /> Copied!</> : <><Copy size={13} /> Copy</>}
        </button>
        <button
          onClick={onDownload}
          disabled={!canProcess}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 text-zinc-200 text-sm rounded-lg transition-colors"
        >
          <Download size={13} /> Save
        </button>
        <button
          onClick={onClear}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-zinc-400 hover:text-red-400 text-sm rounded-lg transition-colors"
        >
          <Trash2 size={13} /> Clear
        </button>
      </div>
    </div>
  )
}
