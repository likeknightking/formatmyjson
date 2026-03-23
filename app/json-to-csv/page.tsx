import type { Metadata } from 'next'
import ToolNav from '@/components/ToolNav'
import Client from './Client'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'JSON to CSV Converter — Convert JSON to CSV Online | FormatMyJSON',
  description: 'Free online JSON to CSV converter. Convert JSON arrays to downloadable CSV files instantly. Perfect for spreadsheets and data analysis.',
  alternates: { canonical: 'https://formatmyjson.com/json-to-csv' },
}

const faqs = [
  { q: 'What JSON structure works with this tool?', a: 'The input must be a JSON array of objects, such as [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]. Each object in the array becomes a row in the CSV, and each unique key across all objects becomes a column header. Objects with missing keys produce empty cells for those columns.' },
  { q: 'How are special characters handled in CSV?', a: 'Values containing commas, double quotes, or newlines are automatically wrapped in double quotes and escaped according to the CSV standard (RFC 4180). Double quotes within values are doubled (e.g., "He said ""hello"""). This ensures compatibility with Excel, Google Sheets, and all CSV parsers.' },
  { q: 'Can I convert nested JSON objects to CSV?', a: 'CSV is inherently a flat, tabular format, so deeply nested objects cannot be directly represented. This tool flattens one level of nesting by joining parent and child keys with a dot separator (e.g., "address.city"). For deeper nesting, consider flattening your JSON first or using a dedicated data transformation tool.' },
  { q: 'What delimiter does the output use?', a: 'The output uses commas as the default delimiter, which is the standard for CSV files. If you need a different separator (such as semicolons for European locales or tabs for TSV format), you can do a find-and-replace on the output.' },
  { q: 'Can I import the CSV into Excel?', a: 'Yes. Copy the CSV output and paste it into a text file with a .csv extension, then open it in Excel. Alternatively, you can paste it directly into Google Sheets using the "Paste special > Paste as CSV" option. The tool produces standard CSV that is compatible with all major spreadsheet applications.' },
  { q: 'How are null and boolean values handled?', a: 'Null values are converted to empty strings in the CSV output. Boolean values (true/false) are written as the literal strings "true" and "false". Numbers are written without quotes so spreadsheet applications can recognize them as numeric values.' },
  { q: 'Is there a limit on the number of rows?', a: 'There is no artificial limit. The tool processes JSON arrays of any size in your browser. However, very large arrays (tens of thousands of objects) may take a moment to process depending on your device. For massive datasets, a server-side tool or scripting language may be more appropriate.' },
  { q: 'Is my data kept private?', a: 'Absolutely. The conversion runs entirely in your browser using client-side JavaScript. Your JSON data is never sent to any server. This makes the tool safe for sensitive business data, personal information, and proprietary datasets.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="min-h-screen bg-zinc-950">
        <header className="border-b border-zinc-800 px-4 py-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-lg font-bold text-white">{'{ }'} JSON Formatter</h1>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <ToolNav />
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">JSON to CSV Converter</h2>
            <p className="text-zinc-400 text-sm">Convert JSON arrays into CSV format for Excel, Google Sheets, and data analysis.</p>
          </div>
          <Client />
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Why Convert JSON to CSV?</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                CSV (Comma-Separated Values) is the universal interchange format for tabular data. Every spreadsheet application, database tool, and data analysis platform supports CSV import. While JSON is excellent for representing hierarchical data in APIs and applications, when you need to analyze data in Excel, Google Sheets, R, pandas, or Tableau, CSV is the expected input format.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Converting JSON API responses to CSV is one of the most common data workflow tasks. Whether you are exporting user records from a REST endpoint, downloading transaction logs, or extracting analytics data, the resulting JSON array needs to be transformed into rows and columns before it can be analyzed in a spreadsheet. This tool handles that transformation instantly, saving you the effort of writing custom scripts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">How JSON to CSV Conversion Works</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                The conversion process starts by scanning all objects in your JSON array to extract every unique key. These keys become the column headers in the first row of the CSV output. Then, each object in the array is iterated to produce a data row, with values placed under their corresponding column headers.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                If some objects have keys that others do not, the missing values are output as empty cells. This is important for real-world data, where API responses may include optional fields that are only present in some records. The tool ensures all columns are properly aligned regardless of inconsistencies in the source data, producing a clean rectangular table every time.
              </p>
            </section>

            <AdSlot slot="7788990011" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Working with the CSV Output</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                Once you have your CSV output, there are several ways to use it. The most straightforward approach is to copy the text and paste it into a .csv file, which you can then open in any spreadsheet application. Excel will automatically parse the commas into columns, and Google Sheets offers a direct import option for CSV data.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-3">
                For data analysis in Python, you can save the CSV and load it with pandas using the read_csv function. In R, the read.csv function serves the same purpose. Both libraries handle the header row automatically, creating a data frame with named columns that corresponds exactly to the keys in your original JSON objects.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                If you are working with databases, most database management tools (pgAdmin, MySQL Workbench, DBeaver) support CSV import. You can use the generated CSV to quickly populate a table with test data or to migrate data between systems without writing SQL INSERT statements manually.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Limitations of the CSV Format</h2>
              <p className="text-zinc-400 leading-relaxed mb-3">
                CSV is inherently flat — it represents two-dimensional tables with rows and columns. JSON, on the other hand, can represent deeply nested hierarchies, arrays within arrays, and complex object graphs. When converting from JSON to CSV, you inevitably lose some structural information. Nested objects must be flattened, and arrays within individual values must be serialized as strings.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                CSV also lacks data type information. Everything in a CSV file is a string until a parser interprets it. Numbers may lose precision, dates may be reformatted by spreadsheet applications, and boolean values become indistinguishable from the strings "true" and "false". For workflows that require strict type preservation, consider using formats like Parquet or keeping the data in JSON until the final processing step.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map(faq => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-semibold text-zinc-200">{faq.q}</h3>
                    <p className="text-zinc-400 leading-relaxed mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>

        <footer className="border-t border-zinc-800 mt-16 py-8 text-center">
          <p className="text-zinc-600 text-sm">FormatMyJSON — Free developer tools. No sign-up required.</p>
        </footer>
      </div>
    </>
  )
}
