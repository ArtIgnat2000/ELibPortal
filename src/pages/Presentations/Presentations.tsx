import { Link } from 'react-router-dom'
import { SECTIONS } from '@/data/sections'
import styles from './Presentations.module.css'

const PRESENTATIONS = SECTIONS.filter((section) => section.presentationPath)

export function Presentations() {
  return (
    <main className={styles.main}>
      <div className="page-container">
        <div className={styles.grid}>
          {PRESENTATIONS.map((section) => (
            <Link
              key={section.id}
              to={section.presentationPath!}
              className={styles.card}
              style={{
                '--presentation-color': section.color,
                '--presentation-bg': section.colorBg,
              } as React.CSSProperties}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{section.icon}</span>
              </div>
              <div className={styles.body}>
                <h2 className={styles.title}>{section.title}</h2>
                <p className={styles.subtitle}>{section.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}