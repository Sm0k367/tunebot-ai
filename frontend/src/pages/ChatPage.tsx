import React, { useState } from 'react'

const ChatPage: React.FC = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, `🧑‍🎤 You: ${input}`, `🤖 TuneBot: [AI-generated response to "${input}"]`])
    setInput('')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎧 Chat with TuneBot</h2>
      <div style={{ margin: '2rem 0', maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        placeholder="Describe your music idea..."
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '70%', padding: '0.75rem', fontSize: '1rem' }}
      />
      <button onClick={handleSend} style={{ padding: '0.75rem 1.5rem', marginLeft: '1rem' }}>
        Send
      </button>
    </div>
  )
}

export default ChatPage
