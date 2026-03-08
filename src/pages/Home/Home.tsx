import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { SECTIONS } from '@/data/sections'

import { BOOKS } from '@/data/books'
import { useAgeStore } from '@/store/ageStore'
import { useProgressStore } from '@/store/progressStore'
import { AgeGroupSelector } from '@/components/AgeGroupSelector/AgeGroupSelector'
import { SectionCard } from '@/components/SectionCard/SectionCard'
import { ProgressBadge } from '@/components/ProgressBadge/ProgressBadge'
import styles from './Home.module.css'

export function Home() {
  const { ageGroup } = useAgeStore()
  const { readBooks } = useProgressStore()

  const visibleSections = useMemo(
    () => (ageGroup === 'all' ? SECTIONS : SECTIONS.filter((s) => s.ageGroups.includes(ageGroup))),
    [ageGroup],
  )

  function getBadge(sectionId: string) {
    if (sectionId === 'reading-room') {
      return <ProgressBadge done={readBooks.length} total={BOOKS.length} label="прочитано" />
    }
    return null
  }

  return (
    <main className={styles.main}>
      {/* Welcome hero */}
      <section className={styles.hero}>
        <div className="page-container">
          <h1 className={styles.heroTitle}>📚 Школьная библиотека</h1>
          <p className={styles.heroSub}>Интерактивные учебные материалы для школьников 1–11 класса</p>
        </div>
      </section>

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
                  <SectionCard section={s} badge={getBadge(s.id)} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Telegram CTA */}
      <section className={styles.tgSection}>
        <div className="page-container">
          <div className={styles.tgCard}>
            <span className={styles.tgEmoji}>🤖</span>
            <div>
              <p className={styles.tgTitle}>Учись в Telegram</p>
              <p className={styles.tgDesc}>Бот @VlabSchoolBot поможет подготовиться к урокам в любое время</p>
            </div>
            <a
              href="https://t.me/VlabSchoolBot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tgBtn}
            >
              Открыть бот →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
