const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: String,
    desc: String

// ----- In developing
    // date: {
    //     type: Date,
    //     default: null
    // },
    // flags: {
    //     isImportant: null,
    // }
});

const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;
