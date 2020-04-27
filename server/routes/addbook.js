import express from 'express';
import multer from 'multer';
import dbQuery from '../db/dbQuery';

const addbook = express.Router('/');

const upload = multer({
  dest: 'client/images/books',
  limits: {
    fileSize: 100000000,
  },
});

addbook.post('/', upload.array('files-book', 8), async (req, res) => {
  const imageName = [];
  req.files.map((file) => imageName.push(file.filename));
  const insertBookQuery = `INSERT INTO public.books(
    name_book, author_book, genre_id, publisher_id, year, price, id_user, id_image_book)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  const {
    name_book: nameBook, athor_book: athorBook, genre, publisher, year, price,
  } = req.body;
  const values = [
    nameBook, athorBook, +genre, +publisher, +year, +price, req.user.id, imageName,
  ];
  try {
    await dbQuery.query(insertBookQuery, values);
    req.flash('success_msg', 'Книга успешно выставленна');
    return res.render('addbook.hbs', { req, successMsg: req.flash('success_msg') });
  } catch (error) {
    console.log('Ошибка в добавлении книги:', error);
    if (error) {
      req.flash('error_msg', 'Что-то пошло не так');
    }
    return res.render('addbook.hbs', { req, errorMsg: req.flash('error_msg') });
  }
});

addbook.get('/', async (req, res, next) => {
  const selectGenresQuery = 'SELECT * FROM public.genres';
  const selectPublisherQuery = 'SELECT * FROM public.publisher';

  try {
    const rowsGenres = await dbQuery.query(selectGenresQuery);
    const genres = rowsGenres.rows;
    const rowsPublisher = await dbQuery.query(selectPublisherQuery);
    const publisher = rowsPublisher.rows;

    return res.render('addbook.hbs', { req, genres, publisher });
  } catch (error) {
    console.log('Ошибка в загрузке жанров из бд:', error);
    next();
  }
});

export default addbook;
