const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

// In-memory user store (replace with PostgreSQL or MongoDB in production)
const users = []

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body
  const existing = users.find(u => u.email === email)
  if (existing) return res.status(400).json({ error: 'User already exists' })

  const hashed = await bcrypt.hash(password, 10)
  users.push({ email, password: hashed })
  res.json({ message: 'User registered' })
})

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = users.find(u => u.email === email)
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
  res.json({ token })
})

// Verify Token
router.get('/verify', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Missing token' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    res.json({ valid: true, user: decoded })
  } catch {
    res.status(403).json({ error: 'Invalid token' })
  }
})

module.exports = router
