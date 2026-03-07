import styles from './ProgressBadge.module.css'

interface Props {
  done: number
  total: number
  label?: string
}

export function ProgressBadge({ done, total, label = 'выполнено' }: Props) {
  if (total === 0) return null
  const pct = Math.round((done / total) * 100)
  return (
    <span className={styles.badge} title={`${done} из ${total} ${label}`}>
      {done > 0 && <span className={styles.bar} style={{ width: `${pct}%` }} />}
      <span className={styles.text}>{done}/{total}</span>
    </span>
  )
}
