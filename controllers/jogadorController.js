const jogadorModel = require("../models/jogadorModel");

exports.listarJogadores = (req, res) => {
  jogadorModel.getAll((err, resultados) => {
    if (err) return res.status(500).json({ erro: "Erro ao listar jogadores." });

    if (resultados.length === 0) {
      return res.status(200).json({ mensagem: "Nenhum jogador cadastrado no momento." });
    }

    res.json(resultados);
  });
};

exports.criarJogador = (req, res) => {
  const novoJogador = req.body;

  if (!novoJogador.nome || !novoJogador.nickname) {
    return res.status(400).json({ erro: "Nome e nickname são obrigatórios." });
  }

  jogadorModel.create(novoJogador, (err, resultado) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ erro: "Nickname já está em uso." });
      }
      return res.status(500).json({ erro: "Erro ao cadastrar jogador." });
    }

    res.status(201).json({ mensagem: "Jogador cadastrado com sucesso!", id: resultado.insertId });
  });
};
