const express = require("express");
const { createFarm, getUserFarms } = require("../controllers/farmController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Add protect middleware
router.post("/", protect, createFarm);
router.get("/", protect, getUserFarms);

module.exports = router;

