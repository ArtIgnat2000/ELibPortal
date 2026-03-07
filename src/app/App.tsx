import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from '@/pages/Home/Home'
import { ReadingRoom } from '@/pages/ReadingRoom/ReadingRoom'
import { ReadingRoomPresentation } from '@/pages/ReadingRoom/ReadingRoomPresentation'
import { Bukvar } from '@/pages/Bukvar/Bukvar'
import { BukvarPresentation } from '@/pages/Bukvar/BukvarPresentation'
import { Encyclopedia } from '@/pages/Encyclopedia/Encyclopedia'
import { EncyclopediaOil } from '@/pages/Encyclopedia/EncyclopediaOil'
import { EncyclopediaContainership } from '@/pages/Encyclopedia/EncyclopediaContainership'
import { Bot } from '@/pages/Bot/Bot'
import { DictionaryPresentation } from '@/pages/Dictionary/DictionaryPresentation'
import SlovoApp from '@/slovo/SlovoApp'

const BASE = import.meta.env.BASE_URL

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true,                             element: <Home /> },
        { path: 'dictionary/presentation',         element: <DictionaryPresentation /> },
        { path: 'reading-room/presentation',       element: <ReadingRoomPresentation /> },
        { path: 'bukvar/presentation',             element: <BukvarPresentation /> },
        { path: 'encyclopedia',                    element: <Encyclopedia /> },
        { path: 'bot',                             element: <Bot /> },
      ],
    },
    { path: 'reading-room',              element: <ReadingRoom /> },
    { path: 'bukvar',                    element: <Bukvar /> },
    { path: 'dictionary',                element: <SlovoApp /> },
    { path: 'encyclopedia/oil',          element: <EncyclopediaOil /> },
    { path: 'encyclopedia/containership', element: <EncyclopediaContainership /> },
  ],
  { basename: BASE.endsWith('/') ? BASE.slice(0, -1) : BASE },
)

export function App() {
  return <RouterProvider router={router} />
}

export default App
