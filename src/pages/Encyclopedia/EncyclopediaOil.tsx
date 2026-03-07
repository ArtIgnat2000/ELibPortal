const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function EncyclopediaOil() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={`${BASE}/encyclopedia/oil/index.html`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Нефть — Презентация"
      />
    </div>
  )
}
