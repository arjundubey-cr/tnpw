import express from "express"
import asyncHandler from "express-async-handler"
import Job from "../models/jobBoardModel.js"
const router = express.Router()

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const departmentDetails = await Job.find({})
    res.json(departmentDetails)
  })
)
export default router
