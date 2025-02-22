const express = require("express");
const router = express.Router();
const { getData } = require("../data/data");

router.get("/data", async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
