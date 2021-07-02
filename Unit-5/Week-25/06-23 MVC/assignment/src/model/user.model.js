const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    dob: String
},
{
    timestamps: true,
    versionKey: false
})

const user = mongoose.model('users', userSchema);

module.exports = user;