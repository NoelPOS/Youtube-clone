import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/videos.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong'
  return res.status(status).json({
    success: false,
    status,
    message,
  })
})

app.get('/', (req, res) => {
  res.send('hello!')
})

const connect = () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log('Connected to the database!')
    })
    .catch((error) => {
      throw error
    })
}

app.listen(5050, () => {
  connect()
  console.log('app is listening!')
})
