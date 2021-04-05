import express from 'express'
import asyncHandler from 'express-async-handler'
import Department from '../models/departmentModel.js'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const departmentDetails = await Department.find({})
    res.json(departmentDetails)
  })
)
export default router
