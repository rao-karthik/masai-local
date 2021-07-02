const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const client = require('../config/redis');

router.get('/', async (req, res)=> {
    const page = req.query.page || 1;
    const limit = req.params.limit || 10;

    const offset = (page-1)*limit;

    client.get(`products.${page}.${limit}`, async (err, redisProducts)=>{
        if (err) return res.status(500).json({
            status: 'failed',
            message: err.message
        });

        if(redisProducts) return res.status(201).json({products: JSON.parse(redisProducts)});

        const products = await Product.find().skip(offset).limit(limit).lean().exec();
        client.set(`products.${page}.${limit}`, JSON.stringify(products));

        return res.status(200).json({products});
    });
});

router.post('/', async(req, res)=>{
    const product = await Product.create(req.body);
    let limit = req.query.limit || 10;

    let totalProducts = await Product.find().countDocuments().lean().exec();
    let page = Math.ceil(totalProducts/limit);

    client.get(`products.${page}.${limit}`, async (err, redisProducts)=>{
        if (err) return res.status(500).json({
            status: 'failed',
            message: err.message
        });

        if(redisProducts){
            let oldProducts = JSON.parse(redisProducts);
            const newProducts = [...oldProducts, product];
            client.set(`products.${page}.${limit}`, JSON.stringify(newProducts));
            
        }
        
        if (!redisProducts){
            const newProduct = [product]
            client.set(`products.${page}.${limit}`, JSON.stringify(newProduct));
        }

        return res.status(200).json({product});
    });
});

router.get('/:id', async(req, res) => {
    const id = req.params.id

    client.get(`product.${id}`, async (err, redisProduct)=> {
        if (err) return res.status(500).json({
            status: 'failed',
            message: err.message
        });

        if (redisProduct) return res.status(201).json({product: JSON.parse(redisProduct)});

        const product = await Product.findById(id).lean().exec();
        client.set(`product.${id}`, JSON.stringify(product));
        res.status(200).json({product});
    })
});

router.patch('/:id', async(req, res) => {
    const id = req.params.id;
    let limit = req.query.limit || 10;

    const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        })
        .lean()
        .exec();

    client.set(`product.${id}`, JSON.stringify(product));

    const productPosition = await Product.find({_id: {$lte: id}}).countDocuments().lean().exec();

    let page = Math.ceil(productPosition/limit);

    const offset = (page-1)*limit;
    
    const allProducts = await Product.find().skip(offset).limit(limit).lean().exec()

    client.set(`products.${page}.${limit}`, JSON.stringify(allProducts));
    
    res.status(200).json(product);
});

router.delete('/:id', async (req, res)=> {
    const id = req.params.id;
    const limit = req.query.limit || 10;

    const product = await Product.findByIdAndDelete(id).lean().exec();
    client.del(`product.${id}`);
    
    const totalProducts = await Product.find().estimatedDocumentCount().lean().exec();
    let pages = Math.ceil(totalProducts/limit);

    for(let i = 0; i < pages; i++){
        let offset = i * limit;
        const products = await Product.find().skip(offset).limit(limit).lean().exec();
        client.set(`products.${i+1}.${limit}`, JSON.stringify(products));
        client.del(`products.${pages+1}.${limit}`);
    }
    res.status(201).json({message: 'product deleted successfully', product})
});

module.exports = router; 