const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM jogos", callback);
};

exports.getById = (id, callback) => {
  db.query("SELECT * FROM jogos WHERE id = ?", [id], callback);
};

exports.create = (jogo, callback) => {
  const { nome, plataforma, ano_lancamento } = jogo;
  db.query(
    "INSERT INTO jogos (nome, plataforma, ano_lancamento) VALUES (?, ?, ?)",
    [nome, plataforma, ano_lancamento],
    callback
  );
};

exports.update = (id, jogo, callback) => {
  const { nome, plataforma, ano_lancamento } = jogo;
  db.query(
    "UPDATE jogos SET nome = ?, plataforma = ?, ano_lancamento = ? WHERE id = ?",
    [nome, plataforma, ano_lancamento, id],
    callback
  );
};

exports.delete = (id, callback) => {
  db.query("DELETE FROM jogos WHERE id = ?", [id], callback);
};