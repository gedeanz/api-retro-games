CREATE DATABASE retro_games;
USE retro_games;

CREATE TABLE jogos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  plataforma ENUM('Super Nintendo', 'Mega Drive', 'Atari') NOT NULL,
  ano_lancamento INT NOT NULL
);

CREATE TABLE jogadores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  nickname VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE pontuacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_jogo INT,
  id_jogador INT,
  pontuacao INT CHECK (pontuacao >= 0),
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_jogo) REFERENCES jogos(id),
  FOREIGN KEY (id_jogador) REFERENCES jogadores(id)
); 