import { useState, useMemo } from 'react'
import { useProgressStore } from '@/store/progressStore'
import styles from './Dictionary.module.css'

// Sample vocabulary words — replace with full data from dictionary repo
const WORDS: { id: string; word: string; hint: string; grade: string }[] = [
  { id: 'w1', word: 'Корова', hint: 'ко-ро-ва', grade: '1' },
  { id: 'w2', word: 'Молоко', hint: 'мо-ло-ко', grade: '1' },
  { id: 'w3', word: 'Помидор', hint: 'по-ми-дор', grade: '2' },
  { id: 'w4', word: 'Огурец', hint: 'о-гу-рец', grade: '2' },
  { id: 'w5', word: 'Директор', hint: 'ди-рек-тор', grade: '3' },
  { id: 'w6', word: 'Горизонт', hint: 'го-ри-зонт', grade: '4' },
  { id: 'w7', word: 'Расстояние', hint: 'рас-сто-я-ни-е', grade: '5' },
  { id: 'w8', word: 'Километр', hint: 'ки-ло-метр', grade: '5' },
  { id: 'w9', word: 'Президент', hint: 'пре-зи-дент', grade: '6' },
  { id: 'w10', word: 'Ресторан', hint: 'рес-то-ран', grade: '6' },
  { id: 'w11', word: 'Колоссальный', hint: 'ко-лос-саль-ный', grade: '7' },
  { id: 'w12', word: 'Перспектива', hint: 'пер-спек-ти-ва', grade: '8' },
]

const ALL_GRADE = 'Все'
const GRADES = [ALL_GRADE, ...Array.from(new Set(WORDS.map((w) => w.grade)))]

export function Dictionary() {
  const [input, setInput]   = useState('')
  const [current, setCurrent] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [gradeFilter, setGradeFilter] = useState(ALL_GRADE)
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null)

  const { learnedWords, markWordLearned, isWordLearned } = useProgressStore()

  const filtered = useMemo(
    () => gradeFilter === ALL_GRADE ? WORDS : WORDS.filter((w) => w.grade === gradeFilter),
    [gradeFilter],
  )

  const word = filtered[current % filtered.length]

  function check() {
    if (!word) return
    const correct = input.trim().toLowerCase() === word.word.toLowerCase()
    setResult(correct ? 'correct' : 'wrong')
    if (correct) markWordLearned(word.id)
  }

  function next() {
    setInput('')
    setShowHint(false)
    setResult(null)
    setCurrent((c) => (c + 1) % filtered.length)
  }

  if (!word) return <main className={styles.main}><p className={styles.empty}>Нет слов для выбранного класса.</p></main>

  return (
    <main className={styles.main}>
      <div className="page-container">
        <div className={styles.header}>
          <span className={styles.headerEmoji}>✏️</span>
          <div>
            <h1 className={styles.title}>Словарь</h1>
            <p className={styles.subtitle}>Выучено: {learnedWords.length} из {WORDS.length} слов</p>
          </div>
        </div>

        {/* Grade filter */}
        <div className={styles.pills}>
          {GRADES.map((g) => (
            <button
              key={g}
              className={`${styles.pill} ${gradeFilter === g ? styles.pillActive : ''}`}
              onClick={() => { setGradeFilter(g); setCurrent(0); setResult(null); setInput(''); setShowHint(false) }}
            >
              {g === ALL_GRADE ? 'Все классы' : `${g} класс`}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className={styles.card}>
          <p className={styles.prompt}>Напиши правильно:</p>

          {showHint && (
            <p className={styles.hint}>
              Подсказка: <strong>{word.hint}</strong>
            </p>
          )}

          <div className={styles.inputRow}>
            <input
              className={`${styles.wordInput} ${result === 'correct' ? styles.correct : result === 'wrong' ? styles.wrong : ''}`}
              type="text"
              value={input}
              onChange={(e) => { setInput(e.target.value); setResult(null) }}
              onKeyDown={(e) => e.key === 'Enter' && !result && check()}
              placeholder="Введи слово…"
              autoComplete="off"
              spellCheck={false}
              aria-label="Введи слово"
            />
            {!result && (
              <button className={styles.checkBtn} onClick={check}>Проверить</button>
            )}
          </div>

          {result === 'correct' && (
            <p className={styles.resultOk}>✅ Правильно! Молодец!</p>
          )}
          {result === 'wrong' && (
            <p className={styles.resultErr}>❌ Неверно. Правильно: <strong>{word.word}</strong></p>
          )}

          <div className={styles.actions}>
            {!showHint && !result && (
              <button className="btn-ghost" onClick={() => setShowHint(true)}>💡 Подсказка</button>
            )}
            {result && (
              <button className="btn-primary" onClick={next}>Следующее слово →</button>
            )}
            {isWordLearned(word.id) && (
              <span className={styles.learnedTag}>⭐ Уже выучено</span>
            )}
          </div>

          <p className={styles.progress}>{(current % filtered.length) + 1} / {filtered.length}</p>
        </div>
      </div>
    </main>
  )
}
