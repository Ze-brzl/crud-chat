const express = require("express");
const router = express.Router();
const customerService = require("../models/customerService");

//rota POST para criar um atendimento
router.post("/", async (req, res) => {
  try {
    const newCustomerService = new customerService(req.body); //precisa ter um nome diferente do declarado nos imports do inicio do arquivo
    const save = await newCustomerService.save();
    res.status(201).json(save);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//rota GET para obter os atendimentos
router.get("/", async (req, res) => {
  try {
    const findCustomerServices = await customerService.find();
    res.status(201).json(findCustomerServices);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//rota GET para obter atendimentos por status:
router.get("/status/:status", async (req, res) => {
  try {
    const customerServiceStatus = req.params.status;
    const findCustomerServiceByStatus = await customerService.find({
      status: customerServiceStatus,
    });
    res.status(201).json(findCustomerServiceByStatus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//rota PUT para atualizar um atendimento
router.put("/:id", async (req, res) => {
  try {
    const updated = await customerService.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json({ updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
