import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'

const Home                     = React.lazy(() => import('@/pages/Home/Home').then(m => ({ default: m.Home })))
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

const PageLoader: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', fontSize: 28 }}>
    ⏳
  </div>
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
