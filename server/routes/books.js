import express from 'express';

const books = express.Router('/');

books.get('/', (req, res) => res.render('books.hbs', { req }));

export default books;
