const { initDB } = require('../config/db');
const express = require('express');
const path = require('path');
require('dotenv').config(); //Содержит глобальные энвы ноды из данных файла .env
const tasks = require('./tasks');

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

        app.use('/api', tasks);

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