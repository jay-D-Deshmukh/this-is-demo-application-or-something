import { useState } from 'react'
import './App.css'

function App() {
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
      <div className="success-screen">
        <div className="success-content">
          <div className="heart-burst">
            {'💖'.repeat(20).split('').map((heart, i) => (
              <span key={i} className="burst-heart" style={{
                '--angle': `${(360 / 20) * i}deg`,
                animationDelay: `${i * 0.1}s`
              } as React.CSSProperties}>
                {heart}
              </span>
            ))}
          </div>
          <h1 className="success-title">Yayyy! 💕✨</h1>
          <div className="success-message">
            <p className="quote">"Tumne mere dil ki sun li! 💖"</p>
            <p className="message">
              I knew you'd say yes because you have the kindest heart I've ever known.
            </p>
            <p className="message">
              Thank you for being you, Vaishnavi. For listening to my random thoughts,
              for sharing your world with me, for making every conversation feel like home.
            </p>
            <p className="romantic-quote">
              "In a world full of temporary things,<br />
              you are my forever feeling." 🌸
            </p>
            <div className="final-hearts">
              💖 🌸 ✨ 💕 🌟 💖
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
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

export default App
