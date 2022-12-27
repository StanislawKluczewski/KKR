const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
    name: String,
    surname: String,
    function: String,
    age: Number
})

module.exports = mongoose.model('Worker', workerSchema);