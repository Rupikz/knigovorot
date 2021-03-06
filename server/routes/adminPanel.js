import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import dbQuery from '../db/dbQuery';


const upload = multer({
  dest: 'server/public/images/preview',
  limits: {
    fileSize: 100000000,
  },
});

const fieldsFiles = [{
  name: 'picture1', maxCount: 1,
}, {
  name: 'picture2', maxCount: 1,
}, {
  name: 'picture3', maxCount: 1,
}];

const admin = express.Router('/');

admin.post('/', upload.fields(fieldsFiles), async (req, res) => {
  if (req.files) {
    const pathToFilePictures = path.resolve(__dirname, '../config/configPictures.json');
    const fileContents = JSON.parse(fs.readFileSync(pathToFilePictures, 'utf8'));

    if (Object.prototype.hasOwnProperty.call(req.files, 'picture1')) {
      fileContents.first.image = req.files.picture1[0].filename;
    }
    if (Object.prototype.hasOwnProperty.call(req.files, 'picture2')) {
      fileContents.second.image = req.files.picture2[0].filename;
    }
    if (Object.prototype.hasOwnProperty.call(req.files, 'picture3')) {
      fileContents.third.image = req.files.picture3[0].filename;
    }

    if (req.body.src1 && req.body.src2 && req.body.src3) {
      fileContents.first.src = req.body.src1;
      fileContents.second.src = req.body.src2;
      fileContents.third.src = req.body.src3;
    }

    const fileContentsString = JSON.stringify(fileContents);
    fs.writeFile(pathToFilePictures, fileContentsString, (err) => {
      if (err) console.log('error', err);
    });
  }

  if (req.body.genre1 || req.body.genre2) {
    const pathToFileThemes = path.resolve(__dirname, '../config/configThemes.json');
    const fileContents = JSON.parse(fs.readFileSync(pathToFileThemes, 'utf8'));

    const selectGenresOneQuery = `SELECT * FROM public.genres WHERE id=${req.body.genre1}`;
    const selectGenresTwoQuery = `SELECT * FROM public.genres WHERE id=${req.body.genre2}`;

    const rowsGenresOne = await dbQuery.query(selectGenresOneQuery);
    const rowsGenresTwo = await dbQuery.query(selectGenresTwoQuery);

    const genresOneName = rowsGenresOne.rows[0].genres;
    const genresTwoName = rowsGenresTwo.rows[0].genres;

    if (req.body.genre1) {
      fileContents.first.id = req.body.genre1;
      fileContents.first.name = genresOneName;
    }
    if (req.body.genre2) {
      fileContents.second.id = req.body.genre2;
      fileContents.second.name = genresTwoName;
    }

    const fileContentsString = JSON.stringify(fileContents);
    fs.writeFile(pathToFileThemes, fileContentsString, (err) => {
      if (err) console.log('error', err);
    });
  }

  res.redirect('/admin');
});

admin.get('/', async (req, res) => {
  const selectGenresQuery = 'SELECT * FROM public.genres';
  try {
    const pathToFileThemes = path.resolve(__dirname, '../config/configThemes.json');
    const fileContentsThemes = JSON.parse(fs.readFileSync(pathToFileThemes, 'utf8'));

    const rowsGenres = await dbQuery.query(selectGenresQuery);
    const genres = rowsGenres.rows;
    const pathToFile = path.resolve(__dirname, '../config/configPictures.json');
    const fileContents = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));

    return res.render('adminPanel.hbs', {
      req, isAdmin: true, fileContents, genres, fileContentsThemes,
    });
  } catch (error) {
    console.log('Ошибка в загрузке жанров из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default admin;
