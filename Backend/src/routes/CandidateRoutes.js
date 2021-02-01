const express = require('express');
const router = express.Router();

const CandidateController = require('../controller/CandidateController');
const CandValidation = require('../middlewares/CandValidation');

router.post('/', CandValidation, CandidateController.create);

module.exports = router;