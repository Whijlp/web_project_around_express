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

app.use((req, res, next) => {
  req.user = {
    _id: '67b1044f532cda3d2efce06c' 
  };

  next();
});

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", cardRouter);



app.get("*", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
