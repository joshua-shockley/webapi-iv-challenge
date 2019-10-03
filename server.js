const express = require('express');
const helmet = require('helmet');


//setup server
const server = express();


//use the stuff imported and install as librarys/middleware
server.use(helmet());
server.use(express.json());

//setup api call
server.get('/', (req, res) => {
    res.status(200).json({ Hello: 'node 22' });
});

module.exports = server;