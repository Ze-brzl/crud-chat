const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { get } = require("mongoose");

router.post("/", usersController.createUser);
router.get("/", usersController.getAllUsers);
router.get("/name-search", usersController.getUserByName);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);

module.exports = router;
