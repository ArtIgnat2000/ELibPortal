import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { EncyclopediaSlide } from '@/data/encyclopedia'
import styles from './PresentationViewer.module.css'

interface Props {
  title: string
  slides: EncyclopediaSlide[]
  onClose?: () => void
  /** If true, renders inline (no overlay) */
  inline?: boolean
}

export function PresentationViewer({ title, slides, onClose, inline = false }: Props) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const total = slides.length
  const slide = slides[index]

  const prev = useCallback(() => {
    if (index === 0) return
    setDirection(-1)
    setIndex((i) => i - 1)
  }, [index])

  const next = useCallback(() => {
    if (index === total - 1) return
    setDirection(1)
    setIndex((i) => i + 1)
  }, [index, total])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
      if (e.key === 'Escape' && onClose) onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, onClose])

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? '60%'  : '-60%', opacity: 0 }),
    center: { x: '0%', opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? '-60%' : '60%',  opacity: 0 }),
  }

  const content = (
    <div className={styles.viewer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.titleText}>{title}</span>
          <span className={styles.counter}>{index + 1} / {total}</span>
        </div>
        {onClose && (
          <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">✕</button>
        )}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {/* Slide */}
      <div className={styles.slideWrap}>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            className={styles.slide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={styles.slideEmoji}>{slide.emoji}</div>
            <h2 className={styles.slideTitle}>{slide.title}</h2>
            <p className={styles.slideText}>{slide.text}</p>
            {slide.fact && (
              <div className={styles.fact}>
                <span className={styles.factBullet}>💡</span>
                <span>{slide.fact}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className={styles.nav}>
        <button className={styles.navBtn} onClick={prev} disabled={index === 0} aria-label="Предыдущий слайд">
          ← Назад
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.navBtn} onClick={next} disabled={index === total - 1} aria-label="Следующий слайд">
          Далее →
        </button>
      </div>
    </div>
  )

  if (inline) return content

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose() }}>
      {content}
    </div>
  )
}
