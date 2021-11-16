const express = require('express');
const taskController = require('../controllers/task-controller');

const router = express.Router();

router
  .route('/')
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

router.route('/status/:status').get(taskController.getByStatus);

module.exports = router;
