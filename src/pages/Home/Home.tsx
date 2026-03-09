import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { SECTIONS } from '@/data/sections'

import { useAgeStore } from '@/store/ageStore'
import { AgeGroupSelector } from '@/components/AgeGroupSelector/AgeGroupSelector'
import { SectionCard } from '@/components/SectionCard/SectionCard'
import styles from './Home.module.css'

export function Home() {
  const { ageGroup } = useAgeStore()

  const visibleSections = useMemo(
    () => (ageGroup === 'all' ? SECTIONS : SECTIONS.filter((s) => s.ageGroups.includes(ageGroup))),
    [ageGroup],
  )

  return (
    <main className={styles.main}>
      {/* Age selector */}
      <section className={styles.ageSection}>
        <div className="page-container">
          <AgeGroupSelector />
        </div>
      </section>

      {/* Sections grid */}
      <section className={styles.grid}>
        <div className="page-container">
          {visibleSections.length === 0 ? (
            <p className={styles.empty}>Нет разделов для выбранного класса.</p>
          ) : (
            <motion.div className={styles.cards} layout>
              {visibleSections.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  layout
                >
                  <SectionCard section={s} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
