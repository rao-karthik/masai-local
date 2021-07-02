const express = require('express');
const userController = require('./Controllers/user.controller');
const galleryController = require('./Controllers/gallery.controller');

const app = express();

app.use(express.json());

app.use('/user', userController);
app.use('/gallery', galleryController);

module.exports = app;