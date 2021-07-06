const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
    author: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    reader: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    admin: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('role', roleSchema);