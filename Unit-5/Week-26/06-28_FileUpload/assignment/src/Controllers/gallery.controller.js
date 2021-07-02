const express = require('express');
const router = express.Router();
const fs = require('fs');
const { findById, findByIdAndRemove } = require('../models/gallery.model');

const gallery = require('../models/gallery.model');
const upload = require('../utils/fileUpload');

router.get('/', async (req, res)=>{
    const data = await gallery.find().populate('userId').lean().exec();
    res.status(200).json({users: data});
});

router.get('/user/:userId', async (req, res)=>{

    const userId = req.params.userId;

    const data = await gallery.find({userId}).populate('userId').lean().exec();
    res.status(200).json({users: data});
});

router.post('/', upload.array('image'), async (req, res)=>{

    const files = req.files.map(file=> file.path);

    const data = await gallery.create({
        pictures: files,
        userId: req.body.userId
    })
    res.status(201).json({files: data});
});

router.delete('/:id', async (req, res)=>{
    const id = req.params.id;

    const pics = await gallery.findById(id).lean().exec();
    pics.pictures.map(pic => fs.unlinkSync(pic));
    await findByIdAndRemove(id);

    res.status(200).json({message: 'gallery deleted'});
})

module.exports = router;