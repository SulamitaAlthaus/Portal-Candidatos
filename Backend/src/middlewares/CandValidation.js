const Candidate = require('../model/Candidate');

const CandValidation = async(req, res, next) => {

    const {nome, email, idade, tecnologias} = req.body;

    if(!nome)
        return res.status(400).json({error: 'Nome é obrigatório'});
    else if(!email)
        return res.status(400).json({error: 'Email é obrigatório'});
    else if(!idade)
        return res.status(400).json({error: 'Idade é obrigatório'});
    else if(!tecnologias)
        return res.status(400).json({error: 'O campo tecnologias é obrigatório'});
    else
        next();
}
module.exports = CandValidation;