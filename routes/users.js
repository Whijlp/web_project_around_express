const express = require("express");
const router = express.Router();
const {findUsers,createUsers,getUser, userMe, userAvatar} = require("../controller/users");

router.get("/users", findUsers);
router.get("/users/:userId", getUser);
router.post("/users", createUsers);
router.patch("/users/me", userMe);
router.patch("/users/me/avatar", userAvatar);

module.exports = router;
