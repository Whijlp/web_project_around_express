const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  return fs.readFile(
    path.join(__dirname, "../data/user.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const userData = JSON.parse(data);
      res.send(userData);
    }
  );
});

router.get("/:userId", (req, res) => {
  const params = req.params;
  const userId = params.userId;

  return fs.readFile(
    path.join(__dirname, "../data/user.json"),
    "utf8",
    (err, data) => {
      if (err) {
        res.status(404).send({ message: "ID de usuario no encontrado" });
        return;
      }
      const userData = JSON.parse(data);
      const findUser = userData.find((items) => items._id === userId);
      if (!findUser) {
        res.status(404).send({ message: "ID de usuario no encontrado" });
        return;
      }
      res.send(findUser);
    }
  );
});
module.exports = router;
