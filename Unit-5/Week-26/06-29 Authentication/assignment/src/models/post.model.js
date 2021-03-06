const { Schema, model } = require('mongoose');

const postSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('post', postSchema);