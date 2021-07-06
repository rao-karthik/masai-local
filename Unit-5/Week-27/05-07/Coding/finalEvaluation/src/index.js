const express = require('express');
const app = express();
const passport = require('./config/passport');

const { register, login } = require('./controllers/auth.controller');
const bookController = require('./controllers/book.controller');

app.use(express.json());
app.use(passport.initialize());

app.post('/register', register);
app.post('/login', login);
app.use('/books', bookController);

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((user, done)=>{
    done(null, user);
});

app.get(
    '/auth/google',
    passport.authenticate('google', 
    { scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
);

app.get(
    '/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.status(201).json({
            status: 'success',
            token: req.user.token
        });
    }
);

module.exports = app;