const express = require("express");
const router = express.Router();
const Customers = require("../models/customers");

//rota POST para criar clientes
router.post("/", async (req, res) => {
  try {
    const customer = new Customers(req.body);
    const save = await customer.save();
    res.status(201).json(save);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//rota GET para obter clientes
router.get("/", async (req, res) => {
  try {
    const customers = await Customers.find();
    res.status(201).json(customers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
