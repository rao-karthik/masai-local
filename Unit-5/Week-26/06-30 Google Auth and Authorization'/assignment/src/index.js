const express = require('express');
const app = express();

const { register, login } = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');
const productController = require('./controllers/product.controller');
const passport = require('./config/passport');

app.use(express.json());
app.use(passport.initialize());

app.post('/register', register);
app.post('/login', login);
app.use('/user', userController);
app.use('/product', productController);

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.deserializeUser((user, done) =>{
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