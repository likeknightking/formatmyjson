import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { ValidationResult } from '@/lib/json-engine'

interface Props {
  validation: ValidationResult | null
}

export default function ErrorBanner({ validation }: Props) {
  if (!validation) return null

  if (validation.valid) {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-950 border border-emerald-800 rounded-xl text-sm">
        <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
        <span className="text-emerald-300 font-medium">Valid JSON</span>
      </div>
    )
  }

  return (
    <div className="px-4 py-3 bg-red-950 border border-red-800 rounded-xl text-sm space-y-1">
      <div className="flex items-start gap-2">
        <AlertCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-red-300 font-medium">{validation.error?.message}</p>
          {validation.error?.hint && (
            <p className="text-red-400 text-xs mt-0.5">{validation.error.hint}</p>
          )}
        </div>
      </div>
    </div>
  )
}
