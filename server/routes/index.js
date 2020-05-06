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
    const selectBooksQueryArr = selectBooksByGenreString(
      [fileThemes.first.id, fileThemes.second.id],
    );
    const sectionBooks = [];
    const rowsBooks1 = await dbQuery.query(selectBooksQueryArr[0]);
    sectionBooks.push({
      name: fileThemes.first.name,
      books: rowsBooks1.rows,
    });
    const rowsBooks2 = await dbQuery.query(selectBooksQueryArr[1]);
    sectionBooks.push({
      name: fileThemes.second.name,
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
