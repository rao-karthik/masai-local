const { Schema, model } = require('mongoose');

const genre = ["rock", "pop", "blues", "folk", "hip-hop", "dance", "disco", "electronic"];

const songSchema = new Schema({
    name: {
        type: String,
        required: true,
        text: true
    },
    coverPhoto: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    singer: {
        type: String,
        required: true,
        text: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: "album"
    },
    language: {
        type: String,
        enum: ["english", "hindi", "punjabi", "haryanvi", "bhojpuri"],
        text: true
    },
    genre: {
        type: String,
        enum: genre,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('song', songSchema);