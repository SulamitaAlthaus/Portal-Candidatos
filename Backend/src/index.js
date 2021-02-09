const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());


const CandidateRoutes = require('./routes/CandidateRoutes');
server.use('/new', CandidateRoutes);

const Login = require('./routes/Login');
server.use('/login', Login);


server.listen(3000, () => {
    console.log('API ONLINE');
});