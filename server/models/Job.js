const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  skills: [String],
  location: String
});

module.exports = mongoose.model("Job", jobSchema);