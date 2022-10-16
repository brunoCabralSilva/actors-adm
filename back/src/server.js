const express = require('express');
const cors = require('cors');
const actors = require('./routes/actors');

const app = express();
const PORT = 3301;

app.use(cors());

app.use(express.json());

app.use('/actors', actors);

app.listen(PORT, () => { console.log(`Rodando na porta ${PORT}!`)});

module.exports = app;