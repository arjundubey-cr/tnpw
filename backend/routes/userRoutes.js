import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'
import { protection } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile').get(protection, getUserProfile)
router.route('/').post(registerUser)
export default router
