import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>🎵 Welcome to TuneBot</h1>
      <p>Create music with AI using natural language.</p>
      <Link to="/chat">
        <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem' }}>
          Start Chatting →
        </button>
      </Link>
    </div>
  )
}

export default HomePage
