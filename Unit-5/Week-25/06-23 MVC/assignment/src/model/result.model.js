const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    marksObtained: Number,
    maximumMarks: Number,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: true
    },
    evaluation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'evaluations',
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

const result = mongoose.model('results', resultSchema);

module.exports = result;