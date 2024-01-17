const express = require('express');
const TaskModel = require('./models/TaskModel');
const TaskController = require('./controller/TaskController');
const router = express.Router();

const taskController = new TaskController();

router.get('/tasks', taskController.getAllTasks);
router.post('/task', taskController.createTask);
router.put('/task', taskController.updateTask);
router.delete('/task', taskController.deleteTask);

module.exports = router;