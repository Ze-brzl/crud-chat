const express = require("express");
const router = express.Router();
const Users = require("../models/users");

//Rota POST para criar o usuario
router.post("/", async (req, res) => {
  try {
    const user = new Users(req.body);
    const save = await user.save();
    res.status(201).json(save);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//rota GET para obter os usuários
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(201).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//rota PUT para atualizar um usuário
router.put("/:id", async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ mensagem: "Usuário atualizado com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
