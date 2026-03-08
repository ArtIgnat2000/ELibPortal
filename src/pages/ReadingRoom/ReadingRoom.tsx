import { useEffect } from 'react'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function ReadingRoom() {
  useEffect(() => {
    window.location.href = `${BASE}/reading-room/`
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', fontSize: '2rem' }}>
      ⏳
    </div>
  )
}
