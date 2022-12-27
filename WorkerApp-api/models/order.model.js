const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    name: { type: String, required: true },
    principal: { type: Object, ref: 'Worker', required: true },
    deadline: { type: Date, required: true }
})

module.exports = mongoose.model("Order", OrderSchema);