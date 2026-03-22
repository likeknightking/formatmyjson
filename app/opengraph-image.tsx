import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'JSON Formatter & Validator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800, color: '#06b6d4', marginBottom: 8, display: 'flex' }}>
          {'{ }'}
        </div>
        <div style={{ fontSize: 52, fontWeight: 800, color: '#ffffff', marginBottom: 12, display: 'flex' }}>
          JSON Formatter
        </div>
        <div style={{ fontSize: 24, color: '#a1a1aa', maxWidth: 700, textAlign: 'center', display: 'flex' }}>
          Format, validate, and beautify JSON instantly. Powered by Monaco Editor. 100% private.
        </div>
        <div
          style={{
            marginTop: 32,
            padding: '12px 32px',
            background: '#06b6d4',
            borderRadius: 12,
            fontSize: 20,
            fontWeight: 700,
            color: '#000000',
            display: 'flex',
          }}
        >
          formatmyjson.com
        </div>
      </div>
    ),
    { ...size }
  )
}
