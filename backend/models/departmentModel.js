import mongoose from 'mongoose'

const departmentSchema = mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
  },
  disciplines: {
    type: Array,
    required: true,
  },
  contactPerson: {
    type: Array,
    required: true,
  },
})
