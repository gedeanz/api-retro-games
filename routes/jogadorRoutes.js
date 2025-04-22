const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");

router.get("/", jogadorController.listarJogadores);
router.post("/", jogadorController.criarJogador);

module.exports = router;
