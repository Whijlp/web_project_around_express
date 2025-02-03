const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");



router.get("/", (req, res) => {
  return fs.readFile(path.join(__dirname, "../data/card.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const cardData = JSON.parse(data);
    res.send(cardData);
    console.log(cardData);
  })
});

router.get("/:cardsId", (req, res) => {
  const params = req.params;
  const cardsId = params.cardsId;

  return fs.readFile(path.join(__dirname, "../data/card.json"), "utf8", (err, data) => {
  if (err) {
    res.status(404).send({ message: "ID de usuario no encontrado" });
    return;
  }
  const cardData = JSON.parse(data);
  const findCard = cardData.find((items) => items._id === cardsId);
  if(!findCard) {
    res.status(404).send({ message: "ID de usuario no encontrado" });
    return;
  }
  res.send(findCard);
})
});


module.exports = router