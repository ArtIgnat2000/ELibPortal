import { useNavigate } from 'react-router-dom'
import styles from './Encyclopedia.module.css'

const TOPICS = [
  {
    id: 'oil',
    title: 'Нефть',
    subtitle: 'Как добывают, перерабатывают и используют нефть',
    emoji: '🛢️',
    color: '#f59e0b',
    colorBg: '#fef3c7',
    grade: '5–8',
    route: '/encyclopedia/oil',
  },
  {
    id: 'containership',
    title: 'Автоматизация в порту',
    subtitle: 'Современные технологии контейнерных перевозок',
    emoji: '🚢',
    color: '#3b82f6',
    colorBg: '#dbeafe',
    grade: '7–11',
    route: '/encyclopedia/containership',
  },
]

export function Encyclopedia() {
  const navigate = useNavigate()

  return (
    <main className={styles.main}>
      <div className="page-container">
        <div className={styles.header}>
          <span className={styles.headerEmoji}>🌍</span>
          <div>
            <h1 className={styles.title}>Энциклопедия</h1>
            <p className={styles.subtitle}>Интерактивные презентации на разные темы</p>
          </div>
        </div>

        <div className={styles.grid}>
          {TOPICS.map((topic) => (
            <article
              key={topic.id}
              className={styles.topicCard}
              style={{ '--topic-color': topic.color, '--topic-bg': topic.colorBg } as React.CSSProperties}
            >
              <div className={styles.topicIconWrap}>
                <span className={styles.topicIcon}>{topic.emoji}</span>
              </div>
              <div className={styles.topicBody}>
                <h2 className={styles.topicTitle}>{topic.title}</h2>
                <p className={styles.topicSubtitle}>{topic.subtitle}</p>
                <p className={styles.topicMeta}>{topic.grade} кл.</p>
              </div>
              <button
                className={styles.openBtn}
                onClick={() => navigate(topic.route)}
              >
                Смотреть →
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
