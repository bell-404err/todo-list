const express = require('express');
const TaskModel = require('./models/taskModel');
const router = express.Router();

// app - роут. async fn - контроллер
router.get('/tasks', async (req, res) => {
    try {
        // Получение данных из БД
        const allTasks = await TaskModel.find({});
        // Отправка данных на клиент (".json()" - строгое указание формата данных)
        return res.send({ tasks: allTasks }).json();
    } catch (e) {
        res.status(400).send({ 'error': e.message });
    }
});

router.post('/task', async (req, res) => {
    try {
        const { name } = req.body; // Получение данных с клиента

        // Валидация полученных от пользователя данных
        if (!name || typeof name !== 'string') {
            throw new Error('Validation error'); // Проверка сервера
        }

        const createdTask = await TaskModel.create({ name }); // Создание записи в БД

        return res.send(createdTask); // Общение с пользователем.
        // Отправка клиенту созданной задачи (что угодно, например оповещение пользователя)
    } catch (e) {
        res.status(400).send({ 'error': e.message });
    }
});

router.put('/task', async (req, res) => {
    try {
        const { id, name } = req.body;
        if (!id || typeof id !== 'string' || !name || typeof name !== 'string') {
            throw new Error('Validation error'); // Проверка сервера
        }

        const updatedTask = await TaskModel.findOneAndUpdate({ _id: id }, { name }, { new: true });
        return res.send(updatedTask).json();
    } catch (e) {
        res.status(400).send({ 'error': e.message });
    }
});

router.delete('/task', async (req, res) => {
    try {
        const { id, name } = req.body;

        if (!id || typeof name !== 'string') {
            throw new Error('Validation error'); // Проверка сервера
        }

        await TaskModel.deleteOne({ _id: id });
        return res.send('Task was deleted').json();
    } catch (e) {
        res.status(400).send({ 'error': e.message });
    }
});

module.exports = router;