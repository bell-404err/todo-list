const TaskModel = require('../models/TaskModel');

class TaskService {

    async create(data) {
        return TaskModel.create(data);
    }

    async findAll() {
        return TaskModel.find({});
    }

    async updateOne(id, data) {
        return TaskModel.findOneAndUpdate({ _id: id }, data, { new: true });
    }

    async deleteOne(id) {
        return TaskModel.deleteOne({ _id: id });
    }

}

module.exports = TaskService;