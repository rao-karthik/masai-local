const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const artistUserSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    mobile: {
        type: String,
        maxLength: 10,
        minLength: 10,
        default: '          '
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    albums: [
        {
            type: Schema.Types.ObjectId,
            ref: "album"
        }
    ],
    playlist: [
        {
            type: Schema.Types.ObjectId,
            ref: "playlist"
        }
    ],
    role: {
        type: String,
        enum: ["user", "artist", "admin"],
        default: "user"
    }
},
{
    timestamps: true,
    versionKey: false
});

artistUserSchema.pre('save', function(next) {
    
    if(!this.isModified('password')) return next;

    bcrypt.hash(this.password, 8, (err, hash)=>{
        if(err) return next(err);

        this.password = hash;
        next();
    });
});

artistUserSchema.methods.checkPassword = function (password) {
    const hashedPassword = this.password;

    return new Promise ((resolve, reject)=>{
        bcrypt.compare(password, hashedPassword, (err, same)=>{
            if (err) return reject(err);

            resolve(same);
        });
    });
};

module.exports = model('artistUser', artistUserSchema);