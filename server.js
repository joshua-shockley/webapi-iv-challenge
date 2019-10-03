const express = require('express');
const helmet = require('helmet');


//setup server
const server = express();


//use the stuff imported and install as librarys/middleware
server.use(helmet());
server.use(express.json());

//setup fake data
const shouts = []

//setup api call
server.get('/', (req, res) => {
    res.status(200).json({ Hello: 'node 22' });
});

server.get('/shouts', (req, res) => {
    res.status(200).json(shouts);
});


server.post('/shouts', (req, res) => {
    shouts.push(req.body);
    res.status(201).json(shouts);
})

module.exports = server;