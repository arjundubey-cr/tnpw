import mongoose from 'mongoose'

const userDetailsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  fathersName: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  cumulativeCGPA: {
    type: Number,
    required: true,
  },
  tenthMarks: {
    type: String,
    required: true,
  },
  twelfthMarks: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
})

const UserDetails = mongoose.model('userDetails', userDetailsSchema)
export default UserDetails
