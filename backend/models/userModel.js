import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = mongoose.Schema(
  {
    rollNumber: {
      type: String,
      unique: true,
    },
    branch: {
      type: String,
    },
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
      default: '',
    },
    mothersName: {
      type: String,
      default: '',
    },
    dob: {
      type: Date,
      default: null,
    },
    cgpa: {
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
      default: '',
    },

    resumeLink: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
const User = mongoose.model('User', userSchema)

export default User
