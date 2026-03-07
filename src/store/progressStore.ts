import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type SectionId = 'reading-room' | 'dictionary' | 'bukvar' | 'encyclopedia' | 'bot'

interface ProgressState {
  // reading-room: set of read book ids
  readBooks: string[]
  // dictionary: set of learned word ids
  learnedWords: string[]
  // bukvar: completed letters
  completedLetters: string[]

  markBookRead: (id: string) => void
  unmarkBookRead: (id: string) => void
  isBookRead: (id: string) => boolean

  markWordLearned: (id: string) => void
  isWordLearned: (id: string) => boolean

  markLetterComplete: (letter: string) => void
  isLetterComplete: (letter: string) => boolean
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      readBooks: [],
      learnedWords: [],
      completedLetters: [],

      markBookRead: (id) =>
        set((s) => ({ readBooks: s.readBooks.includes(id) ? s.readBooks : [...s.readBooks, id] })),
      unmarkBookRead: (id) =>
        set((s) => ({ readBooks: s.readBooks.filter((b) => b !== id) })),
      isBookRead: (id) => get().readBooks.includes(id),

      markWordLearned: (id) =>
        set((s) => ({ learnedWords: s.learnedWords.includes(id) ? s.learnedWords : [...s.learnedWords, id] })),
      isWordLearned: (id) => get().learnedWords.includes(id),

      markLetterComplete: (letter) =>
        set((s) => ({
          completedLetters: s.completedLetters.includes(letter)
            ? s.completedLetters
            : [...s.completedLetters, letter],
        })),
      isLetterComplete: (letter) => get().completedLetters.includes(letter),
    }),
    { name: 'sl:progress' },
  ),
)
