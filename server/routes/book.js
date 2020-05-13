import express from 'express';
import dbQuery from '../db/dbQuery';

const book = express.Router('/');

book.get('/', async (req, res) => {
  const idBook = req.originalUrl.slice(3);
  const selectBook = `SELECT books.id, name_book, author_book, year, 
  price, id_user, id_image_book, exists, genres, publisher FROM public.books 
  INNER JOIN public.genres ON public.books.genre_id = public.genres.id 
  INNER JOIN public.publisher ON public.books.publisher_id = public.publisher.id 
  WHERE public.books.id=${idBook}`;
  try {
    const rowsBook = await dbQuery.query(selectBook);
    const bookInformation = rowsBook.rows[0];
    const [preview, ...rest] = bookInformation.id_image_book;
    bookInformation.preview = preview;
    bookInformation.id_image_book = rest;
    console.log('инфа', bookInformation);
    return res.render('book.hbs', { req, bookInformation });
  } catch (error) {
    console.log('Ошибка в загрузке книг из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default book;
