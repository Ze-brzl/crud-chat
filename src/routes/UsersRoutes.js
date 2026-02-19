const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersController");

router.post("/", UsersController.CreateUser);
router.get("/", UsersController.GetAllUsers);
router.get("/name-search", UsersController.GetUserByName);
router.get("/:id", UsersController.GetUserById);
router.put("/:id", UsersController.UpdateUser);

module.exports = router;
