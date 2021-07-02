const express = require('express');
const app = express();

const { signIn, register } = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.contorller');

app.use(express.json());

app.post('/login', signIn);
app.post('/register', register);
app.use('/user', userController);
app.use('/post', postController);

module.exports = app;