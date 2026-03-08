import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Theme } from '../types';

interface SettingsState {
  childName: string;
  activeGrade: number;
  theme: Theme;
  soundEnabled: boolean;
  wordsPerSession: number;
  onboardingDone: boolean;
  setChildName: (name: string) => void;
  setActiveGrade: (grade: number) => void;
  setTheme: (theme: Theme) => void;
  setSoundEnabled: (v: boolean) => void;
  setWordsPerSession: (n: number) => void;
  setOnboardingDone: (v: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      childName: '',
      activeGrade: 1,
      theme: 'auto',
      soundEnabled: true,
      wordsPerSession: 7,
      onboardingDone: false,

      setChildName: (childName) => set({ childName }),
      setActiveGrade: (activeGrade) => set({ activeGrade }),
      setTheme: (theme) => set({ theme }),
      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
      setWordsPerSession: (wordsPerSession) => set({ wordsPerSession }),
      setOnboardingDone: (onboardingDone) => set({ onboardingDone }),
    }),
    {
      name: 'slovo-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
