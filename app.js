const express = require("express");
const router = express.Router();
const userRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/cards", cardRouter);


app.get("*", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado"});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
