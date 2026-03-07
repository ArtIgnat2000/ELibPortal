import { Link, NavLink } from 'react-router-dom'
import { useThemeStore } from '@/store/themeStore'
import styles from './Header.module.css'

export function Header() {
  const { theme, toggle } = useThemeStore()

  return (
    <header className={styles.header}>
      <div className={`page-container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>📚</span>
          <div>
            <span className={styles.logoTitle}>Школьная библиотека</span>
            <span className={styles.logoTagline}>Учись с радостью</span>
          </div>
        </Link>

        {/* Main nav */}
        <nav className={styles.nav} aria-label="Разделы">
          <NavLink to="/bukvar"       className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Букварь</NavLink>
          <NavLink to="/reading-room" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Читальный зал</NavLink>
          <NavLink to="/dictionary"   className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Словарь</NavLink>
          <NavLink to="/encyclopedia" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Энциклопедия</NavLink>
          <NavLink to="/bot"          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Бот</NavLink>
        </nav>

        {/* Theme toggle */}
        <button
          className={styles.themeBtn}
          onClick={toggle}
          aria-label={`Переключить тему (сейчас: ${theme === 'light' ? 'светлая' : 'тёмная'})`}
          title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
