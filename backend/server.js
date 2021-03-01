const express = require('express')
const app = express()
const recruiters = require('./data/recruiters')

app.get('/', (req, res) => {
  res.send('API is running... ')
})

app.get('/api/recruiters', (req, res) => {
  res.json(recruiters)
})

app.listen(5000, console.log('Server running on port 5000'))
