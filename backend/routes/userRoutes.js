import express from "express"
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getCompanies,
} from "../controllers/userController.js"
import { protection, isAdmin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(registerUser).get(protection, isAdmin, getUsers)
router.post("/login", authUser)
router.route("/profile").get(protection, getUserProfile).put(protection, updateUserProfile)
router.route("/companies").get(protection, getCompanies)
export default router
