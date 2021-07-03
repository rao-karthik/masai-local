const express = require('express');
const app = express();

const { register, login } = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');

app.use(express.json());

app.post('/register', register);
app.post('/login', login);
app.use('/user', userController);
app.use('/post', postController);

module.exports = app;