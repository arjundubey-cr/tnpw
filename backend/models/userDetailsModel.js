import mongoose from 'mongoose'

const userDetailsSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  fathersName: {
    type: String,
  },
  mothersName: {
    type: String,
  },
  dob: {
    type: Date,
  },
  cumulativeCGPA: {
    type: Number,
  },
  tenthMarks: {
    type: String,
  },
  twelfthMarks: {
    type: String,
  },
  year: {
    type: String,
  },
  resumeLink: {
    type: String,
  },
})

const UserDetails = mongoose.model('userDetails', userDetailsSchema)
export default UserDetails
