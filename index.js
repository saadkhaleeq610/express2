import express from "express";

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Welcome',
        message: 'Hello from EJS',
        people: [
            'John', 'Jahne', 'Jack'
        ]
    });
})

app.listen(8000, () => console.log('Server started'));