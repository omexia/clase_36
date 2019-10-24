const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create new user Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const newUserSchema = new Schema();

// Modify Schema
newUserSchema.add(UserSchema).add({
    hasPet: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', newUserSchema);