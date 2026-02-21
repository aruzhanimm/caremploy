const express = require("express");
const Resume = require("../models/Resume");
const { protect } = require("../middleware/authMiddleware");
const { askGemini } = require("../utils/geminiService");

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const { content, skills, template } = req.body;

  const resume = await Resume.create({
    user: req.user.id,
    content,
    skills,
    template
  });

  res.json(resume);
});

router.get("/", protect, async (req, res) => {
  const resumes = await Resume.find({ user: req.user.id });
  res.json(resumes);
});

router.put("/:id", protect, async (req, res) => {
  const resume = await Resume.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  if (!resume) return res.status(404).json({ message: "Resume not found" });

  res.json(resume);
});

router.delete("/:id", protect, async (req, res) => {
  await Resume.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });

  res.json({ message: "Resume deleted" });
});

router.post("/improve", protect, async (req, res) => {
  const { text } = req.body;

  const prompt = `
Improve this resume section professionally.
Make it concise, impactful, and ATS-friendly:

${text}
`;

  const improved = await askGemini(prompt);

  res.json({ improved });
});

module.exports = router;