import './DayStyles.css'

function TeddyDay() {
  return (
    <div className="day-page teddy-day-theme">
      <div className="container day-container">
        <div className="hero-section">
          <div className="sparkles">🧸 ✨ 🧸</div>
          
          <h1 className="main-heading">
            Teddy Day 🧸
          </h1>

          <div className="love-message">
            <p className="message-line">
              This is Teddy Day - customize this component with your special message!
            </p>
            <p className="message-line highlight">
              Add your cuddly words here. 💕
            </p>
          </div>

          <div className="day-emoji-large">🧸</div>
        </div>
      </div>
    </div>
  )
}

export default TeddyDay
