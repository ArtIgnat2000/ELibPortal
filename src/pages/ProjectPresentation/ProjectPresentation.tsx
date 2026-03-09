const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function ProjectPresentation() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={`${BASE}/project-presentation/index.html`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Школьная библиотека — Общая презентация проекта"
      />
    </div>
  )
}