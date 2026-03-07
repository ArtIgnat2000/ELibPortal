const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function ReadingRoom() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={`${BASE}/reading-room/index.htm`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Читальный зал — Школьная библиотека"
      />
    </div>
  )
}
