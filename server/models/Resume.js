const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  skills: [String],
  template: {
    type: String,
    enum: ["academic", "johnson", "modern", "minimal"]
  }
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);