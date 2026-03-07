import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
