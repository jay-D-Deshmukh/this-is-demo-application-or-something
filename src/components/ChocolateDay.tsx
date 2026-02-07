import './DayStyles.css'

function ChocolateDay() {
  return (
    <div className="day-page chocolate-day-theme">
      <div className="container day-container">
        <div className="hero-section">
          <div className="sparkles">🍫 ✨ 🍫</div>
          
          <h1 className="main-heading">
            Chocolate Day 🍫
          </h1>

          <div className="love-message">
            <p className="message-line">
              This is Chocolate Day - customize this component with your special message!
            </p>
            <p className="message-line highlight">
              Add your sweet words here. 💕
            </p>
          </div>

          <div className="day-emoji-large">🍫</div>
        </div>
      </div>
    </div>
  )
}

export default ChocolateDay
