const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// sequelize para conectar com o banco de dados
const sequelize = new Sequelize(
  process.env.DB_NAME,    // nome do banco de dados
  process.env.DB_USER,    // usuario do banco de dados
  process.env.DB_PASSWORD, // senha do banco de dados
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306
  }
);

// testar a conexao com o bando de dados
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

// rotas
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/category');

app.use('/movies', movieRoutes);
app.use('/users', userRoutes);
app.use('/categories', userCategories);

// inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




