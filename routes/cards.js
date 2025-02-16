const express = require("express");
const router = express.Router();
const { findCards, createCard,deleteCard,likeCard, dislikeCard } = require("../controller/cards");

router.get("/cards", findCards);
router.post("/cards", createCard);
router.delete("/cards/:cardId", deleteCard);
router.put("/cards/:cardId/likes", likeCard);
router.delete("/cards/:cardId/likes", dislikeCard);

module.exports = router;
