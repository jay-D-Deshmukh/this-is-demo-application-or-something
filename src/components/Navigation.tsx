import { Link, useLocation } from 'react-router-dom'
import type { DayConfig } from '../types'
import './Navigation.css'

interface NavigationProps {
  days: DayConfig[]
}

function Navigation({ days }: NavigationProps) {
  const location = useLocation()
  const isHistoryPage = location.pathname === '/history'

  return (
    <nav className="valentine-nav">
      <div className="nav-days">
        {days.map(day => (
          <Link
            key={day.id}
            to={day.unlocked ? `/day/${day.id}` : '#'}
            className={`nav-day-item ${location.pathname === `/day/${day.id}` ? 'active' : ''} ${!day.unlocked ? 'locked' : ''}`}
            title={day.unlocked ? day.name : `Unlocks on ${day.date}`}
            onClick={e => !day.unlocked && e.preventDefault()}
          >
            <span className="nav-emoji">{day.emoji}</span>
            <span className="nav-name">{day.name}</span>
            {!day.unlocked && <span className="lock-badge">🔒</span>}
          </Link>
        ))}
      </div>
      <div className="nav-header">
        <Link to="/history" className={`history-link ${isHistoryPage ? 'active' : ''}`}>
          History
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
