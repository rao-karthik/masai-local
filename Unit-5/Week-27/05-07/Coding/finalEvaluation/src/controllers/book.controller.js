const fs = require('fs');
const express = require('express');
const router = express.Router();
const client = require('../config/redis');

const Book = require('../models/book.model');
const protect = require('../middlewares/protect');
const upload = require('../utils/fileUpload');

router.get('/', async (req, res) => {
    try {
        client.get('books', async (err, redisBooks)=> {
            if (err) return res.status(500).json({
                status: 'failed',
                message: err.message
            });

            if(redisBooks) return res.status(201).json({
                message: 'retrieved from redis',
                books: JSON.parse(redisBooks)
            });

            const books = await Book.find().populate({path: 'authorId', select: 'name'}).lean().exec();
            client.set('books', JSON.stringify(books));
            
            res.status(200).json({
                status: 'suucess',
                books
            });
        })
        
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        client.get(`book.${id}`, async (err, redisBook)=> {
            if (err) return res.status(500).json({
                status: 'failed',
                message: err.message
            });

            if(redisBook) return res.status(201).json({
                message: 'retrieved from redis',
                books: JSON.parse(redisBooks)
            });

            const book = await Book.findById(id).populate({path: 'authorId', select: 'name'}).lean().exec();
            client.set(`book.${id}`, JSON.stringify(book));

            res.status(200).json({
                status: 'suucess',
                book
            });
        });
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.post('/', protect, upload.single('bookFrontImage'), async (req, res) => {
    try {
        const book = await Book.create({
            title: req.body.title,
            authorId: req.body.authorId,
            bookFrontImageUrl: req.file.path
        });
        client.flushall('books');

        res.status(201).json({
            status: 'success',
            book
        });
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.patch('/:bookId/update', protect, upload.single('bookFrontImage'), async (req, res) => {
    try {
        const id = req.params.bookId;
        const title = req.body.title;
        const imageUrl = req.file.path;
        
        let book = await Book.findById(id).lean().exec();
        fs.unlinkSync(book.bookFrontImageUrl);
        
        if(title && !imageUrl){
            book = await Book.findByIdAndUpdate(id, {
                title
            }, {new: true});
            client.set(`book.${id}`, JSON.stringify(book));
        }
        else if(!title && imageUrl){
            book = await Book.findByIdAndUpdate(id, {
                bookFrontImageUrl: imageUrl
            }, {new: true});
            client.set(`book.${id}`, JSON.stringify(book));
        }
        else {
            book = await Book.findByIdAndUpdate(id, {
                title,
                bookFrontImageUrl: imageUrl
            }, {new: true});
            client.set(`book.${id}`, JSON.stringify(book));
        }
        res.status(200).json({
            status: 'success',
            message: 'Book updated',
            book
        });
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

router.delete('/:bookId', protect, async (req, res) => {
    try {
        const id = req.params.bookId;

        let book = await Book.findById(id).lean().exec();
        client.del(`book.${id}`);
        fs.unlinkSync(book.bookFrontImageUrl);

        book = await Book.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'Book deleted successfylly',
            book
        });

    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});

module.exports = router;