import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

// app.use(cookieParser)
app.use(express.json())

app.use('/api/auth', authRoutes)

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
