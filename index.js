// require('dotenv').config;
const express = require('express');
// const server = express();
const server = require('./server.js');
// server.get('/', (req, res) => {
//     res.status(200).json({ Hello: 'node 22' });
// });


port = process.env.PORT || 4000;



server.listen(port, () => {
    console.log(`\n   API Running on http://localhost:${port}  \n`);
});