const express = require('express');

const PlayList = require('../models/playList.model');

const router = express.Router();

router.get('/', async(req, res)=>{
    try {
        const page = +req.query.page | 1;
        const limit = +req.query.limit | 10;

        const offset = (page - 1) * limit;

        const playLists = await PlayList.find().skip(offset).limit(limit).lean().exec();

        res.status(200).json({
            status: 'success',
            playLists
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'err.message'
        })
    }
});

module.exports = router;