const express = require("express");
const app = express();

const jogoRoutes = require("./routes/jogoRoutes");
const jogadorRoutes = require("./routes/jogadorRoutes");
const pontuacaoRoutes = require("./routes/pontuacaoRoutes");

const PORT = 3000; 

app.use(express.json());

// Rotas
app.use("/jogos", jogoRoutes);
app.use("/jogadores", jogadorRoutes);
app.use("/pontuacoes", pontuacaoRoutes);

// Rota base (opcional)
app.get("/", (req, res) => {
  res.send("API Retro Games funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
