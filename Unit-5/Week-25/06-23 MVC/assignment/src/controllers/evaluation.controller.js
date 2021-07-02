const express = require('express');
const crudController = require('./crudController');

const router = express.Router();

const evaluation = require('../model/evaluation.model');

router.get('/', async (req, res) => {
    try {
        const data = await evaluation.find().populate('student').lean().exec();
        res.status(200).json({data});
    }
    catch (err) {
        console.log(err);
    }
});

router.get('/:id', crudController(evaluation).getById);

router.post('/', crudController(evaluation).post);

router.delete('/:id', crudController(evaluation).delete);

module.exports = router;