require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { pgPool } = require('../config/db')
const mongoose = require('mongoose')
const redis = require('redis')

const authRoutes = require('./routes/auth')
const chatRoutes = require('./routes/chat')
const musicRoutes = require('./routes/music')
const stripeRoutes = require('./routes/stripe')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Redis
const redisClient = redis.createClient({ url: process.env.REDIS_URL })
redisClient.connect().then(() => console.log('✅ Redis connected')).catch(console.error)

// Routes
app.get('/', (req, res) => {
  res.send('🎵 TuneBot API is running')
})
app.use('/api/auth', authRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/music', musicRoutes)
app.use('/api/stripe', stripeRoutes)

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 TuneBot backend running at http://localhost:${PORT}`)
})
