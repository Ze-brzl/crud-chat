const express = require("express");
const router = express.Router();
const CustomerServicesController = require("../controllers/CSController");

router.post("/", CustomerServicesController.CreateCustomerService);
router.get("/", CustomerServicesController.GetAllCustomerService);
router.get("/status", CustomerServicesController.GetCustomerServiceByStatus);
router.get("/:id", CustomerServicesController.GetCustomerServiceById);
router.put("/:id", CustomerServicesController.UpdateCustomerService);

module.exports = router;
