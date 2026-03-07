import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type AgeGroup = 'all' | '1-4' | '5-8' | '9-11'

export const AGE_GROUPS: { id: AgeGroup; label: string; emoji: string }[] = [
  { id: 'all',  label: 'Все классы', emoji: '📚' },
  { id: '1-4',  label: '1–4 класс',  emoji: '🐣' },
  { id: '5-8',  label: '5–8 класс',  emoji: '🚀' },
  { id: '9-11', label: '9–11 класс', emoji: '🎓' },
]

interface AgeState {
  ageGroup: AgeGroup
  setAgeGroup: (group: AgeGroup) => void
}

export const useAgeStore = create<AgeState>()(
  persist(
    (set) => ({
      ageGroup: 'all',
      setAgeGroup: (ageGroup) => set({ ageGroup }),
    }),
    { name: 'sl:age' },
  ),
)
