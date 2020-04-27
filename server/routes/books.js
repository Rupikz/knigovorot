import express from 'express';
import dbQuery from '../db/dbQuery';

const books = express.Router('/');

books.get('/', async (req, res) => {
  const selectArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'yes\'';
  const selectNoArtGenresQuery = 'SELECT * FROM public.genres WHERE art = \'no\'';
  const selectPublisherQuery = 'SELECT * FROM public.publisher';
  const selectCountBooks = 'SELECT COUNT(*) FROM public.books';
  const countPages = Array(Math.floor(selectCountBooks / 160));
  // Тут остановился, надо сделать страницы
  let selectBooksQuery;
  if (req.query.genres) {
    selectBooksQuery = `SELECT * FROM public.books WHERE genre_id=${req.query.genres} LIMIT 16`;
  } else if (req.query.publisher) {
    selectBooksQuery = `SELECT * FROM public.books WHERE publisher_id=${req.query.publisher} LIMIT 16`;
  } else {
    selectBooksQuery = 'SELECT * FROM public.books LIMIT 16';
  }

  try {
    const rowsGenresArt = await dbQuery.query(selectArtGenresQuery);
    const genresArt = rowsGenresArt.rows;
    const rowsGenresNoArt = await dbQuery.query(selectNoArtGenresQuery);
    const genresNoArt = rowsGenresNoArt.rows;
    const rowsPublisher = await dbQuery.query(selectPublisherQuery);
    const publisher = rowsPublisher.rows;
    const rowsBooks = await dbQuery.query(selectBooksQuery);
    const booksBd = rowsBooks.rows;

    return res.render('books.hbs', {
      req, genresArt, genresNoArt, publisher, booksBd, countPages,
    });
  } catch (error) {
    console.log('Ошибка в загрузке жанров из бд:', error);
    return res.render('notfound.hbs');
  }
});

export default books;
