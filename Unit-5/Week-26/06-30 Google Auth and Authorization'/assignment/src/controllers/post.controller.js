const express = require('express');
const router = express();

const protect = require('../middlewares/protect');
const Post = require('../models/post.model');

router.get('/', protect, async(req, res)=>{
    const posts = await Post.find().populate({path: 'userId', select: 'name email'}).lean().exec();
    res.status(200).json({posts});
});

router.post('/', async (req, res) => {
    const post = await Post.create(req.body);
    res.status(201).json({
        message: 'post posted',
        post
    });
});

module.exports = router;