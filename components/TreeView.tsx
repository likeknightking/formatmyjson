'use client'

import { useState } from 'react'
import { ChevronRight, Copy, Check } from 'lucide-react'
import { TreeNode } from '@/lib/json-engine'

const TYPE_COLORS: Record<string, string> = {
  string:  'text-emerald-400',
  number:  'text-orange-400',
  boolean: 'text-blue-400',
  null:    'text-zinc-500',
  object:  'text-zinc-300',
  array:   'text-zinc-300',
}

const TYPE_BADGES: Record<string, string> = {
  object: 'text-zinc-500 text-xs',
  array:  'text-zinc-500 text-xs',
}

function formatValue(node: TreeNode): string {
  if (node.type === 'string') return `"${node.value}"`
  if (node.type === 'null') return 'null'
  return String(node.value)
}

function TreeNodeRow({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 2)
  const [copied, setCopied] = useState(false)
  const hasChildren = node.children && node.children.length > 0
  const isCollapsible = node.type === 'object' || node.type === 'array'
  const count = node.children?.length ?? 0

  async function copyPath() {
    await navigator.clipboard.writeText(node.path)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className="font-mono text-sm">
      <div
        className="flex items-center gap-1 py-0.5 px-2 rounded hover:bg-zinc-800 group cursor-default"
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {/* Chevron */}
        {isCollapsible ? (
          <button onClick={() => setOpen(o => !o)} className="text-zinc-500 hover:text-zinc-300 transition-colors shrink-0">
            <ChevronRight size={12} className={`transition-transform ${open ? 'rotate-90' : ''}`} />
          </button>
        ) : (
          <span className="w-3 shrink-0" />
        )}

        {/* Key */}
        <span className="text-cyan-400">{node.key}</span>
        <span className="text-zinc-600">:</span>

        {/* Value / summary */}
        {isCollapsible ? (
          <span className={TYPE_BADGES[node.type]}>
            {node.type === 'array' ? `[${count}]` : `{${count}}`}
          </span>
        ) : (
          <span className={TYPE_COLORS[node.type]}>{formatValue(node)}</span>
        )}

        {/* Copy path button */}
        <button
          onClick={copyPath}
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 hover:text-zinc-300"
          aria-label={`Copy path ${node.path}`}
        >
          {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
        </button>
      </div>

      {/* Children */}
      {isCollapsible && open && node.children?.map((child, i) => (
        <TreeNodeRow key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  )
}

interface Props {
  node: TreeNode
}

export default function TreeView({ node }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-auto max-h-[500px] py-3">
      <p className="text-xs text-zinc-600 px-4 pb-2">Hover over a key and click the copy button to copy its JSONPath</p>
      {node.children?.map((child, i) => (
        <TreeNodeRow key={i} node={child} depth={0} />
      ))}
    </div>
  )
}
