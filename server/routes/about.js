import express from 'express';
import dbQuery from '../db/dbQuery';

const book = express.Router('/');

book.get('/', async (req, res) => res.render('about.hbs', { req }));

export default book;
