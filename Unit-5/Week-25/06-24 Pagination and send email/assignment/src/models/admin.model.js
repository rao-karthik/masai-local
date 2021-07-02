const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;