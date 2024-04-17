const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100
    },
    address: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200
    },
    age: {
        type: Number,
        required: true,
        min: 1
    },
    gender: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
