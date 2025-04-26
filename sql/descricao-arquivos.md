# Arquivos SQL do Projeto

Este diretório contém os arquivos SQL usados para criação e teste da base de dados do projeto **API Retro Games**.

## Arquivos disponíveis:

### 🔹 `init.sql`
Responsável por:

- Criar o banco de dados `retro_games`
- Criar as tabelas:
  - `jogos`
  - `jogadores`
  - `pontuacoes`
- Aplicar as constraints:
  - `FOREIGN KEY`
  - `CHECK` de pontuação não negativa
  - `UNIQUE` para nickname de jogador

### 🔹 `seed.sql`
Responsável por:

- Inserir **dados de exemplo** para facilitar os testes manuais e automáticos da API
- Inclui:
  - 3 jogos cadastrados
  - 10 jogadores com nicknames únicos
  - Várias pontuações distribuídas entre os jogos, suficientes para:
    - Gerar um ranking
    - Testar a listagem dos 3 jogos mais populares

## 🧪 Recomendado:
1. Execute `init.sql` primeiro para criar as estruturas.
2. Execute `seed.sql` depois, para popular com os dados de teste.

Esses arquivos podem ser executados no **MySQL Workbench**, **DBeaver**, ou via linha de comando MySQL.