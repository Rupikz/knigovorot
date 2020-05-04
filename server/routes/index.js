import express from 'express';
import path from 'path';
import fs from 'fs';

import dbQuery from '../db/dbQuery';
import { selectBooksByGenreString } from '../db/dbQueryString';


const index = express.Router('/');

index.get('/', async (req, res) => {
  const selectBooksQueryArr = selectBooksByGenreString([5, 2]);
  const sectionBooks = [];
  const rowsBooks1 = await dbQuery.query(selectBooksQueryArr[0]);
  sectionBooks.push({
    name: 'Искусство, Искусствоведение, Дизайн',
    books: rowsBooks1.rows,
  });
  const rowsBooks2 = await dbQuery.query(selectBooksQueryArr[1]);
  sectionBooks.push({
    name: 'Детективы и Триллеры',
    books: rowsBooks2.rows,
  });
  try {
    const pathToFile = path.resolve(__dirname, '../config/configPictures.json');
    const fileContents = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));

    return res.render('index.hbs', {
      req, sectionBooks, fileContents,
    });
  } catch (error) {
    console.log('Ошибка в загрузке книг из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default index;
