import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

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

app.listen(8080, () => {
  connect()
  console.log('app is listening!')
})
