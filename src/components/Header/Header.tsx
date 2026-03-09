import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MobileDrawer } from './MobileDrawer'
import styles from './Header.module.css'

function getHeaderMeta(pathname: string) {
  if (pathname === '/encyclopedia') {
    return {
      to: '/encyclopedia',
      title: 'Энциклопедия',
      tagline: 'Интерактивные презентации',
    }
  }

  if (pathname === '/presentations') {
    return {
      to: '/presentations',
      title: 'Презентации',
      tagline: 'Материалы для быстрого запуска',
    }
  }

  return {
    to: '/',
    title: 'Школьная библиотека',
    tagline: 'Учись с радостью',
  }
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const headerMeta = getHeaderMeta(location.pathname)

  return (
    <header className={styles.header}>
      <div className={`page-container ${styles.inner}`}>
        <button
          className={`${styles.menuBtn} ${drawerOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setDrawerOpen((open) => !open)}
          aria-label={drawerOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={drawerOpen}
          aria-controls="site-mobile-drawer"
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <Link to={headerMeta.to} className={styles.logo}>
          <div>
            <span className={styles.logoTitle}>{headerMeta.title}</span>
            <span className={styles.logoTagline}>{headerMeta.tagline}</span>
          </div>
        </Link>
      </div>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  )
}
