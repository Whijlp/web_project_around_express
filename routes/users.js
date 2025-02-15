const express = require("express");
const router = express.Router();
const {getUsers,createUsers} = require("../controller/users");



router.get("/users", getUsers);
router.post("/users/:userId", createUsers);


module.exports = router;
