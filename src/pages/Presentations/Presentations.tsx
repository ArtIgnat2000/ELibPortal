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
  href?: string
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
    href: '/project-presentation/qa.html',
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
            if (item.href) {
              return (
                <a key={item.id} href={item.href} className={styles.card} style={cardStyle}>
                  {content}
                </a>
              )
            }
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