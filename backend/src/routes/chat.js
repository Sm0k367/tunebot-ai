const express = require('express')
const router = express.Router()
// const { OpenAI } = require('openai') // Uncomment if using OpenAI

// Example AI response (replace with real AI logic)
router.post('/', async (req, res) => {
  const { message } = req.body
  if (!message) return res.status(400).json({ error: 'Message required' })

  // Simulated AI reply
  const reply = `🎶 Generating music based on: "${message}"...`

  res.json({ reply })
})

module.exports = router
