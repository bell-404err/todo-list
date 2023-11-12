const { initDB } = require('../config/db');
const express = require('express');
const TaskModel = require('./models/taskModel');
const path = require('path');
require('dotenv').config(); //Содержит глобальные энвы ноды из данных файла .env

async function createServer() {
    try {
        // ----- DB
        await initDB(); //Connect to DB

        // ----- Express
        const app = express(); //Initialization server
        const port = process.env.PORT || 3000;
        // const port = 3000;

        app.use(express.json());

        // Дефолтный роут
        app.use('/static', express.static(path.resolve(__dirname, '..', 'public')));

        // app.get('/', (req, res) => {
        //     res.send('Connection successful!');
        // })

        // app - роут. async fn - контроллер
        app.get('/tasks', async (req, res) => {
            try {
                // Получение данных из БД
                const allTasks = await TaskModel.find({});
                // Отправка данных на клиент (".json()" - строгое указание формата данных)
                return res.send({ tasks: allTasks }).json();
            } catch (e) {
                res.status(400).send({ 'error': e.message });
            }
        });

        app.post('/task', async (req, res) => {
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

        app.put('/task', async (req, res) => {
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

        app.delete('/task', async (req, res) => {
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



        // * - все другие роуты
        app.get('*', async (req, res) => {
            // console.log('app get');
            res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
        });


        // Start server
        await app.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`Example app listening on port ${port}`);
        });

    } catch (e) {
        console.error(e);
    }
}



createServer()
    .then(() => console.log('Everything is fine!'));