const moongoose = require('../config/database');
const Schema = moongoose.Schema;

const Login = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = moongoose.model('Login', Login);