import { buildStaticAssetUrl } from '@/app/staticAssetUrl'

export function ReadingRoomPresentationQa() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={buildStaticAssetUrl('reading-room-presentation/qa.html')}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Читальный зал — Вопросы и ответы"
      />
    </div>
  )
}