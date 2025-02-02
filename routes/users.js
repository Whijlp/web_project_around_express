const express = require("express");
const router = express.Router();
const userData = require("../data/user.json");

router.get("/", (req, res) => {
  res.send(userData);
});

module.exports = router