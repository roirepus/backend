import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
emai: {
    type: String,
    required: true,
    unique: true,
  },
password: {
    type: String,
    required: true,
  },
},{timestamps: true})

export const User = mongoose.model("User",userSchema)
