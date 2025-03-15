import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
   name: String,
   email: String,
   password: String,
   isVerified: false,
   role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
   },
   passwordResetToken: {
      type: String
   },
   passwordResetExpires: {
      type: Date
   },
   verificationToken: String,
   
   
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User