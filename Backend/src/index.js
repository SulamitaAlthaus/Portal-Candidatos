const express = require('express');
const server = express();
server.use(express.json());

const CandidateRoutes = require('./routes/CandidateRoutes');
server.use('/new', CandidateRoutes);

server.listen(3000, () => {
    console.log('API ONLINE');
});