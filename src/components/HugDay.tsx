import './DayStyles.css'

function HugDay() {
  return (
    <div className="day-page hug-day-theme">
      <div className="container day-container">
        <div className="hero-section">
          <div className="sparkles">🤗 ✨ 🤗</div>
          
          <h1 className="main-heading">
            Hug Day 🤗
          </h1>

          <div className="love-message">
            <p className="message-line">
              This is Hug Day - customize this component with your special message!
            </p>
            <p className="message-line highlight">
              Add your warm words here. 💕
            </p>
          </div>

          <div className="day-emoji-large">🤗</div>
        </div>
      </div>
    </div>
  )
}

export default HugDay
