import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`page-container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>📚 Школьная библиотека</span>
          <span className={styles.copy}>© {year} — Учёба с радостью</span>
        </div>
        <nav className={styles.links}>
          <Link to="/bukvar">Азубука</Link>
          <Link to="/reading-room">Читальный зал</Link>
          <Link to="/dictionary">Словарь</Link>
          <Link to="/encyclopedia">Энциклопедия</Link>
          <Link to="/bot">Бот-помощник</Link>
        </nav>
        <a
          href="https://t.me/VlabSchoolBot"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.telegram}
          aria-label="Открыть Telegram-бот"
        >
          <span>🤖</span> Telegram-бот
        </a>
      </div>
    </footer>
  )
}
