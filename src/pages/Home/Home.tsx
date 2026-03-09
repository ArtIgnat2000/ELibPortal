import { motion } from 'framer-motion'
import { SECTIONS } from '@/data/sections'

import { SectionCard } from '@/components/SectionCard/SectionCard'
import styles from './Home.module.css'

export function Home() {
  return (
    <main className={styles.main}>
      {/* Sections grid */}
      <section className={styles.grid}>
        <div className="page-container">
          {SECTIONS.length === 0 ? (
            <p className={styles.empty}>Нет разделов для выбранного класса.</p>
          ) : (
            <motion.div className={styles.cards} layout>
              {SECTIONS.map((s, i) => (
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
