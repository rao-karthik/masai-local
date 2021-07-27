const express = require('express');
const cors = require('cors');

const { register, login } = require('./controllers/auth.controller');
const artistUserController = require('./controllers/artistUser.controller');
const albumController = require('./controllers/album.controller');
const playlistController = require('./controllers/playlist.controller');
const songController = require('./controllers/song.controller');
const searchController = require('./controllers/search.controller');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', login);
app.post('/register', register);

app.use('/users', artistUserController);
app.use('/albums', albumController);
app.use('/playlists', playlistController);
app.use('/songs', songController);
app.use('/search', searchController)

module.exports = app;