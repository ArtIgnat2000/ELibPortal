import { buildStaticAssetUrl } from '@/app/staticAssetUrl'

export function BukvarPresentation() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <iframe
        src={buildStaticAssetUrl('bukvar-presentation/index.html')}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Букваринск — Презентация"
      />
    </div>
  )
}
