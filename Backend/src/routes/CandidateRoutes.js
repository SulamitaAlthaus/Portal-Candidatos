const express = require('express');
const router = express.Router();

const CandidateController = require('../controller/CandidateController');
const CandValidation = require('../middlewares/CandValidation');

router.post('/', CandValidation, CandidateController.create);
router.put('/:id', CandidateController.update);
router.get('/filter/all', CandidateController.all);
router.delete('/:id', CandidateController.delete);


module.exports = router;