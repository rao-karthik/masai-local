const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    rollId: String,
    batch: String,
},
{
    timestamps: true,
    versionKey: false
})

const student = mongoose.model('students', studentSchema);

module.exports = student;