const express = require("express");
const router = express.Router();
const userRouter = require("./routes/users");
const cardRouter = require("./routes/cards");
const mongoose = require("mongoose");
const user = require("./models/User");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST ;

const DB_NAME = process.env.DB_NAME ;
mongoose.connect(`${DB_HOST}/${DB_NAME}`)



const app = express();

const PORT = process.env.PORT;


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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
