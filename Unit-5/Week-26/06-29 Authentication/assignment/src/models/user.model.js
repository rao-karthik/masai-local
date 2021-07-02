const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

userSchema.pre("save", function(next) {
    // if the password is not getting changed then we don't want to do anything
    if (!this.isModified*"password") return next();

    // otherwise we need to hash tha password and save it in the user database
    bcrypt.hash(this.password, 8, (err, hash)=> {
        if (err) return next(err);

        this.password = hash;
        next();
    });

});

userSchema.methods.checkPassword = function (password) {
    const hashedPassword = this.password;

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, (err, same) => {
            if (err) return reject(err);
            
            resolve(same);
        });
    });
};

const User = model('user', userSchema);

module.exports = User;