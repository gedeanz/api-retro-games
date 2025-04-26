const jogoModel = require("../models/jogoModel");

exports.listarJogos = (req, res) => {
  jogoModel.getAll((err, resultados) => {
    if (err) {
      console.error("Erro ao listar jogos:", err); 
      return res.status(500).send("Erro ao listar jogos.");
    }

    if (resultados.length === 0) {
        return res.status(200).send("Nenhum jogo cadastrado no momento.");
      }
      
    res.json(resultados);
  });
};

exports.buscarPorId = (req, res) => {
  const id = req.params.id;
  jogoModel.getById(id, (err, resultados) => {
    if (err) {
      console.error("Erro ao buscar jogo:", err); 
      return res.status(500).send("Erro ao buscar jogo.");
    }

    if (resultados.length === 0) return res.status(404).send("Jogo não encontrado.");
    res.json(resultados[0]);
  });
};

exports.criarJogo = (req, res) => {

  const novoJogo = req.body;

  if (!novoJogo.nome || !novoJogo.plataforma || !novoJogo.ano_lancamento) {
    return res.status(400).send("Todos os campos são obrigatórios (nome, plataforma, ano_lancamento).");
  }

  const plataformasValidas = ["Super Nintendo", "Mega Drive", "Atari"];
  if (!plataformasValidas.includes(novoJogo.plataforma)) {
    return res.status(400).send("PLATAFORMA INVÁLIDA!! As opções válidas são: Super Nintendo, Mega Drive ou Atari.");
  }

  jogoModel.create(novoJogo, (err, resultado) => {
    if (err) {
      console.error("Erro ao criar jogo:", err); 
      return res.status(500).send("Erro ao criar jogo.");
    }
    res.status(201).send("Jogo criado com sucesso!");
  });
};

exports.atualizarJogo = (req, res) => {
  const id = req.params.id;
  const dados = req.body;

  if (!dados.nome || !dados.plataforma || !dados.ano_lancamento) {
    return res.status(400).send("Todos os campos são obrigatórios (nome, plataforma, ano_lancamento).");
  }

  jogoModel.update(id, dados, (err, resultado) => {
    if (err) {
      console.error("Erro ao atualizar jogo:", err); 
      return res.status(500).send("Erro ao atualizar jogo.");
    }

    if (resultado.affectedRows === 0) {
        return res.status(404).send("Jogo não encontrado para atualização.");
      }

    res.send("Jogo atualizado com sucesso!");
  });
};

exports.deletarJogo = (req, res) => {
  const id = req.params.id;
  jogoModel.delete(id, (err, resultado) => {
    if (err) {
      console.error("Erro ao excluir jogo:", err); 
      return res.status(500).send("Erro ao excluir jogo.");
    }

    if (resultado.affectedRows === 0) {
        return res.status(404).send("Jogo não encontrado para exclusão.");
      }

    res.send("Jogo excluído com sucesso!");
  });
};