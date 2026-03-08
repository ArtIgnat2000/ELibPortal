import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'
import styles from './MobileDrawer.module.css'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_ITEMS = [
  { to: '/bukvar',       icon: '🔤', label: 'Букварь' },
  { to: '/reading-room', icon: '📖', label: 'Читальный зал' },
  { to: '/dictionary',   icon: '✏️', label: 'Словарь' },
  { to: '/encyclopedia', icon: '🌍', label: 'Энциклопедия' },
  { to: '/bot',          icon: '🤖', label: 'Бот' },
]

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { theme, toggle } = useThemeStore()
  const location = useLocation()

  // Close on route change
  useEffect(() => { onClose() }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.aside
            className={styles.panel}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 36 }}
            role="dialog"
            aria-modal="true"
            aria-label="Навигация"
          >
            {/* Header row */}
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Меню</span>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Закрыть меню"
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav className={styles.nav}>
              {NAV_ITEMS.map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                >
                  <span className={styles.navIcon}>{icon}</span>
                  <span className={styles.navLabel}>{label}</span>
                </NavLink>
              ))}
            </nav>

            <div className={styles.divider} />

            {/* Theme toggle row */}
            <button className={styles.themeRow} onClick={toggle}>
              <span className={styles.navIcon}>{theme === 'light' ? '🌙' : '☀️'}</span>
              <span className={styles.navLabel}>
                {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
              </span>
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
