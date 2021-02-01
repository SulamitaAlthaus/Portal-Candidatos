const { response } = require('express');
const CandidateModel = require('../model/Candidate');

class CandidateController {

    async create(req, res){
        const task =  new CandidateModel(req.body);
        await task
            .save()
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
    async update(req, res){
        await CandidateModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    async all(req, res){
        await CandidateModel.find({})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
    async delete(req, res){
        await CandidateModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error)
        });
    }
}

module.exports = new CandidateController();