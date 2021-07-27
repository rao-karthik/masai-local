const express = require('express');

const Song = require('../models/song.model');
const Album = require('../models/album.model');

const protect = require('../middlewares/protect');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.get('/', async(req, res)=>{
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 10;

        const offset = (page - 1) * limit;

        const songs = await Song.find()
                                .skip(offset)
                                .limit(limit)
                                .lean()
                                .exec();

        res.status(200).json({
            status: 'success',
            songs
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.post('/:albumId', protect, authorize(['admin', 'artist']), async(req, res)=>{
    try {
        const albumId = req.params.albumId;

        const song = await Song.create({...req.body, album: albumId});
        const album = await Album.updateOne(
            {_id: albumId},
            {
                $push: {
                    songs: song._id
                }
            }
        )

        res.status(201).json({
            status: 'suucess',
            song,
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

router.patch('/', async(req, res)=>{
    try {
        const id = req.params.id;

        const song = await Song.findOneAndUpdate(id, req.body);

        res.status(201).json({
            status: 'suucess',
            song
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

        const song = await Song.findByIdAndDelete(id);

        res.status(201).json({
            status: 'suucess',
            song
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