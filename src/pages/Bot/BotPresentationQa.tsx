import { buildStaticAssetUrl } from '@/app/staticAssetUrl'

export function BotPresentationQa() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={buildStaticAssetUrl('bot-presentation/qa.html')}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Бот-помощник — Вопросы и ответы"
      />
    </div>
  )
}