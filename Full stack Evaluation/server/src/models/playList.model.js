const { Schema, model } = require('mongoose');

const playListSchema =  new Schema ({
    name: {
        type: String
    },
    songs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'song'
        }
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'artistUser'
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('playlist', playListSchema);