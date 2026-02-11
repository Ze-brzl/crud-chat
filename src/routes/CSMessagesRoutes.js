const express = require("express");
const router = express.Router();
const CSMessages = require("../models/CSMessages");

//rota POST pra criar um registro
router.post("/", async (req, res) => {
  try {
    const csMessage = new CSMessages(req.body);
    const save = await csMessage.save();
    res.status(201).json(save);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//rota GET para obter os registros
router.get("/", async (req, res) => {
  try {
    const messages = await CSMessages.find();
    res.status(201).json(messages);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//rota GET para buscar mensagens por idCustomerService
router.get("/customer-service/:id", async (req, res) => {
  try {
    const messages = await CSMessages.find({
      idCustomerService: req.params.id,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//rota PUT para deletar uma mensagem
router.put("/:id", async (req, res) => {
  try {
    const update = await CSMessages.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(update);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;
