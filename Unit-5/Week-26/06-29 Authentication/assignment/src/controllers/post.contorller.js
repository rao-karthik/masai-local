const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');
const protect = require('../middlewares/protect');

router.get('/', protect ,async (req, res)=>{
    const posts = await Post.find().populate({path: 'userId', select: 'name'}).lean().exec();
    res.status(200).json({posts})
});

router.post('/', async (req, res)=>{
    const data =  req.body;
    const post = await Post.create(data);
    res.status(201).json({post});
});

module.exports = router;