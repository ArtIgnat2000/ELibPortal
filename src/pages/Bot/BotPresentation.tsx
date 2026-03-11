const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function BotPresentation() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={`${BASE}/bot-presentation/index.htm`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Бот-помощник — Презентация"
      />
    </div>
  )
}