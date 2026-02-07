import type { DayConfig } from '../types'
import './Navigation.css'

interface LockedDayProps {
  day: DayConfig
}

function LockedDay({ day }: LockedDayProps) {
  return (
    <div className="locked-day">
      <div className="locked-content">
        <div className="lock-icon">🔒</div>
        <h2>{day.name} {day.emoji}</h2>
        <p>This day unlocks on {day.date}</p>
        <p>Come back soon to see your special message!</p>
        <div className="countdown-emoji">{day.emoji}</div>
      </div>
    </div>
  )
}

export default LockedDay
