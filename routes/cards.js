const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const cardData = require("../data/card.json");


fs.readFile(path.join(__dirname, "../data/card.json"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const cardData = JSON.parse(data);
  console.log(cardData);
})


router.get("/", (req, res) => {
  res.send(cardData);
});

router.get("/:cardsId", (req, res) => {
  const params = req.params;
  const cardsId = params.cardsId;
  const findCard = cardData.find((items) => items._id === cardsId);

  if (!findCard) {
    res.status(404).send({ message: "ID de usuario no encontrado" });
    return;
  }

  res.send(cardData);
});


module.exports = router