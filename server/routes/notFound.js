import express from 'express';

const notFound = express.Router('/');

notFound.get('/', (req, res) => res.render('notfound.hbs', { req }));

export default notFound;
