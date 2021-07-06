require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { v4: uuid } = require('uuid');
const { newToken } = require('../controllers/auth.controller');

const User = require('../models/user.model');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
        callbackURL: "http://localhost:2333/auth/google/callback"
    },
    async function(accessToken, refreshToken, profile, done) {
        let user = await User.findOne({email: profile.emails[0].value}).lean().exec();

        if(!user) {
            user = await User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: uuid(),
                roles: ['customer']
            });
        }
        let token = newToken(user);
        return done(null, { user, token });
    }
));

module.exports = passport;