const express = require("express");
const router = express.Router();

// Controllers
const { pairs, traditional } = require("../controllers/gifts/index");

router.post("/pairs", pairs)
router.post("/traditional", traditional)

module.exports = router;