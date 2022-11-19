const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    workerResponsible: { type: Object, ref: 'Worker', required: true },
    dateOfRegistration: { type: Date, required: true }
})

module.exports = mongoose.model('Task', TaskSchema);