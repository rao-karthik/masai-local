const express = require('express');
const crudController = require('./crudController');

const router = express.Router();

const student = require('../model/student.model');
const evaluation = require('../model/evaluation.model');
const result = require('../model/result.model');

router.get('/', crudController(student).get);

router.get('/:id', crudController(student).getById);

router.post('/', crudController(student).post);

router.delete('/:id', crudController(student).delete);

router.get('/:type/evaluation', async (req, res) => {
    try {
        const evalType = req.params.type.toLowerCase();
        const data = await evaluation.find({topicName: evalType}, {students: true, _id: false, topicName: true}).populate({path: 'students'}).lean().exec();
        res.status(200).json({data});
    }
    catch (err) {
        console.log(err);
    }
});

router.get('/max/marks', async (req, res)=> {
    try {
        const data = await result.find({}, {student: true, marksObtained: true, _id: false}).sort({marksObtained: -1}).populate('student').limit(1).lean().exec();
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;