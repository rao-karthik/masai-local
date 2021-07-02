const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profilePicUrl: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('user', userSchema);