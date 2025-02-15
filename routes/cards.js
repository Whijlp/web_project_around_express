const express = require("express");
const router = express.Router();
const { findCards, createCard } = require("../controller/cards");

router.get("/", findCards);
router.post("/", createCard);

module.exports = router;
