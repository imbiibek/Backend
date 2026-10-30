import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    number: {
      type: String,
      match: [/^\d{10}$/, "Phone number is Invalid "],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);