const mongoose = require('mongoose');

async function initDB() {

    mongoose.connection.on("connected", () => console.log("connected to mongodb"));
    mongoose.connection.on("error", () => console.log("---", "failed connect to mongodb"));

    await mongoose.connect('mongodb+srv://Bell_Cranel:RJwjqzo1xVwMBQLO@cluster0.k44emgw.mongodb.net/?retryWrites=true&w=majority');

    return mongoose.connection.readyState;
}

module.exports = {initDB};


