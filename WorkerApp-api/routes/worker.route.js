const express = require('express');
const router = express.Router();
const workerController = require('../controllers/worker.controller');
const authorization = require('../helpers/check-auth');

router.get('/', workerController.getWorkers);
router.get('/:name', authorization.checkUserAuthorization, workerController.getWorkerByName);
router.post('/add-worker', workerController.addWorker);
router.put('/edit-worker/:name', workerController.editWorker);
router.delete('/delete-worker/:name', authorization.checkUserAuthorization, workerController.deleteWorker);

module.exports = router;