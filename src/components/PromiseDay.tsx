import { useState } from 'react'
import './DayStyles.css'
import './RingFlip.css'

function ProposeDay() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="day-page propose-day-theme">
      <div className="container day-container">
        <div className="hero-section">
          <div className="sparkles">💍 ✨ 💫 ✨ 💍</div>

          <h1 className="main-heading" style={{ color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            Propose Day 💍
          </h1>



          <div className="love-message">
            <p className="message-line">
              From the last few months we started talking, and what we share comes from the heart.
              All the fun talks, conversations about family, sharing things...
            </p>

            <p className="message-line">
              The small small things, what you feel about your family, listening to me,
              understanding me and my things... <span className="sweet-line">Like a best friend.</span>
            </p>

            <p className="message-line emotional">
              In all this process, I started liking you, and I've told you that many times.
              <strong> You mean so much to me.</strong>
            </p>

            <p className="message-line highlight">
              So on this day, I'm proposing to you... <em>to be my best friend for the rest of my life.</em> 💕
            </p>

            <p className="message-line">
              If you change your mind, I'll be there - don't worry.
              I don't want to lose you as a friend. <strong>You are the best thing that happened to me.</strong>
            </p>

            <div className="filmy-quote">
              <span className="quote-mark">"</span>
              This ring is for our friendship...
              <br />
              <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                (but who knows what the future holds? 💫)
              </span>
              <span className="quote-mark" style={{ float: 'right' }}>"</span>
            </div>
          </div>



          {/* Interactive Flipping Ring */}
          <div className="ring-flip-container">
            <div
              className={`ring-card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="ring-face ring-front">
                <div className="ring-emoji">💍</div>
                <div className="ring-label">Friendship Ring</div>
                <div className="ring-subtitle">Best Friends Forever</div>
              </div>

              <div className="ring-face ring-back">
                <div className="ring-emoji">💕</div>
                <div className="ring-label">Love Ring</div>
                <div className="ring-subtitle">Maybe... Someday? 💫</div>
              </div>
            </div>


            <p className="hint" style={{ marginTop: '30px', fontSize: '1.1rem' }}>
              ✨ Click the ring to see what it could become... ✨
            </p>
          </div>

          <div className="day-emoji-large" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
            borderRadius: '50%',
            padding: '40px',
            display: 'inline-block',
            marginTop: '40px'
          }}>
            🤝💕
          </div>
        </div>
      </div>

      <div className="footer-note">
        With love and friendship, always 💛
      </div>

      {/* Ring flip styles moved to RingFlip.css for Vite/CRA compatibility */}
    </div>
  )
}

export default ProposeDay