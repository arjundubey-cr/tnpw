import mongoose from 'mongoose'

const recruiterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Recruiter = mongoose.model('recruiters', recruiterSchema)

export default Recruiter
