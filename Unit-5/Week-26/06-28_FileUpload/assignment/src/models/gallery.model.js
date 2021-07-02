const {Schema, model} = require('mongoose');

const gallerySchema = new Schema({
    pictures: [
        {
            type: String,
            require: true
        }
    ],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = model('userGallery', gallerySchema);