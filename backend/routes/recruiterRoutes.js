import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json(recruiters)
})

export default router
