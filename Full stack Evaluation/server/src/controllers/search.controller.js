const express = require('express');

const Album = require('../models/album.model');
const Song = require('../models/song.model');

const router = express.Router();

router.get('/', async (req, res)=> {
    try {
        const search = req.query.s;

        const albumResult = await Album.find({$text: {$search: search}});
        const songResult = await Song.find({$text: {$search: search,
                                                    $caseSensitive: false, 
                                                    $diacriticSensitive: false }});

        res.status(200).json({
            status: 'success',
            albums: albumResult,
            songs: songResult
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

module.exports = router;