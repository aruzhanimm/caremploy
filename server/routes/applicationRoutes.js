const express = require("express");
const Application = require("../models/Application");
const Job = require("../models/Job");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/:jobId", protect, async (req, res) => {
  const existing = await Application.findOne({
    user: req.user.id,
    job: req.params.jobId
  });

  if (existing)
    return res.status(400).json({ message: "Already applied" });

  const job = await Job.findById(req.params.jobId);
  if (!job) return res.status(404).json({ message: "Job not found" });

  const application = await Application.create({
    user: req.user.id,
    job: job._id
  });

  res.json(application);
});

router.get("/my", protect, async (req, res) => {
  const applications = await Application.find({ user: req.user.id })
    .populate("job");

  res.json(applications);
});

router.put("/:id/status", protect, authorize("admin", "employer"), async (req, res) => {
  const { status } = req.body;

  if (!["Interview", "Rejected", "Approved"].includes(status))
    return res.status(400).json({ message: "Invalid status" });

  const application = await Application.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(application);
});

module.exports = router;