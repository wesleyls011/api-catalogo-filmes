const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


// rotas
const movieRoutes = require('./routes/movies');
const uerRoutes = require('./routes/users');
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

// conexão com banco de dados
mongoose.connect(process.env.MONGO_URI, )