const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const authorization = require('../helpers/check-auth');

router.get('/', taskController.getTasks);
router.get('/:name', taskController.getTask);

router.post('/add-task', authorization.checkUserAuthorization, taskController.addTask);
router.put('/edit-task/:name', authorization.checkUserAuthorization, taskController.editTask);
router.delete('/delete-task/:name', authorization.checkUserAuthorization, taskController.deleteTask);

module.exports = router;