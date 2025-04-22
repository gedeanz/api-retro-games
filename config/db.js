const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",         // coloque sua senha se houver
  database: "retro_games" // nome do seu banco
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar com o banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados MySQL!");
  }
});

module.exports = db;