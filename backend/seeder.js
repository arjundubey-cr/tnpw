import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from './data/users.js'
import recruiters from './data/ourRecruiters.js'
import departmentData from './data/departmentData.js'

import User from './models/userModel.js'
import connectDB from './config/db.js'
import Recruiters from './models/recruiterModel.js'
import DepartmentDetails from './models/departmentModel.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Recruiters.deleteMany()
    await DepartmentDetails.deleteMany()

    await User.insertMany(users)
    await Recruiters.insertMany(recruiters)
    await DepartmentDetails.insertMany(departmentData)
    await console.log('Data Imported')
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
