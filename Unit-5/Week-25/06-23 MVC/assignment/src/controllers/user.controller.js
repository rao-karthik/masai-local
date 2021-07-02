const express = require('express');
const crudController = require('./crudController');

const router = express.Router();

const user = require('../model/user.model');

router.get('/', crudController(user).get);

router.get('/:id', crudController(user).getById);

router.post('/', crudController(user).post);

router.delete('/:id', crudController(user).delete);

module.exports = router;