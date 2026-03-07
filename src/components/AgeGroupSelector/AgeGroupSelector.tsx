import { AGE_GROUPS, useAgeStore } from '@/store/ageStore'
import type { AgeGroup } from '@/store/ageStore'
import styles from './AgeGroupSelector.module.css'

export function AgeGroupSelector() {
  const { ageGroup, setAgeGroup } = useAgeStore()

  return (
    <div className={styles.wrapper} role="group" aria-label="Выбор класса">
      <span className={styles.label}>Я учусь в:</span>
      <div className={styles.pills}>
        {AGE_GROUPS.map((g) => (
          <button
            key={g.id}
            className={`${styles.pill} ${ageGroup === g.id ? styles.active : ''}`}
            onClick={() => setAgeGroup(g.id as AgeGroup)}
            aria-pressed={ageGroup === g.id}
          >
            <span className={styles.emoji}>{g.emoji}</span>
            {g.label}
          </button>
        ))}
      </div>
    </div>
  )
}
