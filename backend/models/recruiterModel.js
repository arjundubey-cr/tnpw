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

const Recruiters = mongoose.model('recruiters', recruiterSchema)

export default Recruiters
