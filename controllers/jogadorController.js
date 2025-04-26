const jogadorModel = require("../models/jogadorModel");

exports.listarJogadores = (req, res) => {
  jogadorModel.getAll((err, resultados) => {
    if (err) return res.status(500).send("Erro ao listar jogadores.");

    if (resultados.length === 0) {
      return res.status(200).send("Nenhum jogador cadastrado no momento.");
    }

    res.json(resultados);
  });
};

exports.criarJogador = (req, res) => {
  const novoJogador = req.body;

  if (!novoJogador.nome || !novoJogador.nickname) {
    return res.status(400).send("Nome e nickname são obrigatórios.");
  }

  jogadorModel.create(novoJogador, (err, resultado) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).send("Nickname já está em uso." );
      }
      console.error("Erro ao cadastrar jogador:", err); 
      return res.status(500).send("Erro ao cadastrar jogador.");
    }

    res.status(201).send("Jogador cadastrado com sucesso!");
  });
};
