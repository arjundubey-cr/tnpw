import express from "express"
import asyncHandler from "express-async-handler"
import Job from "../models/jobBoardModel.js"
import User from "../models/userModel.js"
const router = express.Router()

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const departmentDetails = await Job.find({})
    res.json(departmentDetails)
  })
)
router.post(
  "/apply",
  asyncHandler(async (req, res) => {
    const requestBody = req.body
    console.log(requestBody)
    const userDetails = await User.findById(requestBody.userID)
    userDetails.appliedArray.push(requestBody.jobID)
    const updatedUser = await userDetails.save()
    res.json(updatedUser)
  })
)
export default router
