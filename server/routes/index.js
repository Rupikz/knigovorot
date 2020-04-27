import express from 'express';

import dbQuery from '../db/dbQuery';
import { selectBooksByGenreString } from '../db/dbQueryString';


const index = express.Router('/');

index.get('/', async (req, res) => {
  const selectBooksQueryArr = selectBooksByGenreString([11, 12]);
  const books = [];

  async function selectBooks(arr) {
    await Promise.all(arr.map(async (book) => {
      const rowsBooks = await dbQuery.query(book);
      books.push(rowsBooks.rows);
    }));
  }

  try {
    selectBooks(selectBooksQueryArr); // я хз но вроде асинхронно плохо работает
    return res.render('index.hbs', {
      req, books,
    });
  } catch (error) {
    console.log('Ошибка в загрузке книг из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default index;
