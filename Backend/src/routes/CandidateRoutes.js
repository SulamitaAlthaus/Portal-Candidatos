const express = require('express');
const router = express.Router();

const CandidateController = require('../controller/CandidateController');

router.post('/', CandidateController.create);

module.exports = router;