const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    bookFrontImageUrl: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('book', bookSchema);