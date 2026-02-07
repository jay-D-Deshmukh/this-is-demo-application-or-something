import { useState } from 'react'
import './DayStyles.css'

function RoseDay() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showSuccess, setShowSuccess] = useState(false)
  const [noAttempts, setNoAttempts] = useState(0)

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 80

    const newX = Math.random() * maxX
    const newY = Math.random() * maxY

    setNoButtonPosition({ x: newX, y: newY })
    setNoAttempts(prev => prev + 1)
  }

  const handleYes = () => {
    setShowSuccess(true)
  }

  const getNoButtonText = () => {
    if (noAttempts === 0) return "No 😒"
    if (noAttempts === 1) return "Wait... reconsider? 🥺"
    if (noAttempts === 2) return "Really? 😢"
    if (noAttempts === 3) return "Think again... 💔"
    if (noAttempts >= 4) return "Impossible! 😤"
    return "No 😒"
  }

  if (showSuccess) {
    return (
      <div className="success-screen rose-day-theme">
        <div className="success-content">
          {/* Rose petals falling */}
          <div className="rose-petals">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="petal"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                  '--rotation': `${Math.random() * 360}deg`
                } as React.CSSProperties}
              >
                🌹
              </div>
            ))}
          </div>

          {/* Animated Rose Bloom */}
          <div className="rose-bloom">
            <div className="rose-container">
              <div className="rose-emoji">🌹</div>
            </div>
          </div>

          <h1 className="success-title rose-day-title">
            🌹 Happy Rose Day! 🌹
          </h1>

          <div className="success-message rose-day-content">
            <p className="rose-quote">
              "Tumne mere dil ki sun li! 💖"
            </p>

            <div className="rose-comparison">
              <h2 className="comparison-title">They Say Roses Are Beautiful...</h2>

              <div className="comparison-card">
                <div className="comparison-icon">🌹</div>
                <p className="comparison-text">
                  Roses are red, delicate, and admired by everyone who sees them.
                </p>
              </div>

              <div className="comparison-divider">
                <span className="divider-text">But Vaishnavi...</span>
              </div>

              <div className="comparison-card highlight">
                <div className="comparison-icon">✨</div>
                <p className="comparison-text">
                  <strong>You are a garden of roses</strong> — Your smile blooms brighter
                  than any flower, your kindness is more fragrant than any perfume,
                  and your presence makes every moment feel like spring. 🌸
                </p>
              </div>

              <div className="comparison-card highlight">
                <div className="comparison-icon">💕</div>
                <p className="comparison-text">
                  A rose lasts a few days, but <strong>the way you make me feel</strong> —
                  that's eternal. Your beauty isn't just in how you look,
                  it's in your laughter, your words, your soul. 🌟
                </p>
              </div>

              <div className="comparison-card highlight">
                <div className="comparison-icon">🌹</div>
                <p className="comparison-text">
                  Roses have thorns to protect their beauty, but you —
                  you protect my heart with your care, your understanding,
                  and the warmth you bring to my life. 💖
                </p>
              </div>
            </div>

            <div className="rose-poem">
              <p className="poem-line">गुलाब तो हज़ारों हैं बाज़ार में,</p>
              <p className="poem-line">पर तुम जैसी एक ही हो इस संसार में। 🌹</p>
              <p className="poem-line">फूलों की खुशबू फीकी है तेरे सामने,</p>
              <p className="poem-line">क्योंकि तू खुद एक महकता गुलिस्तान है। ✨</p>
            </div>

            <div className="rose-day-message">
              <p className="final-message">
                On this Rose Day, I want you to know — every rose I see reminds me of you,
                but none can ever match your grace, your beauty, your soul.
              </p>
              <p className="final-message">
                Thank you for saying yes, Vaishnavi.
                You've made this Rose Day, and every day, infinitely more beautiful. 🌹💕
              </p>
            </div>

            <div className="rating-banner">
              <div className="rating-stars">⭐⭐⭐⭐⭐</div>
              <p className="rating-text">Vaishnavi: 11/10 ✨</p>
              <p className="rating-subtext">Roses: 10/10 🌹</p>
              <p className="rating-note">(You win, always. 💖)</p>
            </div>

            <div className="final-hearts">
              🌹 💖 ✨ 🌸 💕 🌹
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="day-page">
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 20}px`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="container">
        <div className="hero-section">
          <div className="sparkles">✨ 💕 ✨</div>

          <h1 className="main-heading">
            Vaishnavi,<br />
            Will you be my Valentine? 💖
          </h1>

          <div className="love-message">
            <p className="message-line">
              देखो, मैं कोई शायर नहीं हूँ, but I know one thing for sure...
            </p>
            <p className="message-line highlight">
              <strong>You are incredibly pretty</strong> — not just on the outside,
              but the kind of pretty that lights up a room, that makes ordinary moments feel special. 🌸
            </p>

            <p className="message-line">
              I know you have sugar allergies and can't eat sweets, but honestly...
              <span className="sweet-line">love is sweeter than any sugar could ever be,</span>
              and what I feel for you is the sweetest thing in my life. 💕
            </p>

            <p className="message-line">
              Thank you for <em>listening</em> — really listening — when I talk.
              Thank you for sharing your thoughts, your dreams, your little everyday stories.
              They mean the world to me. 🌟
            </p>

            <p className="message-line emotional">
              I know you live away from your family and miss them dearly.
              I can't replace them, but I promise to be there for you —
              to listen when you miss home, to care when you need comfort,
              to remind you that even though they're far,
              <strong> you're loved from every direction</strong>. 💖
            </p>

            <p className="message-line">
              Family is everything, and I understand that.
              I want to be someone who makes you feel less alone,
              someone who adds to your happiness, not just on special days,
              but in all the quiet, ordinary moments too.
            </p>

            <div className="filmy-quote">
              <span className="quote-mark">"</span>
              Tum mere liye sirf ek crush nahi ho,<br />
              Tum woh feeling ho jo dil ko sukoon deti hai.
              <span className="quote-mark">"</span>
            </div>
          </div>

          <div className="buttons-container">
            <button className="yes-button" onClick={handleYes}>
              Yes 💕
            </button>

            <button
              className="no-button"
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{
                position: noAttempts > 0 ? 'fixed' : 'relative',
                left: noAttempts > 0 ? `${noButtonPosition.x}px` : 'auto',
                top: noAttempts > 0 ? `${noButtonPosition.y}px` : 'auto',
                transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}
            >
              {getNoButtonText()}
            </button>
          </div>

          <p className="hint">
            (Psst... the "Yes" button is the right choice 😉)
          </p>
        </div>
      </div>

      <div className="footer-note">
        Made with 💖 and lots of feelings
      </div>
    </div>
  )
}

export default RoseDay
