import { Link } from 'react-router-dom'
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
  return (
    <main className={styles.main}>
      <div className="page-container">
        <div className={styles.grid}>
          {TOPICS.map((topic) => (
            <Link
              key={topic.id}
              to={topic.route}
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
