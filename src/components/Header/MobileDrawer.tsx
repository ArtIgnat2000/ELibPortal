import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'
import { SECTIONS } from '@/data/sections'
import styles from './MobileDrawer.module.css'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const HOME_ITEM = { to: '/', icon: '🏠', label: 'Главная', end: true }

const NAV_ITEMS = [
  { to: '/bukvar',       icon: '🔤', label: 'Азубука' },
  { to: '/reading-room', icon: '📖', label: 'Читальный зал' },
  { to: '/dictionary',   icon: '✏️', label: 'Словарь' },
  { to: '/encyclopedia', icon: '🌍', label: 'Энциклопедия' },
  { to: '/bot',          icon: '🤖', label: 'Бот' },
]

const PRESENTATION_ITEMS = SECTIONS
  .filter((section) => section.presentationPath)
  .map((section) => ({
    to: section.presentationPath!,
    icon: section.icon,
    label: section.title,
  }))

const EXTRA_PRESENTATION_ITEMS = [
  {
    to: '/project/presentation',
    icon: '🎤',
    label: 'Общая защита',
  },
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
            id="site-mobile-drawer"
            className={styles.panel}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 36 }}
            role="dialog"
            aria-modal="true"
            aria-label="Навигация"
          >
            {/* Header row */}
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Меню</span>
            </div>

            <nav className={styles.nav}>
              <NavLink
                to={HOME_ITEM.to}
                end={HOME_ITEM.end}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ''}`
                }
              >
                <span className={styles.navIcon}>{HOME_ITEM.icon}</span>
                <span className={styles.navLabel}>{HOME_ITEM.label}</span>
              </NavLink>
            </nav>

            <div className={styles.divider} />

            <div className={styles.sectionTitle}>Разделы</div>
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

            <div className={styles.sectionTitle}>Презентации</div>
            <nav className={styles.nav}>
              <NavLink
                to="/presentations"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ''}`
                }
              >
                <span className={styles.navIcon}>🖥️</span>
                <span className={styles.navLabel}>Все презентации</span>
              </NavLink>

              {EXTRA_PRESENTATION_ITEMS.map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `${styles.navItem} ${styles.presentationItem} ${isActive ? styles.active : ''}`
                  }
                >
                  <span className={styles.navIcon}>{icon}</span>
                  <span className={styles.navLabel}>{label}</span>
                </NavLink>
              ))}

              {PRESENTATION_ITEMS.map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `${styles.navItem} ${styles.presentationItem} ${isActive ? styles.active : ''}`
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
