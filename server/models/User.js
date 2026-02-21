const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["user", "employer", "admin"],
    default: "user"
  },
  bio: String,
  linkedin: String,
  github: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);