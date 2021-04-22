import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateTokens.js'

//@desc Auth user & get token
//@route POST /api/user/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { rollNumber, password } = req.body
  const user = await User.findOne({ rollNumber })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      rollNumber: user.rollNumber,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid Roll Number or Password')
  }
})

//@desc Register a new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, rollNumber, password } = req.body
  const userExists = await User.findOne({ rollNumber })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    rollNumber,
    password,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      rollNumber: user.rollNumber,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

//@desc Get user profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      rollNumber: user.rollNumber,
      fathersName: user.fathersName,
      mothersName: user.mothersName,
      dob: user.dob,
      cgpa: user.cgpa,
      tenthMarks: user.tenthMarks,
      twelfthMarks: user.twelfthMarks,
      year: user.year,
      resumeLink: user.resumeLink,
    })
  } else {
    res.status(404)
    throw new Error('User Not Found')
  }
})

//@desc Update user profile
//@route PUT /api/user/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName
    user.email = req.body.email || user.email
    user.rollNumber = req.body.rollNumber || user.rollNumber
    user.fathersName = req.body.fathersName || user.fathersName
    user.mothersName = req.body.mothersName || user.mothersName
    user.dob = req.body.dob || user.dob
    user.cgpa = req.body.cgpa || user.cgpa
    user.tenthMarks = req.body.tenthMarks || user.tenthMarks
    user.twelfthMarks = req.body.twelfthMarks || user.twelfthMarks
    user.year = req.body.year || user.year
    user.resumeLink = req.body.resumeLink || user.resumeLink
    if (req.body.password) {
      user.password = req.body.password
    }
    user.rollNumber = req.body.rollNumber || user.rollNumber
    // const {} = req.body
    console.log(user)
    const updatedUser = await user.save()
    res.status(201).json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      rollNumber: updatedUser.rollNumber,
      fathersName: updatedUser.fathersName,
      mothersName: updatedUser.mothersName,
      dob: updatedUser.dob,
      cgpa: updatedUser.cgpa,
      tenthMarks: updatedUser.tenthMarks,
      twelfthMarks: updatedUser.twelfthMarks,
      year: updatedUser.year,
      resumeLink: updatedUser.resumeLink,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User Not Found')
  }
})

//@desc Get all users
//@route GET /api/users/
//@access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

export { authUser, registerUser, getUserProfile, updateUserProfile, getUsers }
