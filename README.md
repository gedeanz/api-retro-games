
# API Retro Games

Projeto prático da disciplina **Desenvolvimento de Serviços Web** — Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas.  
A API permite o gerenciamento de jogos retrô, jogadores e suas pontuações, com ranking e jogos populares.

---

## Estrutura do Projeto

- `server.js` — Arquivo principal da aplicação
- `config/` — Conexão com banco de dados (MySQL)
- `routes/` — Definição das rotas da API
- `controllers/` — Lógica de negócio de cada recurso
- `models/` — Queries SQL organizadas por entidade
- `request/` — Arquivos `.rest` para testes via REST Client (VS Code)

---

## Como Executar Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instalar Dependências

Depois que estiver na pasta do projeto, instalar as dependências com base no `package.json`:

```bash
npm install
```

Depois, para rodar o projeto:
```bash
npm run dev
```

---

### 3. Banco de Dados

Crie o banco `retro_games` e suas tabelas executando o script SQL fornecido no arquivo `init.sql`.

Atualize o arquivo `config/db.js` com os dados corretos do seu MySQL local:

```js
// Exemplo padrão do IFRS BG:
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "retro_games"
});
```

---

## Pré-requisitos e Ferramentas

### MySQL Workbench

Você pode instalar o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) para:
- Criar o banco de dados
- Executar o script SQL `init.sql`
- Visualizar e manipular os dados facilmente

> Também é possível usar DBeaver, phpMyAdmin ou terminal MySQL.

---

### Extensões do VS Code

Para facilitar os testes com os arquivos `.rest`, instale a extensão:

 **REST Client**  
🔗 [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

Com ela instalada, você pode:
- Abrir qualquer arquivo `.rest`
- Clicar em "Send Request" para testar a API diretamente

---

## Funcionalidades da API

### Jogos
- `GET /jogos` — Listar todos os jogos
- `GET /jogos/:id` — Buscar jogo por ID
- `POST /jogos` — Cadastrar novo jogo
- `PUT /jogos/:id` — Atualizar um jogo
- `DELETE /jogos/:id` — Excluir um jogo

### Jogadores
- `GET /jogadores` — Listar todos os jogadores
- `POST /jogadores` — Cadastrar jogador (nickname único)

### Pontuações
- `POST /pontuacoes` — Registrar nova pontuação (verifica existência de jogador e jogo)
- `GET /pontuacoes/ranking/:idJogo` — Top 10 pontuações de um jogo
- `GET /pontuacoes/jogos/populares` — Top 3 jogos com mais registros

---

## Testes

O projeto inclui arquivos `.rest` dentro da pasta `/request`, prontos para serem usados com a extensão **REST Client** do VS Code.

---

## Informações da Disciplina

**Disciplina:** Desenvolvimento de Serviços Web  
**Professor:** Dr. Maurício Covolan Rosito  
**Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas
