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

  contactPerson: [
    {
      contactName: {
        type: String,
        required: true,
      },
      contactEmail: {
        type: String,
        required: true,
      },
    },
  ],
})

const departmentDetails = mongoose.model('Department', departmentSchema)
export default departmentDetails
