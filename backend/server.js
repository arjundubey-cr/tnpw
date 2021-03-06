import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import recruiters from './data/recruiters.js'

import recruiterRoutes from './routes/recruiterRoutes'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running... ')
})

const PORT = process.env.PORT || 5500
app.listen(
  5000,
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
)
