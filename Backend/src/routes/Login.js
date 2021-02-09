const express = require('express');
const login = express.Router();
const LoginModel = require('../model/Login');

login.post('/', async (req, res) => {

        const{email, password} = req.body;
    
        try {
            const user = await LoginModel.findOne({email,password});
            if(!user) {
                return res.status(400).json({error: 'Verifique suas credenciais'})
            } else {
                res.status(200).json('Usuário logado')
            }
            
        } catch (error) { 
            return res.status(500).json(error);
        }
});


module.exports = login;