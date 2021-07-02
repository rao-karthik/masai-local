const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('product', productSchema);