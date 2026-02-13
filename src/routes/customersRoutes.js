const express = require("express");
const router = express.Router();
const customersController = require("../controllers/customersController");

router.post("/", customersController.createCustomer);
router.get("/", customersController.getAllCustomers);
router.get("/name-search", customersController.getCustomersByName);
router.get("/:id", customersController.getCustomerById);
router.put("/:id", customersController.updateCustomer);

module.exports = router;
