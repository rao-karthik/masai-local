const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
    dateOfEvaluation: String,
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, 'instructor is missing'],
    },
    topicName: String,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "students"
        }
    ]
},
{
    timestamps: true,
    versionKey: false
});

const evaluation = mongoose.model('evaluations', evaluationSchema);

module.exports = evaluation;