const mongoose = require('mongoose');


async function initDB() {
    // console.log(process.env);

    mongoose.connection.on('connected', () => console.log('connected to mongodb'));
    mongoose.connection.on('error', () => console.log('---', 'failed connect to mongodb'));

    await mongoose.connect(process.env.MONGODB_URL);

    return mongoose.connection.readyState;
}

module.exports = { initDB };


