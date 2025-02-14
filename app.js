const express = require("express");
const router = express.Router();
const userRouter = require("./routes/users");
const cardRouter = require("./routes/cards");
const mongoose = require("mongoose");
const user = require("./models/User");

mongoose.connect("mongodb://0.0.0.0:27017/aroundb", {

}).then(() => {
  console.log("Coneccion exitosa");
}).catch((error) => {
  console.error("Error de coneccion", error);
});

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/cards", cardRouter);

app.get("/users", (req, res) => {
  user.find({})
  .then((response) => {
    res.send(response);
  })
  .catch((error) => {
    res.status(400).send({ message: "Error al buscar usuarios",error });
})
 })

app.get("*", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
