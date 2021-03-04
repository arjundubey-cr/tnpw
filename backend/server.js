const express = require('express')
const dotenv = require('dotenv')
const recruiters = require('./data/recruiters')

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running... ')
})

app.get('/api/recruiters', (req, res) => {
  res.json(recruiters)
})

app.listen(5000, console.log('Server running on port 5000'))
