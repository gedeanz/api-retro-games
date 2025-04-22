const express = require("express");
const router = express.Router();
const jogoController = require("../controllers/jogoController");

router.get("/", jogoController.listarJogos);
router.get("/:id", jogoController.buscarPorId);
router.post("/", jogoController.criarJogo);
router.put("/:id", jogoController.atualizarJogo);
router.delete("/:id", jogoController.deletarJogo);

module.exports = router;