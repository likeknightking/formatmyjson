import ToolNav from './ToolNav'
import AdSlot from './AdSlot'

interface Props {
  title: string
  subtitle: string
  children: React.ReactNode
  seoContent: { heading: string; text: string }
  faqs: { q: string; a: string }[]
}

export default function SubToolPage({ title, subtitle, children, seoContent, faqs }: Props) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg font-bold text-zinc-100">🔧 FormatMyJSON — Developer Tools</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ToolNav />
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-100 mb-2">{title}</h2>
          <p className="text-zinc-400 text-sm">{subtitle}</p>
        </div>

        {children}

        <article className="mt-16 space-y-6 max-w-3xl mx-auto">
          <section>
            <h2 className="text-xl font-bold text-zinc-100 mb-2">{seoContent.heading}</h2>
            <p className="text-zinc-400 leading-relaxed">{seoContent.text}</p>
          </section>
          <AdSlot slot="7788990011" format="article" />
          {faqs.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-zinc-100 mb-3">FAQ</h2>
              {faqs.map(faq => (
                <div key={faq.q} className="mb-4">
                  <h3 className="text-base font-semibold text-zinc-200">{faq.q}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-1">{faq.a}</p>
                </div>
              ))}
            </section>
          )}
        </article>
      </main>
    </div>
  )
}
