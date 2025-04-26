USE retro_games;

-- Inserir jogos
INSERT INTO jogos (nome, plataforma, ano_lancamento) VALUES
('Super Mario World', 'Super Nintendo', 1990),
('Sonic the Hedgehog', 'Mega Drive', 1991),
('Pac-Man', 'Atari', 1980);

-- Inserir jogadores
INSERT INTO jogadores (nome, nickname) VALUES
('Ana', 'ana'),
('Bruno', 'bruno'),
('Carlos', 'carlos'),
('Daniela', 'dani'),
('Eduardo', 'edu'),
('Fernanda', 'fe'),
('Gabriel', 'gab'),
('Helena', 'helena'),
('Igor', 'igor'),
('Juliana', 'ju');

-- Inserir pontuações
INSERT INTO pontuacoes (id_jogo, id_jogador, pontuacao) VALUES
(1, 1, 8500),
(1, 2, 9200),
(1, 3, 7800),
(1, 4, 10000),
(1, 5, 7600),
(1, 6, 9700),
(1, 7, 8300),
(1, 8, 9100),
(1, 9, 8800),
(1, 10, 8900),
(2, 1, 4000),
(2, 2, 4200),
(2, 3, 4300),
(2, 4, 4400),
(3, 5, 500),
(3, 6, 800);