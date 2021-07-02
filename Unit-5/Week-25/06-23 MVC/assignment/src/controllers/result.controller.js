const express = require('express');
const crudController = require('./crudController');

const router = express.Router();

const result = require('../model/result.model');

router.get('/', crudController(result).get);

router.get('/:id', crudController(result).getById);

router.post('/', crudController(result).post);

router.delete('/:id', crudController(result).delete);

module.exports = router;