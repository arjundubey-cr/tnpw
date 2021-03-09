import express from 'express'
import asyncHandler from 'express-async-handler'
import Recruiter from '../models/recruiterModel.js'

const router = express.Router()

// @desc Fetch list of Recruiters
// @route GET /api/products
// @access PUBLIC
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const recruiters = await Recruiter.find({})
    res.json(recruiters)
  })
)

export default router
