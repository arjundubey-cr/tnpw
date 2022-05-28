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
  lowerLimitSalary: {
    type: Number,
    required: true,
  },
  upperLimitSalary: {
    type: Number,
    required: true,
  },
  lastDateToApply: {
    type: Date,
    required: true,
  },
})

const JobDetails = mongoose.model("Job", jobSchema)
export default JobDetails
