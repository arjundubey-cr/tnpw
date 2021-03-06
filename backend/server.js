import express from 'express'
import { config } from 'dotenv'
import recruiters from './data/recruiters.js'

config()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running... ')
})

app.get('/api/recruiters', (req, res) => {
  res.json(recruiters)
})

const PORT = process.env.PORT || 5500
app.listen(
  5000,
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
)
