const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  status: {
    type: String,
    enum: ["Interview", "Rejected", "Approved"],
    default: "Interview"
  }
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);