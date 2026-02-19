const express = require("express");
const router = express.Router();
const CustomerServiceMessagesController = require("../controllers/CustomerServiceMessagesController");

router.post(
  "/",
  CustomerServiceMessagesController.CreateCustomerServiceMessage,
);
router.get(
  "/customer-service/:id",
  CustomerServiceMessagesController.GetMessagesByIdCustomerService,
);
router.get("/:id", CustomerServiceMessagesController.GetMessagesById);
router.put("/:id", CustomerServiceMessagesController.UpdateMessage);

module.exports = router;
