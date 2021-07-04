const { Schema, model } = require('mongoose');

const productSchema = new Schema ({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sellerId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model('product', productSchema);