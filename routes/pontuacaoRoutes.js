const express = require("express");
const router = express.Router();
const pontuacaoController = require("../controllers/pontuacaoController");

router.post("/", pontuacaoController.registrarPontuacao);
router.get("/ranking/:idJogo", pontuacaoController.ranking);
router.get("/jogos/populares", pontuacaoController.jogosPopulares);

module.exports = router;
