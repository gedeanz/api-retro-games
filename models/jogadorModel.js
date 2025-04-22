const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM jogadores", callback);
};

exports.create = (jogador, callback) => {
  const { nome, nickname } = jogador;
  db.query(
    "INSERT INTO jogadores (nome, nickname) VALUES (?, ?)",
    [nome, nickname],
    callback
  );
};
