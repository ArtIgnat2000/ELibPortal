import { useEffect } from 'react'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function EncyclopediaOil() {
  useEffect(() => {
    window.location.replace(`${BASE}/encyclopedia/oil/index.html`)
  }, [])
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', color: 'var(--color-text-muted)' }}>Загрузка…</div>
}
