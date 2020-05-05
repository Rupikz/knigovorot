import express from 'express';
import path from 'path';
import fs from 'fs';

import dbQuery from '../db/dbQuery';
import { selectBooksByGenreString } from '../db/dbQueryString';


const index = express.Router('/');

index.get('/', async (req, res) => {
  try {
    const pathToFileThemes = path.resolve(__dirname, '../config/configThemes.json');
    const fileThemes = JSON.parse(fs.readFileSync(pathToFileThemes, 'utf8'));
    const selectBooksQueryArr = selectBooksByGenreString([fileThemes.first, fileThemes.second]);
    // работает, сделать вывод названий
    console.log(selectBooksQueryArr);
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
    const pathToFilePictures = path.resolve(__dirname, '../config/configPictures.json');
    const filePictures = JSON.parse(fs.readFileSync(pathToFilePictures, 'utf8'));
    return res.render('index.hbs', {
      req, sectionBooks, filePictures,
    });
  } catch (error) {
    console.log('Ошибка в загрузке книг из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default index;
