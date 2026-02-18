const express = require("express");
const router = express.Router();
const CSController = require("../controllers/CSController");

router.post("/", CSController.createCustomerService);
router.get("/", CSController.getAllCustomerService);
router.get("/status", CSController.getCustomerServiceByStatus);
router.get("/:id", CSController.getCustomerServiceById);
router.put("/:id", CSController.updateCustomerService);

module.exports = router;
