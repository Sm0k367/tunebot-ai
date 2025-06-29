require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { Pool } = require('pg')
const redis = require('redis')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// PostgreSQL
const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL
})

// MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err))

// Redis
const redisClient = redis.createClient({
  url: process.env.REDIS_URL
})
redisClient.connect().then(() => console.log('Redis connected'))

// Routes
app.get('/', (req, res) => {
  res.send('🎵 TuneBot API is running')
})

// TODO: Add route imports here (auth, chat, music, stripe)

app.listen(PORT, () => {
  console.log(`🚀 TuneBot backend running on http://localhost:${PORT}`)
})
