import { Link } from 'react-router-dom'
import { SECTIONS } from '@/data/sections'
import styles from './Presentations.module.css'

interface PresentationItem {
  id: string
  title: string
  subtitle: string
  icon: string
  color: string
  colorBg: string
  presentationPath?: string
}

const PRESENTATIONS: PresentationItem[] = [
  {
    id: 'project-overview',
    title: 'Общая защита',
    subtitle: 'Школьная библиотека — презентация проекта для конкурса',
    icon: '🎤',
    color: '#2563eb',
    colorBg: '#dbeafe',
    presentationPath: '/project/presentation',
  },
  {
    id: 'qa',
    title: 'Вопросы и ответы',
    subtitle: 'Подготовка к защите — 20 вопросов от строгого жюри с ответами',
    icon: '❓',
    color: '#7c3aed',
    colorBg: '#ede9fe',
    presentationPath: '/project/presentation/qa',
  },
  {
    id: 'reading-room-qa',
    title: 'Читальный зал — Q&A',
    subtitle: 'Отдельная презентация с вопросами и ответами по разделу «Читальный зал»',
    icon: '📖',
    color: '#2563eb',
    colorBg: '#dbeafe',
    presentationPath: '/reading-room/presentation/qa',
  },
  {
    id: 'bot-qa',
    title: 'Бот-помощник — Q&A',
    subtitle: 'Отдельная презентация с вопросами и ответами по проекту Telegram-бота',
    icon: '🤖',
    color: '#0f6cbd',
    colorBg: '#d9efff',
    presentationPath: '/bot/presentation/qa',
  },
  ...SECTIONS.filter((section) => section.presentationPath),
]

export function Presentations() {
  return (
    <main className={styles.main}>
      <div className="page-container">
        <div className={styles.grid}>
          {PRESENTATIONS.map((item) => {
            const cardStyle = {
              '--presentation-color': item.color,
              '--presentation-bg': item.colorBg,
            } as React.CSSProperties
            const content = (
              <>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>
                <div className={styles.body}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              </>
            )
            return (
              <Link key={item.id} to={item.presentationPath!} className={styles.card} style={cardStyle}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}