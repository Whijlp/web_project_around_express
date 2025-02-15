const userModel = require("../models/User");

const findUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).send({ message: "Error al buscar usuarios", error });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    res.status(404).send({ message: "Error al buscar usuario", error });
  }
};

const createUsers = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser =  new userModel({name, about, avatar});
    const saveUser = await newUser.save();
    return res.status(201).json(saveUser);
  } catch (error) {
    res.status(400).send({ message: "Error al crear usuario", error });
  }
};

module.exports = { findUsers, createUsers, getUser };
