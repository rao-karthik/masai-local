const express = require('express');
const router = express();

const protect = require('../middlewares/protect');
const Product = require('../models/product.model');
const { admin, seller, customer } = require('../utils/constants');
const authorize = require('../middlewares/authorize');

router.get('/', protect, authorize([ admin, seller, customer ]), async(req, res)=>{
    const products = await Product.find().populate({path: 'sellerId', select: 'name email'}).lean().exec();
    res.status(200).json({products});
});

router.post('/', protect, authorize([ admin, seller ]),  async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        message: 'Congratulation, the product is posted successfully',
        product
    });
});

router.patch('/:id', protect, authorize([ admin, seller ]), async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
    res.status(201).json({
        status: 'product details updated successfullly',
        product
    });
});

router.delete('/:id', protect, authorize([admin, seller]), async (req, res)=>{
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.status(200).json({
        status: 'product successfully deleted'
    });
});

module.exports = router;