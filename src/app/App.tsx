import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'

const Home                     = React.lazy(() => import('@/pages/Home/Home').then(m => ({ default: m.Home })))
const Presentations           = React.lazy(() => import('@/pages/Presentations/Presentations').then(m => ({ default: m.Presentations })))
const ProjectPresentation      = React.lazy(() => import('@/pages/ProjectPresentation/ProjectPresentation').then(m => ({ default: m.ProjectPresentation })))
const DictionaryPresentation   = React.lazy(() => import('@/pages/Dictionary/DictionaryPresentation').then(m => ({ default: m.DictionaryPresentation })))
const ReadingRoomPresentation  = React.lazy(() => import('@/pages/ReadingRoom/ReadingRoomPresentation').then(m => ({ default: m.ReadingRoomPresentation })))
const BukvarPresentation       = React.lazy(() => import('@/pages/Bukvar/BukvarPresentation').then(m => ({ default: m.BukvarPresentation })))
const Encyclopedia             = React.lazy(() => import('@/pages/Encyclopedia/Encyclopedia').then(m => ({ default: m.Encyclopedia })))
const Bot                      = React.lazy(() => import('@/pages/Bot/Bot').then(m => ({ default: m.Bot })))
const ReadingRoom              = React.lazy(() => import('@/pages/ReadingRoom/ReadingRoom').then(m => ({ default: m.ReadingRoom })))
const Bukvar                   = React.lazy(() => import('@/pages/Bukvar/Bukvar').then(m => ({ default: m.Bukvar })))
const SlovoApp                 = React.lazy(() => import('@/slovo/SlovoApp'))
const EncyclopediaOil          = React.lazy(() => import('@/pages/Encyclopedia/EncyclopediaOil').then(m => ({ default: m.EncyclopediaOil })))
const EncyclopediaContainership = React.lazy(() => import('@/pages/Encyclopedia/EncyclopediaContainership').then(m => ({ default: m.EncyclopediaContainership })))

const spinnerStyle: React.CSSProperties = {
  width: 40, height: 40,
  border: '3px solid var(--color-border, #e2e8f0)',
  borderTopColor: 'var(--color-primary, #16a34a)',
  borderRadius: '50%',
  animation: 'page-spin 0.7s linear infinite',
}

const PageLoader: React.FC = () => (
  <>
    <style>{`@keyframes page-spin { to { transform: rotate(360deg); } }`}</style>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '40vh' }}>
      <div style={spinnerStyle} />
    </div>
  </>
)

const S = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
)

const BASE = import.meta.env.BASE_URL

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true,                             element: <S><Home /></S> },
        { path: 'presentations',                  element: <S><Presentations /></S> },
        { path: 'project/presentation',           element: <S><ProjectPresentation /></S> },
        { path: 'dictionary/presentation',         element: <S><DictionaryPresentation /></S> },
        { path: 'reading-room/presentation',       element: <S><ReadingRoomPresentation /></S> },
        { path: 'bukvar/presentation',             element: <S><BukvarPresentation /></S> },
        { path: 'encyclopedia',                    element: <S><Encyclopedia /></S> },
        { path: 'bot',                             element: <S><Bot /></S> },
      ],
    },
    { path: 'reading-room',               element: <S><ReadingRoom /></S> },
    { path: 'bukvar',                     element: <S><Bukvar /></S> },
    { path: 'dictionary',                 element: <S><SlovoApp /></S> },
    { path: 'encyclopedia/oil',           element: <S><EncyclopediaOil /></S> },
    { path: 'encyclopedia/containership', element: <S><EncyclopediaContainership /></S> },
  ],
  { basename: BASE.endsWith('/') ? BASE.slice(0, -1) : BASE },
)

export function App() {
  return <RouterProvider router={router} />
}

export default App
