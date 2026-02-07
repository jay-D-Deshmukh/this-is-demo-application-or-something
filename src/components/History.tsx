import { Link } from 'react-router-dom'
import type { DayConfig } from '../types'
import './Navigation.css'

interface HistoryProps {
  unlockedDays: DayConfig[]
}

function History({ unlockedDays }: HistoryProps) {
  return (
    <div className="history-page">
      <div className="history-container">
        <h1 className="history-title">📚 Valentine's Week History</h1>

        {unlockedDays.length === 0 ? (
          <div className="no-history">
            <p>No days unlocked yet. The magic begins on Rose Day! 🌹</p>
            <p>Come back when the dates unlock to see your special messages.</p>
          </div>
        ) : (
          <div className="history-grid">
            {unlockedDays.map(day => (
              <Link
                key={day.id}
                to={`/day/${day.id}`}
                className="history-card"
              >
                <div className="history-emoji">{day.emoji}</div>
                <h3>{day.name}</h3>
                <p>{day.date}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default History
