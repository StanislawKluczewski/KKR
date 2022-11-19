const express = require('express');
const router = express.Router();
const reports = require('../helpers/report');

router.post('/add-report', reports.sendReport);


module.exports = router;