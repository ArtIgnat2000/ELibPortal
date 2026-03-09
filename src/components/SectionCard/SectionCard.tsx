import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { SectionMeta } from '@/data/sections'
import styles from './SectionCard.module.css'

const MotionLink = motion.create(Link)

interface Props {
  section: SectionMeta
}

export function SectionCard({ section }: Props) {
  return (
    <MotionLink
      to={section.path}
      className={styles.card}
      style={{
        '--card-color': section.color,
        '--card-bg': section.colorBg,
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgb(0 0 0 / 0.14)' }}
      transition={{ duration: 0.2 }}
      layout
    >
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <span className={styles.icon}>{section.icon}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{section.title}</h2>
          </div>
          <p className={styles.subtitle}>{section.subtitle}</p>
        </div>
      </div>
      <p className={styles.description}>{section.description}</p>
    </MotionLink>
  )
}
