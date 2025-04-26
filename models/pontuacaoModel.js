const db = require("../config/db");

exports.validarIds = (id_jogo, id_jogador, callback) => {
  const result = {};

  db.query("SELECT id FROM jogos WHERE id = ?", [id_jogo], (err, jogo) => {
    if (err) return callback(err);

    result.jogo = jogo.length > 0;

    db.query("SELECT id FROM jogadores WHERE id = ?", [id_jogador], (err, jogador) => {
      if (err) return callback(err);

      result.jogador = jogador.length > 0;
      callback(null, result);
    });
  });
};

exports.inserirPontuacao = (pontuacaoJogo, callback) => {
  const { id_jogo, id_jogador, pontuacao } = pontuacaoJogo
  db.query(
    "INSERT INTO pontuacoes (id_jogo, id_jogador, pontuacao) VALUES (?, ?, ?)",
    [id_jogo, id_jogador, pontuacao],
    callback
  );
};

exports.buscarRanking = (idJogo, callback) => {
    const sql = `
      SELECT j.nickname, p.pontuacao, p.data_registro
      FROM pontuacoes p
      JOIN jogadores j ON p.id_jogador = j.id
      WHERE p.id_jogo = ?
      ORDER BY p.pontuacao DESC
      LIMIT 10
    `;
  
    db.query(sql, [idJogo], callback);
  };

  exports.buscarJogosPopulares = (callback) => {
    const sql = `
      SELECT j.nome, j.plataforma, COUNT(p.id) AS total_pontuacoes
      FROM jogos j
      JOIN pontuacoes p ON j.id = p.id_jogo
      GROUP BY j.id
      ORDER BY total_pontuacoes DESC
      LIMIT 3
    `;
  
    db.query(sql, callback);
  };
