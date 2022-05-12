import mongoose from "mongoose"

const jobSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  lastDateToApply: {
    type: Date,
    required: true,
  },
})

const jobDetails = mongoose.model("Job", jobSchema)
export default jobDetails
