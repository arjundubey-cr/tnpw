import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import recruiterRoutes from './routes/recruiterRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running... ')
})

app.use('/api/recruiters', recruiterRoutes)
app.use('/api/departmentdetails', departmentRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5500
app.listen(
  5000,
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
)
