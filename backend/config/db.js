const mongoose = require('mongoose')
const { Pool } = require('pg')

// PostgreSQL connection
const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pgPool.connect()
  .then(() => console.log('✅ PostgreSQL connected'))
  .catch((err) => console.error('❌ PostgreSQL connection error:', err))

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err))

module.exports = {
  pgPool,
  mongoose
}
