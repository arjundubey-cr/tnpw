import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protection = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      console.log(token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      console.log(req.user)
      next()
    } catch (err) {
      console.error(err)
      res.status(401)
      throw new Error('Not Auth, Token Failed')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not Authorized')
  }
})
export { protection }
