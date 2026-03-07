import type { AgeGroup } from '@/store/ageStore'

export interface SectionMeta {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string           // emoji fallback (used in SectionCard header)
  color: string          // CSS custom property value
  colorBg: string
  ageGroups: AgeGroup[]  // which groups see this card
  path: string
  presentationPath?: string
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'bukvar',
    slug: 'bukvar',
    title: 'Букварь',
    subtitle: 'Азбука и первые слова',
    description: 'Учим буквы, слоги и первые слова. Для самых маленьких читателей.',
    icon: '🔤',
    color: '#8b5cf6',
    colorBg: '#f3e8ff',
    ageGroups: ['1-4', 'all'],
    path: '/bukvar',
    presentationPath: '/bukvar/presentation',
  },
  {
    id: 'reading-room',
    slug: 'reading-room',
    title: 'Читальный зал',
    subtitle: 'Книги для чтения',
    description: 'Рекомендованные книги для школьников. Отмечай прочитанное, ищи по названию.',
    icon: '📖',
    color: '#3b82f6',
    colorBg: '#eff6ff',
    ageGroups: ['1-4', '5-8', '9-11', 'all'],
    path: '/reading-room',
    presentationPath: '/reading-room/presentation',
  },
  {
    id: 'dictionary',
    slug: 'dictionary',
    title: 'Словарь',
    subtitle: 'Словарные слова 1–11 класс',
    description: 'Тренируй написание словарных слов с подсказками и проверкой.',
    icon: '✏️',
    color: '#10b981',
    colorBg: '#ecfdf5',
    ageGroups: ['1-4', '5-8', '9-11', 'all'],
    path: '/dictionary',
    presentationPath: '/dictionary/presentation',
  },
  {
    id: 'encyclopedia',
    slug: 'encyclopedia',
    title: 'Энциклопедия',
    subtitle: 'Интерактивные презентации',
    description: 'Увлекательные презентации о нефти, автоматизации и других темах.',
    icon: '🌍',
    color: '#f97316',
    colorBg: '#fff7ed',
    ageGroups: ['5-8', '9-11', 'all'],
    path: '/encyclopedia',
  },
  {
    id: 'bot',
    slug: 'bot',
    title: 'Бот-помощник',
    subtitle: 'Учёба в Telegram',
    description: 'Умный Telegram-бот @VlabSchoolBot поможет подготовиться к урокам.',
    icon: '🤖',
    color: '#0ea5e9',
    colorBg: '#f0f9ff',
    ageGroups: ['1-4', '5-8', '9-11', 'all'],
    path: '/bot',
  },
]
