const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: String,
    checked: Boolean

});

const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;
