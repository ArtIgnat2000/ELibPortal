const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function ReadingRoomPresentation() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={`${BASE}/reading-room-presentation/index.htm`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Школьная библиотека — Презентация"
      />
    </div>
  )
}
