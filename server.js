const express = require("express");
const app = express();

const jogoRoutes = require("./routes/jogoRoutes");
const jogadorRoutes = require("./routes/jogadorRoutes");
const pontuacaoRoutes = require("./routes/pontuacaoRoutes");

const PORT = 3000; // Porta fixa, sem usar .env

// Middleware para aceitar JSON
app.use(express.json());

// Usando as rotas
app.use("/jogos", jogoRoutes);
app.use("/jogadores", jogadorRoutes);
app.use("/pontuacoes", pontuacaoRoutes);

// Rota base (opcional)
app.get("/", (req, res) => {
  res.send("API Retro Games funcionando!");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
