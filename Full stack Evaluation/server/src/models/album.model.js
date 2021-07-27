const { Schema, model } = require('mongoose');

const albumSchema = new Schema ({
    name: {
        type: String,
        required: true,
        text: true
    },
    coverPhoto: {
        type: String
    },
    songs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'song'
        }
    ],
    totalTracks: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'artistUser'
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('album', albumSchema);