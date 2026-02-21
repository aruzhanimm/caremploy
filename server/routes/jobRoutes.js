const express = require("express");
const Job = require("../models/Job");
const Resume = require("../models/Resume");
const cosineSimilarity = require("../utils/cosineSimilarity");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const { location, skill } = req.query;

  let filter = {};
  if (location) filter.location = location;
  if (skill) filter.skills = { $in: [skill] };

  const jobs = await Job.find(filter);
  res.json(jobs);
});

router.get("/match/:resumeId", protect, async (req, res) => {
  const resume = await Resume.findById(req.params.resumeId);
  const jobs = await Job.find();

  const vocabulary = [...new Set(jobs.flatMap(j => j.skills))];

  const userVector = vocabulary.map(skill =>
    resume.skills.includes(skill) ? 1 : 0
  );

  const results = jobs.map(job => {
    const jobVector = vocabulary.map(skill =>
      job.skills.includes(skill) ? 1 : 0
    );

    const similarity = cosineSimilarity(userVector, jobVector);
    return {
      job,
      matchPercentage: Math.round(similarity * 100)
    };
  });

  res.json(results);
});

module.exports = router;