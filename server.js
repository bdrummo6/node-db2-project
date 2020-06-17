const express = require('express');

const welcomeRouter = require('./car-api/welcome/welcome-router');

const server = express();

server.use(express.json());

server.use('/api', welcomeRouter);

module.exports = server;