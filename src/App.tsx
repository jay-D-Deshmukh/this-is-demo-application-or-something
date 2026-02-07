import { useMemo } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import History from './components/History'
import LockedDay from './components/LockedDay'
import RoseDay from './components/RoseDay'
import ProposeDay from './components/ProposeDay'
import ChocolateDay from './components/ChocolateDay'
import TeddyDay from './components/TeddyDay'
import PromiseDay from './components/PromiseDay'
import HugDay from './components/HugDay'
import KissDay from './components/KissDay'
import ValentineDay from './components/ValentineDay'
import type { DayConfig } from './types'

const DAY_ROUTES: Record<string, React.ComponentType> = {
  'rose-day': RoseDay,
  'propose-day': ProposeDay,
  'chocolate-day': ChocolateDay,
  'teddy-day': TeddyDay,
  'promise-day': PromiseDay,
  'hug-day': HugDay,
  'kiss-day': KissDay,
  'valentine-day': ValentineDay,
}

const VALENTINE_DAYS: Omit<DayConfig, 'unlocked'>[] = [
  { id: 'rose-day', name: 'Rose Day', date: '2026-02-07', emoji: '🌹' },
  { id: 'propose-day', name: 'Propose Day', date: '2026-02-08', emoji: '💍' },
  { id: 'chocolate-day', name: 'Chocolate Day', date: '2026-02-09', emoji: '🍫' },
  { id: 'teddy-day', name: 'Teddy Day', date: '2026-02-10', emoji: '🧸' },
  { id: 'promise-day', name: 'Promise Day', date: '2026-02-11', emoji: '🤝' },
  { id: 'hug-day', name: 'Hug Day', date: '2026-02-12', emoji: '🤗' },
  { id: 'kiss-day', name: 'Kiss Day', date: '2026-02-13', emoji: '💋' },
  { id: 'valentine-day', name: "Valentine's Day", date: '2026-02-14', emoji: '💖' },
]

function DayRoute() {
  const { dayId } = useParams<{ dayId: string }>()
  const today = new Date().toISOString().split('T')[0]

  const days = useMemo(() => {
    return VALENTINE_DAYS.map(d => ({
      ...d,
      unlocked: d.date <= today,
    }))
  }, [today])

  const day = days.find(d => d.id === dayId)
  if (!dayId || !day) {
    return <Navigate to="/" replace />
  }

  const DayComponent = DAY_ROUTES[dayId]
  if (day.unlocked && DayComponent) {
    return <DayComponent />
  }

  return <LockedDay day={day} />
}

function App() {
  const today = new Date().toISOString().split('T')[0]

  const days = useMemo(() => {
    return VALENTINE_DAYS.map(d => ({
      ...d,
      unlocked: d.date <= today,
    }))
  }, [today])

  const currentDay = days.find(d => d.unlocked && d.date === today) ?? days.find(d => d.unlocked)
  const unlockedDays = days.filter(d => d.unlocked)

  return (
    <div className="app">
      <Navigation days={days} />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={currentDay ? `/day/${currentDay.id}` : '/history'}
              replace
            />
          }
        />
        <Route path="/day/:dayId" element={<DayRoute />} />
        <Route path="/history" element={<History unlockedDays={unlockedDays} />} />
      </Routes>
    </div>
  )
}

export default App
