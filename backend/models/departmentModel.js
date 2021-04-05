import mongoose from 'mongoose'

const departmentSchema = mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
  },
  disciplines: [
    {
      type: String,
      required: true,
    },
  ],
  contactPerson: {
    type: Map,
    of: String,
  },
})

const departmentDetails = mongoose.model('Department', departmentSchema)
export default departmentDetails
