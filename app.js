import express from 'express';
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const books = [
    {
        id: 1,
        author: "Author",
        title: "Titulinis"
    },
    {
        id: 2,
        author: "Author 2", 
        title: "Titulinis 2"
    },
    {
        id: 3,
        author: "Author 3",
        title: "Titulinis 3"
    }]

// CRUD
// Create - app.post()
// Read - app.get()
// Update - app.put()
// Delete - app.delete()

app.get('/', (req, res) => {
    res.send("Gyvasis vanduo!")
});

app.get('/demo', (req, res) => {
    res.send(['a', 'b', 'c'])
});

app.get('/demo/:id', (req, res) => {
    const id = req.params.id;
    res.send([id, cat]);
});

app.get('/demo/:cat/:id', (req, res) => {
    const cat = req.params.cat;
    const id = req.params.id;
    res.send([id, cat]);
});

// Query 
app.get('/query', (req, res) => {
    const q = req.query;
    res.send(q);
});

// GETS
app.get('/api/books', (req,res) => {
    res.send(books)
});

app.get('/api/books/:id', (req,res) => {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found ☹️");
    res.send(book)
});

// POST
app.post('/api/books', (req, res) => {
    const naujaKnyga = {
        id: books.length + 1,
        author: req.body.author,
        title: req.body.title
    }
    books.push(naujaKnyga);
    res.send(books);
});

app.listen(3000, () => console.log("Lisstening on port 3000"));

