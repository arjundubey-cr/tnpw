import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import recruiters from './data/recruiters.js'
import User from './models/userModel.js'
import Recruiter from './models/recruiterModel.js'
import connectDB from './config/db.js'
import Recruiters from './models/recruiterModel.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Recruiters.deleteMany()

    await User.insertMany(users)
    await Recruiters.insertMany(recruiters)

    console.log('Data Imported')
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await Recruiters.deleteMany()
    console.log('Data Destroyed')
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
