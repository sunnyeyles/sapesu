import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export const connectToDatabase = async () => {

  try {
    await mongoose.connect(uri)

    console.log('database connected! 🔌')
  } catch (error) {
    console.error('connection error 💩:', error)
  }
}
