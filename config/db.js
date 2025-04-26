const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "loks03",        
  database: "retro_games" 
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar com o banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados MySQL!");
  }
});

module.exports = db;