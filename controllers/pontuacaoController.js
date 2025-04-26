const pontuacaoModel = require("../models/pontuacaoModel");

exports.registrarPontuacao = (req, res) => {
  const dados = req.body;

  if (!dados.id_jogo || !dados.id_jogador || !dados.pontuacao) {
    return res.status(400).send("Todos os campos são obrigatórios (id_jogo, id_jogador, pontuacao).");
  }

  if (dados.pontuacao < 0) {
    return res.status(400).send("Pontuação não pode ser negativa.");
  }

  pontuacaoModel.validarIds(dados.id_jogo, dados.id_jogador, (err, valido) => {
    if (err) {
      console.error("Erro ao validar IDs:", err); 
      return res.status(500).send("Erro ao validar IDs.");
    }

    if (!valido.jogo) {
      return res.status(404).send("Jogo não encontrado.");
    }

    if (!valido.jogador) {
      return res.status(404).send("Jogador não encontrado.");
    }

    pontuacaoModel.inserirPontuacao(dados, (err, resultado) => {
      if (err) {
        console.error("Erro ao registrar pontuação:", err); 
        return res.status(500).send("Erro ao registrar pontuação." );
      }
      res.status(201).json(`Pontuação ${dados.pontuacao} registrada com sucesso!`);
    });
  });
};

exports.ranking = (req, res) => {
    const idJogo = req.params.idJogo;
  
    pontuacaoModel.buscarRanking(idJogo, (err, resultados) => {
      if (err) {
        console.error("Erro ao buscar ranking:", err); 
        return res.status(500).send("Erro ao buscar ranking.");
    }
  
      if (resultados.length === 0) {
        return res.status(404).send("Nenhuma pontuação encontrada para este jogo.");
      }
  
      const rankingComPosicao = resultados.map((item, index) => ({
        posicao: index + 1,
        ...item
      }));
      
      res.json(rankingComPosicao);;
    });
  };

  exports.jogosPopulares = (req, res) => {
    pontuacaoModel.buscarJogosPopulares((err, resultados) => {
      if (err) {
        console.error("Erro ao buscar jogos populares:", err); 
        return res.status(500).send("Erro ao buscar jogos populares.");
      }
  
      if (resultados.length === 0) {
        return res.status(200).send("Nenhuma pontuação registrada ainda.");
      }
  
      const rankingComPosicao = resultados.map((item, index) => ({
        posicao: index + 1,
        ...item
      }));
      
      res.json(rankingComPosicao);
    });
  };
