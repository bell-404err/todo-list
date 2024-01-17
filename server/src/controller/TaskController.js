const TaskModel = require('../models/TaskModel');
const TaskService = require('../services/TaskService');


class TaskController {
    constructor() {
        this.taskService = new TaskService();
    }
    getAllTasks = async (req, res) => {
        try {
            const allTasks = await this.taskService.findAll();
            return res.send({ tasks: allTasks });
        } catch (e) {
            res.status(400).send({ 'error': e.message });
        }
    };

    createTask = async (req, res) => {
        try {
            const { name, checked } = req.body; // Получение данных с клиента

            if (!name || typeof name !== 'string') {
                throw new Error('Validation error');
            }
            const createdTask = await this.taskService.create({ name, checked });

            return res.send(createdTask);
        } catch (e) {
            res.status(400).send({ 'error': e.message });
        }
    };

    updateTask = async (req, res) => {
        try {
            const { id, name, checked } = req.body;
            if (!id || typeof id !== 'string' || !name || typeof name !== 'string' || typeof checked !== 'boolean') {
                throw new Error('Validation error'); // Проверка сервера
            }

            const updatedTask = await this.taskService.updateOne(id, { name, checked });
            return res.send(updatedTask).json();
        } catch (e) {
            res.status(400).send({ 'error': e.message });
        }
    };

    deleteTask = async (req, res) => {
        try {
            const { id } = req.body;

            if (!id) {
                throw new Error('Validation error'); // Проверка сервера
            }

            await this.taskService.deleteOne(id);
            return res.send({ 'message': 'Task was deleted' }).json();
        } catch (e) {
            res.status(400).send({ 'error': e.message });
        }
    };

}

module.exports = TaskController;