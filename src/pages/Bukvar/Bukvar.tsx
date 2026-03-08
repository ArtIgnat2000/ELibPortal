import { useEffect } from 'react'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function Bukvar() {
  useEffect(() => {
    window.location.replace(`${BASE}/bukvar/`)
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', fontSize: '2rem' }}>
      ⏳
    </div>
  )
}
