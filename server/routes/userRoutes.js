const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/me", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

router.put("/profile", protect, async (req, res) => {
  const { name, bio, linkedin, github } = req.body;

  const updated = await User.findByIdAndUpdate(
    req.user.id,
    { name, bio, linkedin, github },
    { new: true }
  ).select("-password");

  res.json(updated);
});

router.put("/password", protect, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.user.id);

  const match = await bcrypt.compare(currentPassword, user.password);
  if (!match)
    return res.status(400).json({ message: "Current password incorrect" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.json({ message: "Password updated" });
});

router.get("/", protect, authorize("admin"), async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

module.exports = router;