const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function DictionaryPresentation() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={`${BASE}/dictionary-presentation/index.html`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Академия СЛОВО — Презентация проекта"
      />
    </div>
  )
}
