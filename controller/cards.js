const Card = require("../models/Card.js");
const mongoose = require("mongoose");

const findCards = async (req, res) => {
  try {
    const cards = await Card.find()
      .populate("owner")
      .populate("likes")
      .orFail(new Error("No hay tarjetas"));
    res.send(cards);
  } catch (error) {
    res.status(500).send({ message: "Error al buscar tarjetas", error });
  }
};

const createCard = async (req, res) => {
  const { name, link   } = req.body;
  const owner = req.user._id;
  const newCard = new Card({ name, link, owner });
  try {
    const saveCard = await newCard.save();
    return res.status(201).json(saveCard);
  } catch (error) {
    res.status(400).send({ message: "Error al crear tarjeta", error });
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.cardId).orFail(() => new Error("DocumentNotFound"));
    res.status(200).send({ message: "Tarjeta eliminada exitosamente", card });
  } catch (error) {
    if (error.message === "DocumentNotFound") {
      return res.status(404).send({ message: "Tarjeta no encontrada" });
    }
    res.status(500).send({ message: "Error al borrar tarjeta", error });
  }
};

const likeCard = async (req, res) => {
  const updateLikeCarde = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    )
    res.send(updateLikeCarde);
}


const dislikeCard = async (req, res) => {
  const updateLikeCarde = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    )
    res.send(updateLikeCarde);
}



module.exports = { findCards, createCard, deleteCard, likeCard, dislikeCard };
