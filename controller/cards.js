const Card = require("../models/Card");
const mongoose = require("mongoose");

const findCards = async (req, res) => {
  try {
    const cards = await Card.find()
      .populate("owner")
      .populate("likes")
      .orFail(new Error("No hay tarjetas"));
    res.json(cards);
  } catch (error) {
    res.status(500).send({ message: "Error al buscar tarjetas", error });
  }
};

const createCard = async (req, res) => {
  const { name, link,  } = req.body;
  const owner = req.user._id;
  const newCard = new Card({ name, link, owner });

  try {
    const saveCard = await newCard.save();
    return res.status(201).json(saveCard);
  } catch (error) {
    res.status(400).send({ message: "Error al crear tarjeta", error });
  }
};

module.exports = { findCards, createCard };
