const express = require("express");
const router = express.Router();
const CustomersController = require("../controllers/customersController");

router.post("/", CustomersController.CreateCustomer);
router.get("/", CustomersController.GetAllCustomers);
router.get("/name-search", CustomersController.GetCustomersByName);
router.get("/:id", CustomersController.GetCustomerById);
router.put("/:id", CustomersController.UpdateCustomer);

module.exports = router;
