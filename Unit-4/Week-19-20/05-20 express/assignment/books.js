const express = require('express');
const fs = require('fs');

const booksData = JSON.parse(fs.readFileSync('./booksData.json'));
// const booksData = require('./booksData.json');
// console.log(booksData);

const app = express();

app.use(express.json());
app.use(requestedBy("Kartik"));

app.get('/', (req, res)=>{
    res.status(200).send({api_requested_by: req.requesterName, books: booksData});
});

app.get('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const book = booksData.filter(item => item.id === id);
    res.send({api_requested_by: req.requesterName, book: book[0]});
});

app.post('/books/', (req, res)=>{
    const newBook = req.body;
    booksData.push(newBook);
    let data = JSON.stringify(booksData, null, 4);
    fs.writeFile('./booksData.json', data, (err)=>{
        if (err) throw err;
        console.log("The file is saved");
    });
    res.status(201).send({api_requested_by: req.requesterName, books: booksData});
});

app.put('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const editBook = req.body;
    const updatedBooks = booksData.map(book => book.id === id? editBook : book);
    let data = JSON.stringify(updatedBooks, null, 4);
    fs.writeFile('./booksData.json', data, (err)=>{
        if (err) throw err;
        console.log("The file is saved");
    });
    res.status(201).send({api_requested_by: req.requesterName, books: updatedBooks});
})

app.patch('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const editBook = req.body;
    const updatedBooks = booksData.map(book => book.id === id? {...book, ...editBook} : book);
    let data = JSON.stringify(updatedBooks, null, 4);
    fs.writeFile('./booksData.json', data, (err)=>{
        if (err) throw err;
        console.log("The file is saved");
    });
    res.status(201).send({api_requested_by: req.requesterName, books: updatedBooks});
})

app.delete('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const updatedBooks = booksData.filter(book => book.id !== id);
    let data = JSON.stringify(updatedBooks, null, 4);
    fs.writeFile('./booksData.json', data, (err)=>{
        if (err) throw err;
        console.log("The file is saved");
    });
    res.status(206).send({api_requested_by: req.requesterName, books: updatedBooks});
})

function requestedBy (name){
    return(req, res, next) =>{
        req.requesterName= name;
        next();
    }
}

app.listen(4000, ()=>{
    console.log('listeninig to port 4000')
});