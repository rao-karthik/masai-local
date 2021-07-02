const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true);
    }
    else {
        cb (null, false);
    }
}

module.exports = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
        files: 5
    },
    fileFilter: fileFilter
})