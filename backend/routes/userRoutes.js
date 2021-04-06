import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protection } from '../middleware/authMiddleware.js'
router.post('/login', authUser)
router.route('/profile').get(protection, getUserProfile)
export default router
