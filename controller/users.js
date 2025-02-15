
const userModel = require("../models/User");

const getUsers = async (req, res) => {
  try{const users =(await userModel.find());
  res.json(users)}catch(error){
    res.status(500).send({ message: "Error al buscar usuarios",error });
  }
}


const createUsers = async (req, res) => {
  try{const{ name, about, avatar } = req.body;
  const newUser = (await userModel.create(req.body));
  res.send(newUser)}catch(error){
    res.status(400).send({ message: "Error al crear usuario",error });
  }
}

module.exports = {getUsers,createUsers};
