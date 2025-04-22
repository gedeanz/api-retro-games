const pontuacaoModel = require("../models/pontuacaoModel");

exports.registrarPontuacao = (req, res) => {
  const { id_jogo, id_jogador, pontuacao } = req.body;

  if (pontuacao < 0) {
    return res.status(400).json({ erro: "Pontuação não pode ser negativa." });
  }

  pontuacaoModel.validarIds(id_jogo, id_jogador, (err, valido) => {
    if (err) return res.status(500).json({ erro: "Erro ao validar IDs." });

    if (!valido.jogo) {
      return res.status(404).json({ erro: "Jogo não encontrado." });
    }

    if (!valido.jogador) {
      return res.status(404).json({ erro: "Jogador não encontrado." });
    }

    pontuacaoModel.inserirPontuacao({ id_jogo, id_jogador, pontuacao }, (err, resultado) => {
      if (err) return res.status(500).json({ erro: "Erro ao registrar pontuação." });
      res.status(201).json({ mensagem: "Pontuação registrada com sucesso!", id: resultado.insertId });
    });
  });
};

exports.ranking = (req, res) => {
    const idJogo = req.params.idJogo;
  
    pontuacaoModel.buscarRanking(idJogo, (err, resultados) => {
      if (err) return res.status(500).json({ erro: "Erro ao buscar ranking." });
  
      if (resultados.length === 0) {
        return res.status(404).json({ mensagem: "Nenhuma pontuação encontrada para este jogo." });
      }
  
      res.json(resultados);
    });
  };

  exports.jogosPopulares = (req, res) => {
    pontuacaoModel.buscarJogosPopulares((err, resultados) => {
      if (err) return res.status(500).json({ erro: "Erro ao buscar jogos populares." });
  
      if (resultados.length === 0) {
        return res.status(200).json({ mensagem: "Nenhuma pontuação registrada ainda." });
      }
  
      res.json(resultados);
    });
  };
