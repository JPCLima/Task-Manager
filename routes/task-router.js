const express = require('express');
const taskController = require('./../controllers/task-controller');

const router = express.Router();

router.route('/').get(taskController.getAllTasks);

module.exports = router;
