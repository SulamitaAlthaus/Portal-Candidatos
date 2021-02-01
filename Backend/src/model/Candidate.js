const moongoose = require('../config/database');
const Schema = moongoose.Schema;

const Candidate = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    idade: {type: Number, required: true},
    urlLinkedin: {type: String, required: false},
    tecnologias: {type: Array, required: true},
});

module.exports = moongoose.model('Candidate', Candidate);