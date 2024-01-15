const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: String,
    createdAt: Object,
    checked: Boolean

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
