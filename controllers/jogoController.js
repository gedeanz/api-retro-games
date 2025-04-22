const jogoModel = require("../models/jogoModel");

exports.listarJogos = (req, res) => {
  jogoModel.getAll((err, resultados) => {
    if (err) return res.status(500).json({ erro: "Erro ao listar jogos." });

    if (resultados.length === 0) {
        return res.status(200).json({ mensagem: "Nenhum jogo cadastrado no momento." });
      }
      
    res.json(resultados);
  });
};

exports.buscarPorId = (req, res) => {
  const id = req.params.id;
  jogoModel.getById(id, (err, resultados) => {
    if (err) return res.status(500).json({ erro: "Erro ao buscar jogo." });
    if (resultados.length === 0) return res.status(404).json({ mensagem: "Jogo não encontrado." });
    res.json(resultados[0]);
  });
};

exports.criarJogo = (req, res) => {
    const novoJogo = req.body;
 
    const plataformasValidas = ["Super Nintendo", "Mega Drive", "Atari"];
    if (!plataformasValidas.includes(novoJogo.plataforma)) {
      return res.status(400).json({ erro: "Plataforma inválida. As opções válidas são: Super Nintendo, Mega Drive ou Atari." });
    }
  
    jogoModel.create(novoJogo, (err, resultado) => {
      if (err) return res.status(500).json({ erro: "Erro ao criar jogo." });
      res.status(201).json({ mensagem: "Jogo criado com sucesso!", id: resultado.insertId });
    });
  };

exports.atualizarJogo = (req, res) => {
  const id = req.params.id;
  const dados = req.body;
  jogoModel.update(id, dados, (err, resultado) => {
    if (err) return res.status(500).json({ erro: "Erro ao atualizar jogo." });

    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensagem: "Jogo não encontrado para atualização." });
      }
    res.json({ mensagem: "Jogo atualizado com sucesso!" });
  });
};

exports.deletarJogo = (req, res) => {
  const id = req.params.id;
  jogoModel.delete(id, (err, resultado) => {
    if (err) return res.status(500).json({ erro: "Erro ao excluir jogo." });

    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensagem: "Jogo não encontrado para exclusão." });
      }

    res.json({ mensagem: "Jogo excluído com sucesso!" });
  });
};