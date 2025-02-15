const express = require("express");
const router = express.Router();
const {findUsers,createUsers,getUser} = require("../controller/users");



router.get("/users", findUsers);
router.get("/users/:userId", getUser);
router.post("/users", createUsers);


module.exports = router;
