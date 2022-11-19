const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, require: true },
    surname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});

// Walidacja czy dany user już istnieje czy nie 
UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);