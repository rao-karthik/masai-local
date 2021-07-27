const express = require('express');

const Album = require('../models/album.model');
const ArtistUser = require('../models/artistUser.model');

const protect = require('../middlewares/protect');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.get('/', async(req, res)=>{
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 5;

        const offset = (page - 1) * limit;

        const albums = await Album.find().populate('createdBy').skip(offset).limit(limit).lean().exec();

        res.status(200).json({
            status: 'success',
            albums
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
});

 
router.post('/', protect, authorize(['artist', 'admin']), async(req, res)=>{
    try {
        const userId = req.user._id;

        const album = await Album.create({...req.body, createdBy: userId});
        const user = await ArtistUser.updateOne({_id: userId}, {
            $push: {
                albums: album._id
            }
        }, {new: true}).exec();

        res.status(201).json({
            status: 'suucess',
            album,
            user
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
            err
        });
    }
});

router.patch('/', async(req, res)=>{
    try {
        const id = req.params.id;

        const album = await Album.findOneAndUpdate(id, req.body);

        res.status(201).json({
            status: 'suucess',
            album
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.delete('/:id', async(req, res)=>{
    try {
        const id = req.params.id;

        const album = await Album.findByIdAndDelete(id);

        res.status(201).json({
            status: 'suucess',
            album
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

module.exports = router;